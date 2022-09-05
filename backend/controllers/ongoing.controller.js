import Ongoing from '../models/ongoing.model.js'
import multer from 'multer';
import { createError } from "../utill/error.js";

//multer and file location
export const Upload = multer({storage : multer.diskStorage({
    destination : (req, file, callback) => {
        callback(null, 'ongoing')
    },
    filename : (req, file, callback) => {
        callback(null, file.originalname)
    },
})});

//Create Ongoing
export const CreateOngoing = async (req, res, next) => {
    try {
        const newOngoing = new Ongoing({ 
            name : req.body.name,
            image: req.file.originalname,
         });
        await newOngoing.save()
        res.status(200).json("Ongoing has been created.....");
    } catch (err) {
        next(err);
    }
};

//Update Ongoing
export const UpdateOngoing = async(req, res, next) => {
    try {
            const updateOngoing= await Ongoing.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
             res.status(200).json(updateOngoing);
    } catch (err) {
        next(err);
    }
};

//Delete Ongoing
export const DeleteOngoing = async (req, res, next) => {
    try {
        await Ongoing.findByIdAndDelete(req.params.id);

        res.status(200).json("Ongoing has been deleted");
    } catch (err) {
        next(err);
    }
};

//Get Ongoing
export const GetOngoing= async (req, res, next) => {
    try {
        const getOngoing = await Ongoing.findById(req.params.id);

        res.status(200).json(getOngoing);
    } catch (err) {
        next(err);
    }
};

//Get all Ongoing
export const GetAllOngoing = async (req, res, next) => {
    try {
        const getallOngoing= await Ongoing.find();

        res.status(200).json(getallOngoing);
    } catch (err) {
        next(err);
    }
};

//Get Last Three Data
export const GetLastData = async (req, res, next) => {
    try {
        const getlastdata = await Ongoing.find().sort({_id:-1}).limit(3);
        res.status(200).json(getlastdata);
    }catch(err) {
        console.log(err);
    }
};
