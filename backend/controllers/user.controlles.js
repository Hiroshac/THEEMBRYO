import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";
import { createError } from "../utill/error.js";


//registation
export const Registation = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({ ...req.body, password: hash, });
        
        await newUser.save();
        res.status(200).json("user has been created.....");
    } catch (err) {
        next(err);
    }
};

//login
export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ name: req.body.name });
    if (!user) return next(createError(404, "User not found!"));

    const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
    if (!isPasswordCorrect)
      return next(createError(400, "Wrong password or username!"));

    const token = jwt.sign( { id: user._id, isAdmin: user.isAdmin },process.env.JWT);

    const { password, isAdmin, ...otherDetails } = user._doc;
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ details: { ...otherDetails }, isAdmin });
  } catch (err) {
    next(err);
  }
};

//Update user
export const UpdateUser = async(req, res, next) => {
    try {
        if (req.user.isAdmin) { 
            const updateuser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
             res.status(200).json(updateuser);
        } else {
      return next(createError(403, "You are not authorized!"));
    }
        

       
    } catch (err) {
        next(err);
    }
};

//Delete User
export const DeleteUser = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(req.params.id);

        res.status(200).json("user has been deleted");
    } catch (err) {
        next(err);
    }
};

//Get User
export const GetUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);

        res.status(200).json(user);
    } catch (err) {
        next(err);
    }
};

//Get User
export const GetAllUser = async (req, res, next) => {
    try {
        const user = await User.find();

        res.status(200).json(user);
    } catch (err) {
        next(err);
    }
};