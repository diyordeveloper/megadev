import { model, Schema } from "mongoose";

export default model(
  "Home",
  new Schema(
    {
      image: String,
      name: String,
      aboutme: String,
      developer: [String],
    },
    { timestamps: true }
  )
);
