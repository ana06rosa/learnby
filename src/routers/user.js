import express from "express";
import { registerUserPost, registerUserGet, loginUserPost, loginUserGet } from "../controllers/auth.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.post("/register", registerUserPost)
router.get("/register", registerUserGet)

router.get("/login", loginUserGet)
router.post("/login", loginUserPost)

export default router;