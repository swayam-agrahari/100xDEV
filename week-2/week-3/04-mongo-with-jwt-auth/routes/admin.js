const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const {Admin} = require("../db");
const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../index");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const {username,password } = req.body;

    const admin = await Admin.create({
        username: username,
        password: password
    })
    if (admin){
        res.status(200).json({
            message: 'Admin created successfully'
        })
    }
    else{
        res.status(400).json({
            msg: 'Error creating Admin'
        })
    }
});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
    const {username,password} = req.body;
    const token = jwt.sign({username:username},JWT_SECRET)
    if(token)
    {
        res.status(200).json({
            token:token
        })
    }
    else{
        res.status(400).json({
            msg:"Error signing in"
        })
    }
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;