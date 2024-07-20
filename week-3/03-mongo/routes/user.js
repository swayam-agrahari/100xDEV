const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User, Course} = require("../db");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const {username,password} = req.body;
    User.create({username,password})
        .then(()=>{
            res.status(200).json({
                message: "User created successfully",
            })
        })
        .catch((err)=>{
            console.log(err);
            res.status(400).json({
                message: "Error creating User"
            })
        })
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    Course.find({})
        .then((obj)=>{
            res.status(200).json({
                message:obj
            })
        })
        .catch((err)=>{
            console.log(err);
            res.status(400).json({
                message: "Error getting courses."
            })
        })
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;
    User.updateOne({
        username: username
    },{
        '$push': {
            purchasedCourses:courseId
        }
    }).then(()=>{
        res.status(200).json({
            message: "Course purchased successfully",
        })
    }).catch((e)=>{
        console.log(e);
        res.status(400).json({
            message: "Error purchasing Course"
        })
    })


});

router.get('/purchasedCourses', userMiddleware,async (req, res) => {
    // Implement fetching purchased courses logic
   const user = await User.findOne({
        username: req.headers.username
    })

    if(user.purchasedCourses != null){
        const courses = await Course.find({_id:user.purchasedCourses})
        res.status(200).json({
            courses:courses,
        })
    }
    else
    {
        res.status(400).json({
            message: "Error getting courses."
        })
    }

});

module.exports = router