//importing model
const mongoose = require("mongoose");

//making connections
mongoose.connect("mongodb://localhost/CSV");
//setting it to db
const db = mongoose.connection;

//checking connections
//if error occurs
db.on("error", console.error.bind(console, "Error connecting to DB"));
// when db connects successfully
db.once("open", function(){
    console.log("Successfully connected to DB");
});