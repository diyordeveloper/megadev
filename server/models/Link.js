import { model, Schema } from "mongoose";

export default model(
  "Link",
  new Schema(
    {
      icon: String,
      link: String,
      status: Boolean,
    },
    { timestamps: true }
  )
);
