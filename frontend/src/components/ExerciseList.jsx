import React from 'react';
import PropTypes from 'prop-types';

const ExerciseList = ({ exercises }) => {
  if (!exercises || exercises.length === 0) {
    return (
      <div className="empty-state">
        <p>No exercises available for this condition.</p>
      </div>
    );
  }

  return (
    <div className="exercise-list">
      {exercises.map((exercise, index) => (
        <article key={index} className="exercise-card">
          <h4 className="exercise-title">{exercise.title}</h4>
          {exercise.description && (
            <p className="exercise-description">{exercise.description}</p>
          )}
          
          {exercise.steps && exercise.steps.length > 0 && (
            <div className="exercise-section">
              <h5>Steps:</h5>
              <ol className="steps-list">
                {exercise.steps.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </div>
          )}
          
          {(exercise.duration || exercise.frequency) && (
            <div className="exercise-meta">
              {exercise.duration && (
                <p><strong>Duration:</strong> {exercise.duration}</p>
              )}
              {exercise.frequency && (
                <p><strong>Frequency:</strong> {exercise.frequency}</p>
              )}
            </div>
          )}
          
          {exercise.precautions && (
            <div className="exercise-precautions">
              <h5>Precautions:</h5>
              <p>{exercise.precautions}</p>
            </div>
          )}
        </article>
      ))}
    </div>
  );
};

ExerciseList.propTypes = {
  exercises: PropTypes.array
};

export default ExerciseList;