import { config } from "dotenv";
import express from "express";
import next from "next";
import mongoose from "mongoose";
import api from "./api";
import routes from "./routes";
import errorHandlers from "./handlers/errors";

config();
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const mongoDatabase = process.env.MONGO_DATABASE;

const app = next({ dir: "./src", dev });
const handler = routes.getRequestHandler(app);

const db = mongoose.connection;
db.on("error", () => {
  console.error("connection error:");
});
db.once("open", () => {
  console.log("connected to mongodb");
});
mongoose.connect(mongoDatabase);

app.prepare().then(() => {
  const server = express();

  server.use("/api", api);

  server.use(handler);

  server.use(errorHandlers);

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
