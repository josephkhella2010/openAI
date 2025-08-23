/* const express = require("express");
const OpenAI = require("openai");
const dotenv = require("dotenv");

dotenv.config();

const router = express.Router();
const openai = new OpenAI({
  apiKey: process.env.VITE_OPENAI_API_KEY, // 🔑 from .env
});
router.post("/postQuestion", async (req, res) => {
  try {
    const { AiMessage } = req.body;
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // or gpt-4o-mini
      messages: [{ role: "user", content: AiMessage }],
    });

    res.json({
      reply: completion.choices[0].message.content,
    });
  } catch (error) {
    return res.status(409).json({ error: "error with post question" });
  }
});

router.get("/postQuestion", async (req, res) => {
  try {
  } catch (error) {
    return res.status(409).json({ error: "error with post question" });
  }
});

module.exports = router;
 */
const express = require("express");
const axios = require("axios");
const router = express.Router();
const dotenv = require("dotenv");
dotenv.config();

const OPENROUTER_API_KEY = process.env.VITE_OPENAI_API_KEY;

router.post("/postQuestion", async (req, res) => {
  try {
    const { AiChat } = req.body;

    if (!AiChat)
      return res.status(400).json({ error: "AiMessage is required" });

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "gpt-3.5-turbo", // change to other supported models if desired
        messages: [{ role: "user", content: AiChat }],
      },
      {
        headers: {
          Authorization: `Bearer ${OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const reply = response.data.choices[0].message.content;
    res.json({ reply });
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ error: "OpenRouter request failed" });
  }
});

module.exports = router;
