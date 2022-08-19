import express from 'express';
// import { verifyAdmin, verifyUser } from "../utill/verifyToken.js";

const router = express.Router();

//register
router.post('/reg', Registation);
//login
router.post('/login', login);
//update
router.put('/update/:id', UpdateUser); 
//delete
router.delete('/delete/:id', DeleteUser);
//getbyid
router.get('/get/:id', GetUser);
//getall
router.get('/get', GetAllUser);

export default router;