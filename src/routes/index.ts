import express from "express";
import { getHome } from "../controllers/indexControllers";

const router = express.Router();

router.get("/", getHome);

export default router;
