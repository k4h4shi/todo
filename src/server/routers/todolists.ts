import { Router } from "express";
import * as todoLists from "../controllers/todolists";
import * as todos from "../controllers/todos";
const router = Router();

router.get("/", todoLists.index);
router.get("/:id", todoLists.show);
router.post("/", todoLists.create);
router.post("/:id/todos/", todos.create);

export default router;
