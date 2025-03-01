import mongoose from "mongoose";

const ProviderSchema = new mongoose.Schema({
    userId: {
        type: Schema.Types.ObjectId,
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
