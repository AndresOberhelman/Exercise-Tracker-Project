const router = require('express').Router();
const { Router } = require('express');
let Exercise = require('../models/exercise.model');

router.route("/").get((req,res) => { //get request
    Exercise.find() //find exercises
    .then(exercises => res.json(exercises)) // returns in json 
    .catch(err => res.status(400).json('Error: ' + err)) //returns error if not found
    });

router.route('/add').post((req,res) => { // post to add an exercise
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);
    

const newExercise = new Exercise ({
username,
description,
duration,
date,
});

newExercise.save() //save new exercise to database
.then(() =>res.json('Exercise Added!'))
.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req,res)=> { //gets all exercises
    Exercise.findById(req.params.id)
    .then(exercise=>res.json(exercise))
    .catch(err =>res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req,res)=> { // deletes a specific exercise by id
    Exercise.findByIdAndDelete(req.params.id)
    .then(()=>res.json('Exercise deleted.'))
    .catch(err =>res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req,res)=> { // updates an exercise by Id
    Exercise.findById(req.params.id)
    .then(exercise => {
        exercise.username = req.body.username;
        exercise.description = req.body.description;
        exercise.duration = Number(req.body.duration);
        exercise.date = Date.parse(req.body.date);

        exercise.save() // saves the changes
            .then(()=>res.json('Exercise updated!'))
            .catch(err=> res.status(400).json('Error: ' + err));
    })
});

module.exports = router;