import { model, Schema } from "mongoose";

const schema = new Schema({
  title: String,
  des: String,
});

// create model
const Movie = model("Movie", schema);

export default Movie;
