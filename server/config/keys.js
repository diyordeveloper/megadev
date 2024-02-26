import { config } from "dotenv"

config()

export const port = process.env.PORT

export const mongourl = process.env.MONGOURL

export const imgpub = process.env.IMAGEKIT_PUB_KEY

export const imgsrv = process.env.IMAGEKIT_URL_END

export const imgprv = process.env.IMAGEKIT_PPV_KEY