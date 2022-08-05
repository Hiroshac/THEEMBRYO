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
    idcadmin:{
        type:Boolean,
        default:false
    },
}, {timestamps : true});

export default mongoose.model("User", userSchema);