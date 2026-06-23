import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const app = express();


app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));




app.use(express.json());


app.post("/generate", async (req, res) => {
  const { flower, wrapper, ribbon } = req.body;

  const prompt = `A beautiful bouquet with ${flower}, ${wrapper}, ${ribbon}, realistic`;

  try {
    const response = await fetch("https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.HF_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        prompt,
        size: "512x512"
      })
    });

    const imageBuffer = await response.arrayBuffer();

    res.set("Content-Type", "image/png");
    res.send(Buffer.from(imageBuffer));

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Image generation failed" });
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});

app.listen(5050, () => {
  console.log("Server running on http://localhost:5050");
});