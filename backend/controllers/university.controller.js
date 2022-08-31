import university from '../models/university.model.js';
import multer from 'multer';

//multer and file location
export const Upload = multer({storage : multer.diskStorage({
    destination : (req, file, callback) => {
        callback(null, 'university')
    },
    filename : (req, file, callback) => {
        callback(null, file.originalname)
    },
})});

//add university 
export const Createuniversity = async(req,res,next) => {
    try{
        const adduniversity = new university({
            name : req.body.name,
            image : req.file.originalname
        });
        await adduniversity.save()
        res.status(200).json("university successfully added......");
    }catch(err){next(err);}
};

//Update university
export const UpdateUniversity = async(req, res, next) => {
    try {
            const UpdateUniversity = await university.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
             res.status(200).json(UpdateUniversity);
    } catch (err) {
        next(err);
    }
};

//Delete university
export const DeleteUniversity= async (req, res, next) => {
    try {
        await university.findByIdAndDelete(req.params.id);

        res.status(200).json("University has been deleted");
    } catch (err) {
        next(err);
    }
};

//Get University
export const GetUniversity= async (req, res, next) => {
    try {
        const getuniversity = await university.findById(req.params.id);

        res.status(200).json(getuniversity);
    } catch (err) {
        next(err);
    }
};

//get university
export const GetAllUniversity = async(req,res,next) => {
    try{
        const universityget = await university.find();

        res.status(200).json(universityget)
    }catch(err){
        next(err);
    }
};