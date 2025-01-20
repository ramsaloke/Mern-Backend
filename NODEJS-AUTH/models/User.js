import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({

    username : {
        type: String,
        required: true,
        unique: true,
        trime: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trime: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type : String,
        enum : ['user', 'admin'], // only alow user or admin roles
        default: 'user'
    }
},{timestamps:true})

export default mongoose.model('User', UserSchema);