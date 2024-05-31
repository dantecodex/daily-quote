import User from "../models/user_model.js";
import asyncErrorHandler from "../utils/asyncErrorHandler.js";
import CustomError from "../utils/customError.js";
import jwt from "jsonwebtoken";

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.LOGIN_EXPIRES
    })
}

const sendTokenCookie = (token, res) => {
    res.clearCookie('token') // Clear existing cookies

    const options = {
        maxAge: process.env.LOGIN_EXPIRES,
        httpOnly: true
    }
    if (process.env.ENVI === 'prod') {
        options.secure = true;
    }
    res.cookie('token', token, options)
}

const createUser = asyncErrorHandler(async (req, res) => {
    const user = await User.create(req.body);

    const token = generateToken(user._id)

    sendTokenCookie(token, res)
    res.status(201).redirect(`/dashboard/${user._id}`)

})

const loginUser = asyncErrorHandler(async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        throw CustomError("Please provide both email and password", 401)
    }

    const user = await User.findOne({ email }).select("+password")

    if (!user || !(await user.comparePassword(password, user.password))) {
        throw new CustomError("Please provide correct user credential for login", 401)
    }
    user.password = undefined
    const token = generateToken(user._id)

    sendTokenCookie(token, res)
    res.status(200).redirect(`/dashboard/${user._id}`)

})

const settings = asyncErrorHandler(async (req, res) => {
    const settingData = Object.assign({}, req.body)
    const updatedUser = await User.findByIdAndUpdate(req.user._id, settingData, { new: true })
    res.status(200).json({
        updated: true
    })
})


export { createUser, loginUser, settings }