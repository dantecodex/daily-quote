import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt"

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        reuqired: [true, "Name is a required field"],
        minlength: [3, "Min length for name is 3"],
        maxlength: 20
    },
    email: {
        type: String,
        unique: [true, "User with entered Email already exist"],
        reuqired: [true, "Email is a required field"],
        validate: {
            validator: function (email) {
                return validator.isEmail(email)
            },
            message: "Please provide valid email"
        }
    },
    password: {
        type: String,
        required: [true, "Password is a required field"],
        minlength: [6, "Password length should not be less than 6"],
        select: false
    },
    confirmPassword: {
        type: String,
        required: [true, "Confirm password is a required field"],
        validate: {
            validator: function (confPassword) {
                return confPassword === this.password
            },
            message: "Password and Confirm Password do not match"
        }
    },
    active: {
        type: Boolean,
        default: true,
        select: false
    },
    quote: {
        type: Boolean,
        default: true,
    },
    time: {
        type: String,
        default: "06:00: AM"
    }
}, { timestamps: true })

userSchema.pre('save', async function (next) {
    if (!this.isModified("password")) {
        return next()
    }
    this.password = await bcrypt.hash(this.password, 12)
    this.confirmPassword = undefined
})

userSchema.methods.comparePassword = async (enteredPassword, userPassword) => {
    return await bcrypt.compare(enteredPassword, userPassword)
}

const User = mongoose.model("User", userSchema)

export default User

