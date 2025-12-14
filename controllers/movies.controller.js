import Movie from "../models/movie.model.js";

export const movieIndex = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const movieCreate = async (req, res) => {
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

export const singleMovie = async (req, res) => {
  try {
    const movies = await Movie.findById(req.params.id);
    if (movies == null) {
      return res.status(404).json({ message: "Cannot Find Movies" });
    } else {
      res.json(movies);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const movieUpdate = async (req, res) => {};

export const movieDelete = (req, res) => {
  res.send("Deleted the movies");
};
