const express = require('express');
const app = express();
const connectDB = require('../config/db');
const Game = require('../models/Game');

app.use(express.json());
connectDB();

// GET
app.get('/games', async (req, res) => {
  const games = await Game.find();
  res.json(games);
});

// POST
app.post('/games', async (req, res) => {
  const game = new Game(req.body);
  await game.save();
  res.json(game);
});

// DELETE
app.delete('/games/:id', async (req, res) => {
  await Game.findByIdAndDelete(req.params.id);
  res.json({ message: "Game deleted" });
});

app.listen(3001, () => {
  console.log("Game Service jalan di 3001");
});