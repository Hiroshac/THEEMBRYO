import mongoose from 'mongoose';

const ongoingschema = new mongoose.Schema({
    image : {
        type : String,
    },
    Name : {
        type : String,
    }
});

export default mongoose.model('ongoing', ongoingschema);