const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config(); // have environment variables

const app = express(); //express server
const port = process.env.PORT || 5000;

//cors mildware
app.use(cors());
app.use(express.json()); //parse json

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true}
 );
const connection = mongoose.connection;
connection.once('open', () => {
   console.log("MongoDB database connection established successfully");
 })

 // require files
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
// use files
app.use('/exercises', exercisesRouter); //loads everything in exercise route
app.use('/users',usersRouter); //loads everything on user route


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`); //start the server
});