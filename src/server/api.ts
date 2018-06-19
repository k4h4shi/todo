import { Router } from "express";
import { urlencoded, json } from "body-parser";
import todoListRouter from "./routers/todolists";

const api = Router();

// register body-parser
api.use(
  urlencoded({
    extended: true
  })
);
api.use(json());

// register routes.
api.use("/todolists", todoListRouter);

export default api;
