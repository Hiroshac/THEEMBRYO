import Industry from '../models/industry.model.js'
import multer from 'multer';
import { createError } from "../utill/error.js";

//multer and file location
export const Upload = multer({storage : multer.diskStorage({
    destination : (req, file, callback) => {
        callback(null, 'industry')
    },
    filename : (req, file, callback) => {
        callback(null, file.originalname)
    },
})});

//Create Industry
export const Createindustry = async (req, res, next) => {
    try {
        const newIndustry = new Industry({ 
            name : req.body.name,
            image: req.file.originalname,
         });
        await newIndustry.save()
        res.status(200).json("Industry has been created.....");
    } catch (err) {
        next(err);
    }
};

//Update Industry
export const UpdateIndustry = async(req, res, next) => {
    try {
            const updateIndustry = await Industry.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
             res.status(200).json(updateIndustry);
    } catch (err) {
        next(err);
    }
};

//Delete Industry
export const DeleteIndustry = async (req, res, next) => {
    try {
        await Industry.findByIdAndDelete(req.params.id);

        res.status(200).json("Industry has been deleted");
    } catch (err) {
        next(err);
    }
};

//Get Industry
export const GetIndustry= async (req, res, next) => {
    try {
        const getIndustry = await Industry.findById(req.params.id);

        res.status(200).json(getIndustry);
    } catch (err) {
        next(err);
    }
};

//Get all Industry
export const GetAllIndustry = async (req, res, next) => {
    try {
        const getallIndustry = await Industry.find();

        res.status(200).json(getallIndustry);
    } catch (err) {
        next(err);
    }
};

//Get Last Three Data
export const GetLastData = async (req, res, next) => {
    try {
        const getlastdata = await Industry.find().sort({_id:-1}).limit(3);
        res.status(200).json(getlastdata);
    }catch(err) {
        console.log(err);
    }
};
