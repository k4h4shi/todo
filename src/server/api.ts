import { Router } from "express";
import { urlencoded, json } from "body-parser";
import todoListRouter from "./routers/todolists";
import todoRouter from "./routers/todos";
import searchRouter from "./routers/search";

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
api.use("/todos", todoRouter);
api.use("/search", searchRouter);

export default api;
