import { model, Schema } from "mongoose";

export default model(
  "BlogsCategory",
  new Schema(
    {
      category: String,
      status: Boolean,
    },
    { timestamps: true }
  )
);
