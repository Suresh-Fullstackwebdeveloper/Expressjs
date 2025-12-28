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

app.post("/signup", (req, res) => {
  const { name, email } = req.body;
  res.json({
    message: `User ${name} and with email ${email} created Sucessfully`,
  });
});

app.put("/users/:id", (req, res) => {
  const user_id = req.params.id;
  const { name, email } = req.body;
  res.json({
    message: `User ${user_id} Updated to ${name},${email}`,
  });
});

app.delete("/users/:id", (req, res) => {
  const user_id = req.params.id;
  res.json({
    message: `User ${user_id} deleted sucessfully`,
  });
});

app.get("/users/:name/:id", (req, res) => {
  const { name, id } = req.params;

  // validate id (exactly 5 digits)
  if (!/^[0-9]{5}$/.test(id)) {
    return res.status(400).json({
      error: "ID must be exactly 5 digits",
    });
  }

  res.json({ name, id });
});

// app.get("/user/:userName", (req, res) => {
//   const username = req.params.userName;
//   res.send(`Welcome ${username}`);
// });

// app.get("/search", (req, res) => {
//   const keyword = req.query.keyword;
//   res.send(`Searching For ${keyword}`);
// });

// CRUD functionality for movies
// client -> middleware -> server
app.use("/movies", movieRoutes);

app.listen(port, () => {
  console.log(`Server successfully running on port http://localhost:${port}`);
});
