const express = require('express')

const router = express.Router();

//get all workouts
router.get('/', ( req, res ) => {
  res.json({message: "Get all workouts"})
})


// get a single workout
router.get('/:id', (req, res) => {
    res.json({message: "Get single workout"})
})

// post a new workout
router.post('/', (req, res) => {
    res.json({message: "Post a new Workout"})
})

// delete a workout
router.delete('/:id', (req, res) => {
    res.json({message: "delete a workout"})
})

//update a workout
router.patch('/:id', (req, res) => {
    res.json({message: "update a workout"})
})


module.exports = router