import { config } from "dotenv"

config()

export const port = process.env.PORT

export const mongourl = process.env.MONGOURL