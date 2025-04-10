import React from 'react';
import PropTypes from 'prop-types';

const HomeRemedyList = ({ remedies }) => {
  if (!remedies || remedies.length === 0) {
    return (
      <div className="empty-state">
        <p>No home remedies available for this condition.</p>
      </div>
    );
  }

  return (
    <div className="remedy-list">
      {remedies.map((remedy, index) => (
        <article key={index} className="remedy-card">
          <h4 className="remedy-title">{remedy.title}</h4>
          {remedy.description && (
            <p className="remedy-description">{remedy.description}</p>
          )}
          
          {remedy.ingredients && remedy.ingredients.length > 0 && (
            <div className="remedy-section">
              <h5>Ingredients:</h5>
              <ul className="ingredient-list">
                {remedy.ingredients.map((ingredient, i) => (
                  <li key={i}>{ingredient}</li>
                ))}
              </ul>
            </div>
          )}
          
          {remedy.preparation && (
            <div className="remedy-section">
              <h5>Preparation:</h5>
              <p className="preparation-text">{remedy.preparation}</p>
            </div>
          )}
          
          {remedy.warnings && (
            <div className="remedy-warnings">
              <h5>Warnings:</h5>
              <p>{remedy.warnings}</p>
            </div>
          )}
        </article>
      ))}
    </div>
  );
};

HomeRemedyList.propTypes = {
  remedies: PropTypes.array
};

export default HomeRemedyList;