import Condition from '../models/Condition.js';

// Get all conditions
export const getAllConditions = async(req, res) => {
    try {
        const conditions = await Condition.find({});
        res.json(conditions);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get condition by name
export const getConditionByName = async(req, res) => {
    try {
        const condition = await Condition.findOne({ name: req.params.name });
        if (!condition) {
            return res.status(404).json({ error: 'Condition not found' });
        }
        res.json(condition);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Add a new condition
export const addCondition = async(req, res) => {
    try {
        const condition = new Condition(req.body);
        await condition.save();
        res.status(201).json(condition);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Update a condition
export const updateCondition = async(req, res) => {
    try {
        const condition = await Condition.findOneAndUpdate({ name: req.params.name },
            req.body, { new: true }
        );
        if (!condition) {
            return res.status(404).json({ error: 'Condition not found' });
        }
        res.json(condition);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete a condition
export const deleteCondition = async(req, res) => {
    try {
        const condition = await Condition.findOneAndDelete({ name: req.params.name });
        if (!condition) {
            return res.status(404).json({ error: 'Condition not found' });
        }
        res.json({ message: 'Condition deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};