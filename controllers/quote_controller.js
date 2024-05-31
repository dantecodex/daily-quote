import Quote from "../models/quote_model.js";

const getAllQuote = async (req, res, next) => {
    try {
        const quotes = Quote.find();

        res.status(200).json({
            count: quotes.length,
            quotes
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Failed to get Quotes",
            error
        })
    }
}

export { getAllQuote }