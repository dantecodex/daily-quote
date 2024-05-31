import mongoose from "mongoose";

const quoteSchema = new mongoose.Schema({
    quote: {
        type: String,
        required: [true, "Quote is needed"],
        minlength: 10
    },
    category: {
        type: [String],
        required: [true, "Quote category is needed"],
    }
}, { timestamps: true })

const Quote = mongoose.model("Quote", quoteSchema)

export default Quote