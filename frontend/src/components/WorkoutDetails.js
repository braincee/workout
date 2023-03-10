import React from 'react';
import { useWorkoutContext } from '../hooks/useWorkoutContext';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { useAuthContext } from '../hooks/useAuthContext';

const WorkoutDetails = ({ workout }) => {
    
    const { dispatch } = useWorkoutContext()
    const { user } = useAuthContext()

    const handleDelete = async () => {

      if(!user) {
        return
      }
      
      const response = await fetch('/api/workouts/' + workout._id, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
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
            <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
            <span onClick={handleDelete} className="material-symbols-outlined">delete</span>
        </div>
    </div>
  )
}

export default WorkoutDetails;