import React from 'react'

const WorkoutDetails = ({ workout}) => {
  return (
    <div>
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p>Load in (kg): <strong>{workout.load}</strong></p>
            <p>Reps: <strong>{workout.reps}</strong></p>
            <p>{workout.createdAt}</p>
        </div>
    </div>
  )
}

export default WorkoutDetails;