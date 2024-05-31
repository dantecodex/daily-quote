import express from "express";
import { getAllQuote } from "../controllers/quote_controller.js";

const router = express.Router()

router.route("/").get(getAllQuote)

export default router