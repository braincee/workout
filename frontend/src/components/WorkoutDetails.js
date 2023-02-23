import React from 'react';
import { useWorkoutContext } from '../hooks/useWorkoutContext';

const WorkoutDetails = ({ workout }) => {
    
    const { dispatch } = useWorkoutContext()
    const handleDelete = async () => {
      const response = await fetch('/api/workouts/' + workout._id, {
        method: 'DELETE'
      })  

      const json = await response.json()

      if(response.ok) {
        dispatch({type: 'DELETE_WORKOUT', payload: json})
      }
    }

  return (
    <div>
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p>Load in (kg): <strong>{workout.load}</strong></p>
            <p>Reps: <strong>{workout.reps}</strong></p>
            <p>{workout.createdAt}</p>
            <span onClick={handleDelete}>delete</span>
        </div>
    </div>
  )
}

export default WorkoutDetails;