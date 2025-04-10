import React from 'react';
import PropTypes from 'prop-types';

const NutritionList = ({ nutrition }) => {
  if (!nutrition || nutrition.length === 0) {
    return (
      <div className="empty-state">
        <p>No nutrition information available for this condition.</p>
      </div>
    );
  }

  return (
    <div className="nutrition-list">
      {nutrition.map((item, index) => (
        <article key={index} className="nutrition-card">
          <h4 className="nutrition-title">{item.food}</h4>
          
          {item.benefits && (
            <div className="nutrition-section">
              <h5>Benefits:</h5>
              <p>{item.benefits}</p>
            </div>
          )}
          
          {item.servingSize && (
            <div className="nutrition-meta">
              <p><strong>Serving Size:</strong> {item.servingSize}</p>
            </div>
          )}
          
          {item.recipes && item.recipes.length > 0 && (
            <div className="nutrition-section">
              <h5>Recipes:</h5>
              <ul className="recipes-list">
                {item.recipes.map((recipe, i) => (
                  <li key={i}>{recipe}</li>
                ))}
              </ul>
            </div>
          )}
          
          {item.avoid && item.avoid.length > 0 && (
            <div className="nutrition-avoid">
              <h5>Foods to Avoid:</h5>
              <ul className="avoid-list">
                {item.avoid.map((food, i) => (
                  <li key={i}>{food}</li>
                ))}
              </ul>
            </div>
          )}
        </article>
      ))}
    </div>
  );
};

NutritionList.propTypes = {
  nutrition: PropTypes.array
};

export default NutritionList;