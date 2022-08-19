import express from 'express';
import { CreateInovation, DeleteInnovation, GetAllInnovation, GetInnovatiom, UpdateInnovation, Upload } from '../controllers/innovation.controller.js';

const router = express.Router();

//create innovation
router.post('/add',Upload.single('file'),CreateInovation);
//update
router.put('/update/:id', UpdateInnovation);
//delete
router.delete('/delete/:id', DeleteInnovation);
//get id innovation
router.get('/get/:id', GetInnovatiom);
//get all innovation
router.get('/get', GetAllInnovation);

export default router;