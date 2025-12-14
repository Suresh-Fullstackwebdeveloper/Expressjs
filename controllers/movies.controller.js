import Movie from "../models/movie.model.js";

export const movieIndex = (req, res) => {
  res.send("All the movies");
};

export const movieCreate = async (req, res) => {
  // console.log(req.body);

  const newMovie = new Movie({
    title: req.body.title,
    des: req.body.des,
  });
  try {
    const movie = await newMovie.save();
    return res.status(201).json(movie);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

export const movieUpdate = (req, res) => {
  res.send("updated the movies");
};

export const movieDelete = (req, res) => {
  res.send("Deleted the movies");
};
