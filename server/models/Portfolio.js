import { model, Schema } from "mongoose";

export default model(
  "Portfolio",
  new Schema(
    {
      title: String,
      client: String,
      category: String,
      link: String,
      description: String,
      images: [String],
      view: Number,
      share_counter: Number,
      status: Boolean,
    },
    { timestamps: true }
  )
);
