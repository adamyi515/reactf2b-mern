import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';
import User from '../models/userModel.js';
import asyncHandler from 'express-async-handler';


const protect = asyncHandler(async (req, res, next) => {
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            token = req.headers.authorization.split(' ')[1]; // Bearer [token] -> 2nd index = to token
            
            // Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET); // This is an object { id: [id] } look at the generateToken() in userRoutes.js

            // Assign user field to req object.
            req.user = await User.findById(decoded.id).select('-password');
            next();
        } catch (error) {
            res.status(401);
            throw new Error('Not Authorized.')
        }

    }

    if(!token){
        res.status(401);
        throw new Error('Not Authorized.')
    }

})


export { protect };