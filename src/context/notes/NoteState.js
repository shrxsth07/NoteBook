import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const [notes, setNotes] = useState([]);

  // Get auth token from localStorage
  const authToken = localStorage.getItem("token");

  // Get all Notes
  const getNotes = async () => {
    if (!authToken) {
      console.error("No auth token found, user not logged in");
      setNotes([]); // Clear notes or handle unauthorized state
      return;
    }

    try {
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": authToken,
        },
      });

      if (response.status === 401) {
        // Unauthorized — you might want to log out user or redirect
        console.error("Unauthorized! Please login again.");
        setNotes([]);
        return;
      }

      const json = await response.json();
      setNotes(json);
    } catch (error) {
      console.error("Failed to fetch notes:", error);
      setNotes([]);
    }
  };

  // Add a Note
  const addNote = async (title, description, tag) => {
    if (!authToken) {
      console.error("No auth token found, user not logged in");
      return;
    }

    try {
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": authToken,
        },
        body: JSON.stringify({ title, description, tag }),
      });

      const note = await response.json();
      setNotes(notes.concat(note));
    } catch (error) {
      console.error("Failed to add note:", error);
    }
  };

  // Delete a Note
  const deleteNote = async (id) => {
    if (!authToken) {
      console.error("No auth token found, user not logged in");
      return;
    }

    try {
      await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": authToken,
        },
      });

      const newNotes = notes.filter((note) => note._id !== id);
      setNotes(newNotes);
    } catch (error) {
      console.error("Failed to delete note:", error);
    }
  };

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    if (!authToken) {
      console.error("No auth token found, user not logged in");
      return;
    }

    try {
      await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": authToken,
        },
        body: JSON.stringify({ title, description, tag }),
      });

      // Update local state after successful edit
      const newNotes = notes.map((note) => {
        if (note._id === id) {
          return { ...note, title, description, tag };
        }
        return note;
      });

      setNotes(newNotes);
    } catch (error) {
      console.error("Failed to edit note:", error);
    }
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
