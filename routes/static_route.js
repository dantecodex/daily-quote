import express from "express";
import checkAuth from "../middleware/checkAuth.js";
import User from "../models/user_model.js";
import CustomError from "../utils/customError.js";
import asyncErrorHandler from "../utils/asyncErrorHandler.js";

const router = express.Router();


router.route('/').get((req, res) => {
    res.render("index");
});


router.route('/login').get(checkAuth, (req, res) => {
    res.render("login");
});


router.route('/signup').get((req, res) => {
    res.render("signup");
});


router.route('/dashboard/:id').get(checkAuth, asyncErrorHandler(async (req, res) => {
    // if (req.user._id !== req.params.id) {
    //     throw new CustomError("Access Denied", 401)
    // }

    const user = req.user
    res.render("dashboard", { user });

}));


router.route('/error').get((req, res) => {
    res.render("error");
});

router.route('/404').get((req, res) => {
    res.render("page404");
});

export default router;
