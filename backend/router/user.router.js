import express from 'express';
import { DeleteUser, GetAllUser, GetUser, login, Registation, UpdateUser } from '../controllers/user.controlles.js';
import { verifyAdmin, verifyUser } from "../utill/verifyToken.js";

const router = express.Router();

//register
router.post('/reg', Registation);
//login
router.post('/login', login);
//update
router.put('/update/:id', verifyAdmin, UpdateUser); 
//delete
router.delete('/delete/:id',verifyAdmin, DeleteUser);
//getbyid
router.get('/get/:id', verifyUser, GetUser);
//getall
router.get('/get',verifyUser, GetAllUser);

export default router;