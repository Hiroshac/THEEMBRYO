import express from 'express';
import { CreateOngoing, DeleteOngoing, GetAllOngoing, GetLastData, GetOngoing, UpdateOngoing, Upload } from '../controllers/ongoing.controller.js';


const router = express.Router();

//create innovation
router.post('/add',Upload.single('file'),CreateOngoing);
//update
router.put('/update/:id', UpdateOngoing);
//delete
router.delete('/delete/:id', DeleteOngoing);
//get id innovation
router.get('/get/:id', GetOngoing);
//get all innovation
router.get('/get', GetAllOngoing);
//get last data
router.get('/getlast', GetLastData);

export default router;