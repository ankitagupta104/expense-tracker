const mongoose = require("mongoose");
require('dotenv').config()

const connectDB = async () => {
    try{
        await mongoose.connect("mongodb+srv://Ankita:password157@expensetracker.tbisvhf.mongodb.net/?retryWrites=true&w=majority&appName=expenseTracker", {});
        console.log("MongoDB connected");
    } catch(err) {
        console.error("Error connecting to MongoDB", err);
        process.exit(1);
    }

};

module.exports = connectDB;