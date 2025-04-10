import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ConditionSelector from '../components/ConditionSelector';
import HomeRemedyList from '../components/HomeRemedyList';
import ExerciseList from '../components/ExerciseList';
import NutritionList from '../components/NutritionList';

const HomePage = () => {
  const [conditions, setConditions] = useState([]);
  const [selectedCondition, setSelectedCondition] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchConditions = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/conditions');
        setConditions(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchConditions();
  }, []);

  const handleConditionChange = async (conditionName) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/conditions/${conditionName}`);
      setSelectedCondition(response.data);
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="container">
      <header>
        <h1>Health Information Portal</h1>
        <p>Find home remedies, exercises, and nutrition advice for various health conditions</p>
      </header>
      
      <ConditionSelector 
        conditions={conditions} 
        onConditionChange={handleConditionChange} 
      />
      
      {selectedCondition && (
        <div className="condition-info">
          <h2>{selectedCondition.name}</h2>
          {selectedCondition.description && (
            <p className="condition-description">{selectedCondition.description}</p>
          )}
          
          <div className="info-sections">
            <section className="info-section">
              <h3><i className="icon remedy-icon"></i> Home Remedies</h3>
              <HomeRemedyList remedies={selectedCondition.homeRemedies} />
            </section>
            
            <section className="info-section">
              <h3><i className="icon exercise-icon"></i> Exercises</h3>
              <ExerciseList exercises={selectedCondition.exercises} />
            </section>
            
            <section className="info-section">
              <h3><i className="icon nutrition-icon"></i> Nutrition</h3>
              <NutritionList nutrition={selectedCondition.nutrition} />
            </section>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;