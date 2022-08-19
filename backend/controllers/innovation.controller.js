import Innovation from '../models/innovation.models.js';
import multer from 'multer';
import { createError } from "../utill/error.js";

//multer and file location
export const Upload = multer({storage : multer.diskStorage({
    destination : (req, file, callback) => {
        callback(null, 'upload')
    },
    filename : (req, file, callback) => {
        callback(null, file.originalname)
    },
})});

//Create Inovation
export const CreateInovation = async (req, res, next) => {
    try {
        const newInnovation = new Innovation({ 
            name : req.body.name,
            desc: req.body.desc,
            image: req.file.originalname,
         });
        await newInnovation.save();
        res.status(200).json("Innovation has been created.....");
    } catch (err) {
        next(err);
    }
};

//Update Innovation
export const UpdateInnovation = async(req, res, next) => {
    try {
            const updateInnovatiom = await Innovation.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
             res.status(200).json(updateInnovatiom);
    } catch (err) {
        next(err);
    }
};

//Delete Innovation
export const DeleteInnovation = async (req, res, next) => {
    try {
        await Innovation.findByIdAndDelete(req.params.id);

        res.status(200).json("Innovation has been deleted");
    } catch (err) {
        next(err);
    }
};

//Get Innovation
export const GetInnovatiom= async (req, res, next) => {
    try {
        const getInnovation = await Innovation.findById(req.params.id);

        res.status(200).json(getInnovation);
    } catch (err) {
        next(err);
    }
};

//Get all Innovation
export const GetAllInnovation = async (req, res, next) => {
    try {
        const getallInnovation = await Innovation.find();

        res.status(200).json(getallInnovation);
    } catch (err) {
        next(err);
    }
};