import mongoose from "mongoose";

const ProviderSchema = new mongoose.Schema({
    patient: {
        type: Schema.Types.ObjectId,
        ref: 'Patient',
        required: true
    },
    provider: {
        type: Schema.Types.ObjectId,
        ref: 'Provider',
        required: true
    },
    name: {
        type: [String],
        required: true
    },
    eventDate: {
        type: Date,
        required: true
    }
}, {timestamps: true});

export const User = mongoose.model("Provider", ProviderSchema);
