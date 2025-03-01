import mongoose from "mongoose";

const GoalSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    expected: {
        type: Number
    },
    unit: {
        type: String,
    },
    value: {
        type: Number
    }
})

const PatientSchema = new mongoose.Schema({
    diseases: {
        type: [String],
    },
    goals: {
        type: [GoalSchema],
    }
}, {timestamps: true});

export const User = mongoose.model("Patient", PatientSchema);
