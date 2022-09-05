import mongoose from 'mongoose';

const ongoingschema = new mongoose.Schema({
    image : {
        type : String,
    },
    name : {
        type : String,
    }
});

export default mongoose.model('ongoing', ongoingschema);