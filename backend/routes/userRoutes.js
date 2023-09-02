import express from 'express';
const router = express.Router();

// Controller ///////////////////////////////
import { getUsers } from '../controllers/userController.js';


router.route('/')
    .get(getUsers);



export default router;