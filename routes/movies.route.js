import express from "express";
import {
  movieIndex,
  movieCreate,
  movieDelete,
  movieUpdate,
  singleMovie,
} from "../controllers/movies.controller.js";

const router = express.Router();

// CRUD functionality for movies

//R- For Reading
router.get("/", movieIndex);

router.get("/:id", singleMovie);

//C- For Create
router.post("/", movieCreate);

//U- For Update
router.put("/:id", movieUpdate);

//D- For Delete
router.delete("/:id", movieDelete);

export default router;
