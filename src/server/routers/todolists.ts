import { Router } from "express";
import * as todoLists from "../controllers/todolists";

const router = Router();

router.get("/", todoLists.index);
router.get("/:id", todoLists.show);
router.post("/", todoLists.create);

export default router;
