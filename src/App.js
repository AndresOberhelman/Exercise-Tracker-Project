import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import {Routes, Route, Link } from "react-router-dom";
import Navbar from './components/navbar.component';
 import ExerciseList from "./components/exercises-list.component";
 import EditExercise from "./components/edit-exercises.component";
 import CreateUser from "./components/create-user.component";
 import CreateExercise from "./components/create-exercise.component";


function App() {
  return(
 <Navbar>
  <Routes>
    <Route path="/" element={ExerciseList} />
    <Route path="/edit/:id" element= {EditExercise} />
    <Route path="/create" element= {CreateExercise} />
    <Route path="/user" element = {CreateUser} />
  </Routes>
  </Navbar>
  )
}

export default App;
