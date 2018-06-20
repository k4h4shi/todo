import { Router } from "express";
import * as search from "../controllers/search";

const router = Router();

router.get("/", search.index);

export default router;
