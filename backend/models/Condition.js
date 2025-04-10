import mongoose from 'mongoose';

const remedySchema = new mongoose.Schema({
    title: String,
    description: String,
    ingredients: [String],
    preparation: String,
    warnings: String
});

const exerciseSchema = new mongoose.Schema({
    title: String,
    description: String,
    steps: [String],
    duration: String,
    frequency: String,
    precautions: String
});

const nutritionSchema = new mongoose.Schema({
    food: String,
    benefits: String,
    servingSize: String,
    recipes: [String],
    avoid: [String]
});

const conditionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        enum: [
            'Diabetes',
            'Heart Disease',
            'Chronic Kidney Disease',
            'Liver Disease',
            'Thyroid Disease',
            'Anemia',
            'Hypertension',
            'Stroke Prediction',
            'Hepatitis',
            'Breast Cancer'
        ]
    },
    description: String,
    homeRemedies: [remedySchema],
    exercises: [exerciseSchema],
    nutrition: [nutritionSchema],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

conditionSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

const Condition = mongoose.model('Condition', conditionSchema);
export default Condition;