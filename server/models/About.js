import { model, Schema } from "mongoose";

export default model(
  "About",
  new Schema(
    {
      image: String,
      title: String,
      subtitle: String,
      description: String,
      
      birthday: String,
      age: String,
      address: String,
      email: String,
      phone: String,
      nationality: String,
      study: String,
      degree: String,
      interest: String,
      freelance: String,
    },
    { timestamps: true }
  )
);
