import mongoose from 'mongoose';

const industryschema = new mongoose.Schema({
    image : {
        type : String,
    },
    name : {
        type : String,
    }
});

export default mongoose.model('industry', industryschema);