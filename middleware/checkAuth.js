import jwt from "jsonwebtoken";

import CustomError from "../utils/customError.js";
import asyncErrorHandler from "../utils/asyncErrorHandler.js";
import User from "../models/user_model.js";


const checkAuth = asyncErrorHandler(async (req, res, next) => {
    const testToken = req.cookies.token

    if (!testToken) {
        if (req.originalUrl.includes("/dashboard")) {
            return res.redirect('/login')
        }
        else
            return next()
    }

    const decodedToken = jwt.verify(testToken, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.clearCookie('token') // Clear existing cookies
        }
        return decoded
    })

    const user = await User.findById(decodedToken.id)

    if (!user) {
        res.clearCookie("token")
        throw new CustomError("Invalid Token, Please try login again", 401)
    }

    req.user = user

    if (req.originalUrl.includes('/login')) {
        return res.redirect(`/dashboard/${user._id}`);
    }
    // res.redirect(`/dashboard/${user._id}`);
    next()
})

export default checkAuth