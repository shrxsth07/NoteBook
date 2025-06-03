import { useState } from "react";
import NoteContext from "./noteContext";
// import react from "react"; 
// import { useState } from "react";

const NoteState = (props) => {
  const notesInitial = [
    {
      "_id": "683de9b989ad75d16f380133",
      "user": "683ddc70f29c7d68f0d7cf8b",
      "title": "My Title",
      "description": "Please wake up early",
      "tag": "Personal",
      "date": "2025-06-02T18:13:13.910Z",
      "__v": 0
    },
    {
      "_id": "683e68ddbadb7e13ad345d96",
      "user": "683ddc70f29c7d68f0d7cf8b",
      "title": "My Title 2",
      "description": "Please wake up early 2",
      "tag": "Personal",
      "date": "2025-06-03T03:15:41.964Z",
      "__v": 0
    },
    {
      "_id": "683de9b989ad75d16f380137",
      "user": "683ddc70f29c7d68f0d7cf8b",
      "title": "My Title",
      "description": "Please wake up early",
      "tag": "Personal",
      "date": "2025-06-02T18:13:13.910Z",
      "__v": 0
    },
    {
      "_id": "683de9b989ad75d16f380132",
      "user": "683ddc70f29c7d68f0d7cf8b",
      "title": "My Title",
      "description": "Please wake up early",
      "tag": "Personal",
      "date": "2025-06-02T18:13:13.910Z",
      "__v": 0
    },
    {
      "_id": "683de9b989ad75d16f380131",
      "user": "683ddc70f29c7d68f0d7cf8b",
      "title": "My Title",
      "description": "Please wake up early",
      "tag": "Personal",
      "date": "2025-06-02T18:13:13.910Z",
      "__v": 0
    }
  ]
  const [notes, setNotes] = useState(notesInitial)
  
//   const host = "http://localhost:5000"
//   const notesInitial = []


//   // Get all Notes
//   const getNotes = async () => {
//     // API Call 
//     const response = await fetch(`${host}/api/notes/fetchallnotes`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzMWRjNWUzZTQwMzdjZDQ3MzRhMDY2In0sImlhdCI6MTYzMDY2OTU5Nn0.hJS0hx6I7ROugkqjL2CjrJuefA3pJi-IU5yGUbRHI4Q"
//       }
//     });
//     const json = await response.json() 
//     setNotes(json)
//   }

  // Add a Note
  const addNote = (title,description,tag) => {
    // TODO: API Call
    note=null;
//     // API Call 
//     const response = await fetch(`${host}/api/notes/addnote`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzMWRjNWUzZTQwMzdjZDQ3MzRhMDY2In0sImlhdCI6MTYzMDY2OTU5Nn0.hJS0hx6I7ROugkqjL2CjrJuefA3pJi-IU5yGUbRHI4Q"
//       },
//       body: JSON.stringify({title, description, tag})
//     });

//     const note = await response.json();
    setNotes(notes.push(note))
  }

  // Delete a Note
  const deleteNote =() => {
//     // API Call
//     const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
//       method: 'DELETE',
//       headers: {
//         'Content-Type': 'application/json',
//         "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzMWRjNWUzZTQwMzdjZDQ3MzRhMDY2In0sImlhdCI6MTYzMDY2OTU5Nn0.hJS0hx6I7ROugkqjL2CjrJuefA3pJi-IU5yGUbRHI4Q"
//       }
//     });
//     const json = response.json(); 
//     const newNotes = notes.filter((note) => { return note._id !== id })
//     setNotes(newNotes)
  }

  // Edit a Note
  const editNote = () => {
//     // API Call 
//     const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//         "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzMWRjNWUzZTQwMzdjZDQ3MzRhMDY2In0sImlhdCI6MTYzMDY2OTU5Nn0.hJS0hx6I7ROugkqjL2CjrJuefA3pJi-IU5yGUbRHI4Q"
//       },
//       body: JSON.stringify({title, description, tag})
//     });
//     const json = await response.json(); 

//      let newNotes = JSON.parse(JSON.stringify(notes))
//     // Logic to edit in client
//     for (let index = 0; index < newNotes.length; index++) {
//       const element = newNotes[index];
//       if (element._id === id) {
//         newNotes[index].title = title;
//         newNotes[index].description = description;
//         newNotes[index].tag = tag; 
//         break; 
//       }
//     }  
//     setNotes(newNotes);
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote}}>
      {props.children}
    </NoteContext.Provider>
  )
}
export default NoteState;