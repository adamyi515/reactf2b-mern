import data from '../test.data.js';


// @desc    Get all Users
// @route   /api/v1/users
// @access  
const getUsers = (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            users: data
        }
    })
}


// @desc    Login a user
// @route   /api/v1/users/login
// @access  PUBLIC
const loginUser = (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            user: 'test'
        }
    })
}


// @desc    Register a user
// @route   /api/v1/users/register
// @access  PUBLIC
const registerUser = (req, res) => {
    const { name, email, password } = req.body;

    // Validate the user passed in these 3 parameters.
    console.log(name, email, password);
    if(!name || !email || !password){
        res.status(400);
        throw new Error('All parameters were not provided to register a user.');
    }

    res.status(200).json({
        status: 'success',
        data: {
            user: req.body
        }
    })
}

export {
    getUsers,
    loginUser,
    registerUser
};