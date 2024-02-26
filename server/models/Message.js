import { model, Schema } from "mongoose";

export default model(
  "Message",
  new Schema(
    {
      name: String,
      email: String,
      phone: String,
      message: String,
    },
    { timestamps: true }
  )
);
