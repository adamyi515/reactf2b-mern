import data from '../test.data.js';

const getUsers = (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            users: data
        }
    })
}

const loginUser = (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            user: 'test'
        }
    })
}

const registerUser = (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            user: 'test'
        }
    })
}

export {
    getUsers,
    loginUser,
    registerUser
};