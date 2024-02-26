import express from "express";
import cors from "cors";
import { createServer } from "http";
import { port } from "./config/keys.js";
import DB from "./config/database.js";

import portfolioRoutes from "./routes/portfolio.js";
import blogsRoutes from "./routes/blogs.js";
import categoryblogsRoutes from "./routes/categoryblogs.js";

const app = express();
const server = createServer(app);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// portfolio
app.use("/portfolio", portfolioRoutes);
// blogs
app.use("/blogs", blogsRoutes);
app.use("/categoryblogs", categoryblogsRoutes);

server.listen(port, () => {
  DB();
  console.log(`Server running bro... ${`http://localhost:${port}`}`);
});
