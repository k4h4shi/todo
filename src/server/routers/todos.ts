import { Router } from "express";
import * as todos from "../controllers/todos";
const router = Router();

router.patch("/:id", todos.update);

export default router;
