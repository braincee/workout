const express = require('express')
const { createWorkout, getAllWorkOuts, singleWorkout, deleteWorkout,
    updateWorkout } = require('../controllers/workoutControllers')

const requireAuth = require('../middleware/requireAuth')

const router = express.Router();

// require auth for all workout routes
router.use(requireAuth)

//get all workouts
router.get('/', getAllWorkOuts)


// get a single workout
router.get('/:id', singleWorkout)

// post a new workout
router.post('/', createWorkout)

// delete a workout
router.delete('/:id', deleteWorkout)

//update a workout
router.patch('/:id', updateWorkout)


module.exports = router