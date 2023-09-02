import bcryptjs from 'bcryptjs';
import asyncHandler from 'express-async-handler';

// Models //////////////////////////////
import User from '../models/userModel.js';

///////////////////////////////////////////////////////////////////////////////////////////////
// @desc    Login a user
// @route   /api/v1/users/login
// @access  PUBLIC
const loginUser = asyncHandler(async (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            user: 'test'
        }
    })
})


// @desc    Register a user
// @route   /api/v1/users/register
// @access  PUBLIC
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    // Validate the user passed in these 3 parameters.
    if(!name || !email || !password){
        res.status(400);
        throw new Error('All parameters were not provided to register a user.');
    }


    // Check to see if there's an existing user already in the User table.
    const userExist = await User.findOne({ email });
    if(userExist){
        res.status(400);
        throw new Error('User already exist.');
    }

    // If user DOES NOT EXIST, then create new user.
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = await User.create({
        name,
        email,
        password: hashedPassword
    });

    if(newUser){
        res.status(201).json({
            status: 'success',
            user: newUser
        })
    } else {
        res.status(400);
        throw new Error('Invalid user data')
    }

})

export {
    loginUser,
    registerUser
};