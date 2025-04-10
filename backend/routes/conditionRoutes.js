import express from 'express';
import {
    getAllConditions,
    getConditionByName,
    addCondition,
    updateCondition,
    deleteCondition
} from '../controllers/conditionController.js';

const router = express.Router();

// Get all conditions
router.get('/', getAllConditions);

// Get condition by name
router.get('/:name', getConditionByName);

// Add a new condition
router.post('/', addCondition);

// Update a condition
router.put('/:name', updateCondition);

// Delete a condition
router.delete('/:name', deleteCondition);

export default router;