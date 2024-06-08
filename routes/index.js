import express from "express";
import { generateQuote } from "../controllers/genController.js";
const router = express.Router();

router.get("/", generateQuote);

export default router;
