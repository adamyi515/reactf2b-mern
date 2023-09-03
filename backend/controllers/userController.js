import bcryptjs from 'bcryptjs';
import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';

// Models //////////////////////////////
import User from '../models/userModel.js';

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Routes 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// @desc    Login a user
// @route   /api/v1/users/login
// @access  PUBLIC
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const foundUser = await User.findOne({ email });
    
    // If found then move to the next logic.
    if(foundUser && await bcryptjs.compare(password, foundUser.password)){
        // If the user is found, now compare the password is correct.
        res.status(200).json({
            status: 'success',
            user: {
                _id: foundUser._id,
                name: foundUser.name,
                email: foundUser.email
            },
            token: generateToken(foundUser._id)
        })
    } else {
        res.status(401);
        throw new Error('Invalid credentails')
    }
   
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
            user: newUser,
            token: generateToken(newUser._id)
        })
    } else {
        res.status(400);
        throw new Error('Invalid user data')
    }

});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Functions 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const generateToken = id => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}


export {
    loginUser,
    registerUser
};