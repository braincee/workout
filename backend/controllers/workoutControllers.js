const Workout = require('../models/Workout')
const mongoose = require('mongoose')

//get all workouts
const getAllWorkOuts = async (req, res) => {
    const allworkouts = await Workout.find({}).sort({createdAt: -1})
    res.status(200).json(allworkouts)
}


//get a single workout

const singleWorkout = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({error: 'No single id found'})
    }

    const workout = await Workout.findById(id)

    if(!workout) {
        return res.status(404).json({ error: "No single workout found"})
    }

    res.status(200).json(workout)
}



// create new workout

const createWorkout = async (req, res) => {
    const {title, reps, load} = req.body
    
    // add document from db
    try {
      const workout = await Workout.create({title, reps, load})
      res.status(200).json(workout)
    } catch(error) {
       res.status(400).json({error: error.message})
    }

}


// delete a workout

const deleteWorkout = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({error: "No delete id found"})
    }

    const workout = await Workout.findByIdAndDelete({_id: id})

    if(!workout){
        return res.status(400).json({error: "No delete workout found"})
    }

    res.status(200).json(workout)
}


// update a workout

const updateWorkout = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({error: "No update id found"})
    }

    const workout = await Workout.findByIdAndUpdate({ _id: id }, { ...req.body })

    if(!workout) {
        return res.status(404).json({ error: "No update id found"})
    }

    res.status(200).json(workout)
}





module.exports = {
    getAllWorkOuts,
    singleWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
}