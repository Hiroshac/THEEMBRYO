import express from 'express';
import { Createindustry, DeleteIndustry, GetAllIndustry, GetIndustry, GetLastData, UpdateIndustry, Upload } from '../controllers/industry.controller.js';

const router = express.Router();

//create innovation
router.post('/add',Upload.single('file'),Createindustry);
//update
router.put('/update/:id', UpdateIndustry);
//delete
router.delete('/delete/:id', DeleteIndustry);
//get id innovation
router.get('/get/:id', GetIndustry);
//get all innovation
router.get('/get', GetAllIndustry);
//get last data
router.get('/getlast', GetLastData);

export default router;