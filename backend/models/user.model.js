import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
    },
    isAdmin: {
      type: Boolean,
      default: true,
    },
    cadmin:{
        type : String,
        default: 'Admin',
    },
}, {timestamps : true});

export default mongoose.model("User", userSchema);