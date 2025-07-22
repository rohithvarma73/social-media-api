// src/app.js

const express = require("express");
require("dotenv").config();
const postRoutes = require("./routes/postRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Routes
app.use("/posts", postRoutes);

// Root route (optional)
app.get("/", (req, res) => {
  res.send("✅ API is running");
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
