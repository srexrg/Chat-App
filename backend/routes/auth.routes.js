import express from "express";
import { signup, login, logout } from "../controllers/auth.controllers.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", login);
router.post("/logout", logout);

export default router;
