import { model, Schema } from "mongoose";

export default model(
  "Skill",
  new Schema(
    {
      title: String,
      percent: Number,
      category: String,
      status: Boolean,
    },
    { timestamps: true }
  )
);
