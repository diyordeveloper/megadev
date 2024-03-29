import { Router } from "express";
import About from "../models/About.js";
import { upload, UploadImage } from "../config/upload.js";

export default Router()
  .get("/", async (_, res) => {
    try {
      const result = await About.findOne();
      res.json({ status: true, result });
    } catch (err) {
      res.json({ status: false, message: err });
    }
  })
  .put("/", upload.single("image"), async (req, res) => {
    try {
      if (req.file) {
        UploadImage(req.file, async (resp) => {
          req.body.image = resp.url;
          const result = await About.findOneAndUpdate(
            {},
            { $set: req.body },
            { new: true }
          );
          res.json({ status: true, result, message: "Successfully updated!" });
        });
      } else {
        const result = await About.findOneAndUpdate(
          {},
          { $set: req.body },
          { new: true }
        );
        res.json({ status: true, result, message: "Successfully updated!" });
      }
    } catch (err) {
      res.json({ status: false, message: err });
    }
  });
