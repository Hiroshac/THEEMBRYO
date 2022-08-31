import mongoose from "mongoose";

const universityschema = new mongoose.Schema({
    image : {
        type : String,
    },
    name : {
        type : String,
    }
});
export default mongoose.model('university',universityschema)