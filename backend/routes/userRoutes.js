import express from 'express';
const router = express.Router();

// Controller ///////////////////////////////
import { getUsers, loginUser, registerUser } from '../controllers/userController.js';


router.route('/')
    .get(getUsers);


router.route('/login')
    .post(loginUser)

router.route('/register')
    .post(registerUser);



export default router;