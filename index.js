import express from "express";
import dotenv from "dotenv";
import movieRoutes from "./routes/movies.route.js";
import connectDB from "./lib/db.js";

dotenv.config(); // 👈 MUST be called

const app = express();
const port = process.env.PORT || 5000;

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ msg: "Suresh Fullstack Developer" });
});

// CRUD functionality for movies
// client -> middleware -> server
app.use("/movies", movieRoutes);

app.listen(port, () => {
  console.log(`Server successfully running on port ${port}`);
});
