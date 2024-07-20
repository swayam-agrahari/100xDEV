// Middleware for handling auth
const jwt = require('jsonwebtoken')
const secret = require('../index')

function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    const words = token.split(' ');
    const jwt_token = words[1];
    try {
    jwt.verify(jwt_token,secret)
     next();
    }
    catch (err){
        console.log(err);
        res.status(403).json({
            msg: "Authorization issues"
        })
    }

}

module.exports = adminMiddleware;