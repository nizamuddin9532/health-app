import React from 'react';
import PropTypes from 'prop-types';

const ConditionSelector = ({ conditions, onConditionChange }) => {
  return (
    <div className="condition-selector">
      <div className="select-wrapper">
        <select 
          className="condition-dropdown"
          onChange={(e) => onConditionChange(e.target.value)}
          defaultValue=""
        >
          <option value="" disabled>Select a health condition</option>
          {conditions.map((condition) => (
            <option key={condition._id} value={condition.name}>
              {condition.name}
            </option>
          ))}
        </select>
        <span className="dropdown-arrow">▼</span>
      </div>
    </div>
  );
};

ConditionSelector.propTypes = {
  conditions: PropTypes.array.isRequired,
  onConditionChange: PropTypes.func.isRequired
};

export default ConditionSelector;