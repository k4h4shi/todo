import { Router } from "express";
import * as todoLists from "../controllers/todolists";

const router = Router();

router.get("/", todoLists.index);
router.get("/:id", todoLists.show);
router.post("/", todoLists.create);
router.post("/:id/todos/", todoLists.createTodo);
router.put("/:id/todos/:todoId", todoLists.updateTodo);

export default router;
