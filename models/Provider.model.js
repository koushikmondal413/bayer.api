import mongoose from "mongoose";

const ProviderSchema = new mongoose.Schema({
    service: {
        type: [String],
    },
}, {timestamps: true});

export const User = mongoose.model("Provider", ProviderSchema);
