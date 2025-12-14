import { model, Schema } from "mongoose";

const schema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  des: {
    type: String,
    required: true,
    unique: true,
  },
});

// create model
const Movie = model("Movie", schema);

export default Movie;
