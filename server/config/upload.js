import fs from "fs";
import url from "url";
import ImageKit from "imagekit";
import multer from "multer";
import { join, extname } from "path";
import { imgprv, imgpub, imgsrv } from "./keys.js";
import { v4 as uuid } from "uuid";

export const dirname = url.fileURLToPath(new URL(".", import.meta.url));

const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, join(dirname, "../", "upload"));
  },
  filename: (_, file, cb) => {
    cb(null, "file-" + uuid() + extname(file.originalname));
  },
});

export const upload = multer({ storage: storage });

export const imagekit = new ImageKit({
  publicKey: imgpub,
  privateKey: imgprv,
  urlEndpoint: imgsrv,
});

export const UploadImage = (file, cb) =>
  fs.readFile(join(dirname, "../", "upload", file.filename), (_, data) => {
    imagekit.upload({ file: data, fileName: file.filename }, async (_, resp) =>
      cb(resp)
    );
  });
