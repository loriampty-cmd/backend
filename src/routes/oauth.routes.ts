import { Router } from "express";
import { googleLogin, googleCallback } from "../controllers/oauth.controller.js";

const router = Router();

// Google OAuth routes
router.get("/google", googleLogin);
router.get("/callback/google", googleCallback);

export default router;
