import { Router } from "express";
import Portfolio from "../models/Portfolio.js";
import { upload, UploadImage } from "../config/upload.js";

export default Router()
  .get("/", async (_, res) => {
    try {
      const result = await Portfolio.find();
      res.json({ status: true, result });
    } catch (err) {
      res.json({ status: false, message: err });
    }
  })
  .post("/", upload.array("images", 10), async (req, res) => {
    try {
      if (req.files.length > 0) {
        req.body.images = [];
        req.files.map((file, i) => {
          UploadImage(file, (c) => {
            req.body.images.push(c.url);
            if (req.files.length - 1 === i) {
              Portfolio.create(req.body).then((result) =>
                res.json({ status: true, result })
              );
            }
          });
        });
      } else {
        await Portfolio.create(req.body).then((result) =>
          res.json({ status: true, result })
        );
      }
    } catch (err) {
      console.log(err);
      res.json({ status: false, message: err });
    }
  })
  .put("/:id", async (req, res) => {
    try {
      const result = await Portfolio.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.json({ status: true, result });
    } catch (err) {
      res.json({ status: false, message: err });
    }
  })
  .put("/upload/:id", upload.single("image"), async (req, res) => {
    try {
      UploadImage(file, async (resp) => {
        const result = await Portfolio.findByIdAndUpdate(
          req.params.id,
          { $push: { images: resp.url } },
          { new: true }
        );
        res.json({ status: true, result });
      });
    } catch (err) {
      console.log(err);
      res.json({ status: false, message: err });
    }
  })
  .put("/remove/:id", async (req, res) => {
    try {
      const result = await Portfolio.findByIdAndUpdate(
        req.params.id,
        { $pull: { images: req.body.filename } },
        { new: true }
      );
      res.json({ status: true, result });
    } catch (err) {
      res.json({ status: false, message: err });
    }
  })
  .delete("/:id", async (req, res) => {
    try {
      const result = await Portfolio.findByIdAndDelete(req.params.id);
      res.json({ status: true, result });
    } catch (err) {
      res.json({ status: false, message: err });
    }
  });
