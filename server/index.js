import express from "express";
import cors from "cors";
import { createServer } from "http";
import { port } from "./config/keys.js";
import DB from "./config/database.js";

const app = express();
const server = createServer(app);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

server.listen(port, () => {
  DB();
  console.log(`Server megadev running... ${`http://localhost:${port}`}`);
});
