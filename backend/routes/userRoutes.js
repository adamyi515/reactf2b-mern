import express from 'express';
const router = express.Router();

// Controller ///////////////////////////////
import { loginUser, registerUser } from '../controllers/userController.js';


router.route('/login')
    .post(loginUser)

router.route('/register')
    .post(registerUser);



export default router;