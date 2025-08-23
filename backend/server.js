/* const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const OpenAI = require("openai");
const PORT = process.env.PORT || 3300;
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", require("./ApiRoutes/OpenAIRoute"));

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
 */

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAIRoute from "./ApiRoutes/OpenAIRoute.js";
const PORT = process.env.PORT || 3300;

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", OpenAIRoute);

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
