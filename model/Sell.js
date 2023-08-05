import mongoose from "mongoose";

const SellSchema = new mongoose.Schema({

    product: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    quantity: {
        type: Number,
        required: true,
        trim: true
    },
    total: {
        type: Number,
        required: true,
        trim: true
    }
     
        

}, { timestamps: true });
export default mongoose.model("Sell", SellSchema);