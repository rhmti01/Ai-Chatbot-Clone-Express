import express from "express";
import { callOpenAI } from "../services/openai.service.js";

const router = express.Router();

router.post("/chat", async (req, res) => {
  try {
    const { messages } = req.body;

    if (!messages) {
      return res.status(400).json({ message: "messages is required" });
    }

    const result = await callOpenAI(messages);

    res.json(result);
  } catch (error) {
    res.status(500).json({
      message: error.message || "OPENAI_REQUEST_FAILED",
    });
  }
});

export default router;
