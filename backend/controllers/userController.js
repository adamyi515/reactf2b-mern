import data from '../test.data.js';

const getUsers = (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            users: data
        }
    })
}


export {
    getUsers
};