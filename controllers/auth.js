const ErrorResponse = require('../utils/errorResponse')
const User = require('../models/User');
const asyncHandler = require('../middleware/async');

// @desc    GET all users
// @route   GET /api/v1/auth/register
// @access  Public
exports.register =asyncHandler(async(req,res,next) =>{
    const {name,email,password,role} = req.body;

    // Create user
    const user = await User.create({
        name,
        email,
        password,
        role
    });
    res.status(200).json({success:true,data:user});
}) 

