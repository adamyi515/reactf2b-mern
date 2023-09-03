import express from 'express';
const router = express.Router();
import { protect } from '../middleware/authMiddleware.js';

// Controller ///////////////////////////////
import { loginUser, registerUser } from '../controllers/userController.js';


router.post('/login', loginUser)
router.post('/', registerUser);



export default router;