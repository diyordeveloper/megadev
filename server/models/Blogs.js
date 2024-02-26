import { model, Schema } from "mongoose";

export default model(
  "Blogs",
  new Schema(
    {
      title: String,
      author: String,
      description: String,
      category: String,
      tags: [String],
      images: [String],
      viewCount: {
        type: Number,
        default: 0,
      },
      share_counter: Number,
      status: Boolean,
    },
    { timestamps: true }
  )
);
