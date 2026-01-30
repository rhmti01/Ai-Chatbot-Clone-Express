import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import aiRoutes from "./routes/ai.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", aiRoutes);

app.listen(process.env.PORT, () => {
  console.log(`✅ Backend running on http://localhost:${process.env.PORT}`);
});
