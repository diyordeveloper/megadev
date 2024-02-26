import { Router } from "express";
import BlogsCategory from "../models/BlogsCategory.js";

export default Router()
  .get("/", async (_, res) => {
    try {
      const result = await BlogsCategory.find();
      res.json({ status: true, result });
    } catch (err) {
      res.json({ status: false, message: err });
    }
  })
  .post("/", async (req, res) => {
    try {
      const result = await BlogsCategory.create(req.body);
      res.json({ status: true, result });
    } catch (err) {
      res.json({ status: false, message: err });
    }
  })
  .put("/:id", async (req, res) => {
    try {
      const result = await BlogsCategory.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.json({ status: true, result });
    } catch (err) {
      res.json({ status: false, message: err });
    }
  })
  .delete("/:id", async (req, res) => {
    try {
      const result = await BlogsCategory.findByIdAndDelete(req.params.id);
      res.json({ status: true, result });
    } catch (err) {
      res.json({ status: false, message: err });
    }
  });
