import express from 'express';
import { Createuniversity, DeleteUniversity, GetAllUniversity, GetUniversity, UpdateUniversity, Upload } from '../controllers/university.controller.js';

const router = express.Router();

//add university
router.post('/add',Upload.single('file'),Createuniversity);
//update university
router.put('/update/:id', UpdateUniversity);
//delete university
router.delete('/delete/:id',DeleteUniversity);
//get by id
router.get('/get/:id',GetUniversity);
//get all university
router.get('/get',GetAllUniversity);

export default router;