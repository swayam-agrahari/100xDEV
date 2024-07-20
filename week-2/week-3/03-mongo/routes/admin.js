const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const {Admin, Course} = require("../db");
const router = Router();


// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const {username,password}=req.body;
    Admin.create({
        username: username,
        password: password
    })
        .then(()=>{
            res.status(200).json({
                msg: 'Admin created successfully'
            })
        })
        .catch(()=>{
            res.status(400).json({
                msg: 'Error creating Admin'
            })
        })
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    const {title,description,imageLink,price} = req.body;
    Course.create({
        title,description,imageLink,price,
    })
        .then((obj)=>{
            res.status(200).json({
                message: 'Course created successfully',
                courseId:obj._id,
            })
        })


});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});
    res.status(200).json({
        message:response
    })
});

module.exports = router;