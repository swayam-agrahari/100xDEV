const {User} = require("../db");

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const {username,password} = req.headers;
    User.findOne({username,password})
        .then(()=>{
            next();
        })
        .catch((err)=>{
            console.log(err);
            res.status(400).json({
                msg: 'Error getting user'
            })
        })
}

module.exports = userMiddleware;