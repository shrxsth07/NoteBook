const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/notebook";

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected to Mongo Successfully");
    } catch (err) {
        console.error("Failed to connect to MongoDB:", err);
    }
};

module.exports = connectToMongo;
