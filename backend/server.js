const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./db");
const mongoose = require("mongoose");

dotenv.config();

const app = express();

/* Middleware */
app.use(cors());
app.use(express.json());

/* DB */
connectDB();

/* Schema */
const FavoriteSchema = new mongoose.Schema(
  {
    movieId: { type: Number, required: true, unique: true },
    title: { type: String, required: true },
    poster: String,
    rating: Number,
  },
  { timestamps: true }
);

const Favorite = mongoose.model("Favorite", FavoriteSchema);

/* TEST */
app.get("/", (req, res) => {
  res.send("Movie Mania API Running");
});

/* POST - ADD FAVORITE */
app.post("/favorites", async (req, res) => {
  try {
    console.log("POST BODY:", req.body);

    const exists = await Favorite.findOne({ movieId: req.body.movieId });
    if (exists) {
      return res.status(400).json({ message: "Already in favorites" });
    }

    const data = await Favorite.create(req.body);
    res.status(201).json(data);
  } catch (err) {
    console.log("POST ERROR:", err.message);
    res.status(500).json({ error: err.message });
  }
});

/* GET */
app.get("/favorites", async (req, res) => {
  try {
    const data = await Favorite.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* DELETE */
app.delete("/favorites/:movieId", async (req, res) => {
  try {
    await Favorite.deleteOne({ movieId: Number(req.params.movieId) });
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* Server */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on ${PORT}`));