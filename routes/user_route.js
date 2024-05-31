import express from "express";
import { createUser, loginUser, settings } from "../controllers/user_controller.js";
import checkAuth from "../middleware/checkAuth.js";

const router = express.Router()

router.route('/signup').post(createUser)
router.route('/login').post(loginUser)
router.route('/settings').post(checkAuth, settings)
router.route('/logout').get((req, res) => {
    res.clearCookie("token").redirect("/")
})

export default router