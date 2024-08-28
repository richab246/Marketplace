import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: [true, 'Email is Already Registered'],
        required: [true, 'Please provide an email']
    },
    password: {
        type: String,
        required: [true, 'Password provide a password']
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    verifyToken : String,
    verifyTokenExpiry: Date,
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date
})

const User = mongoose.models.users || mongoose.model('users', userSchema);

export default User;