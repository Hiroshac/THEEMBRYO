import mongoose from 'mongoose';

const industryschema = new mongoose.Schema({
    image : {
        type : String,
    },
    Name : {
        type : String,
    }
});

export default mongoose.model('industry', industryschema);