import mongoose from 'mongoose';

const innovationSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    desc: {
        type: String,
    }
    // image: {
    //     type: String,
    // }
});

export default mongoose.model("Innovation", innovationSchema);