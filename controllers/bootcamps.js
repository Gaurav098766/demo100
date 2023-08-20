// @desc Get all bootcamps
// @route GET /api/v1/bootcamps
// @access PUBLIC
exports.getBootcamps = (req,res,next) => {
    res.status(200).json({success: true, msg:'Show all bootcamps'})
}

// @desc Get single bootcamps
// @route GET /api/v1/bootcamps/:id
// @access PUBLIC
exports.getBootcamp = (req,res,next) => {
    res
    .status(200)
    .json({ success: true, msg: `Show bootcamp with ${req.params.id}` });
}

// @desc Create new bootcamps
// @route POST /api/v1/bootcamps
// @access PUBLIC
exports.createBootcamp = (req,res,next) => {
    res
      .status(200)
      .json({ success: true, msg: "Create new bootcamps" });
}

// @desc Update all bootcamps
// @route PUT /api/v1/bootcamps
// @access PUBLIC
exports.updateBootcamp = (req,res,next) => {
    res
      .status(200)
      .json({ success: true, msg: `Update bootcamp with ${req.params.id}` });
}

// @desc Delete all bootcamps
// @route DELETE /api/v1/bootcamps
// @access PUBLIC
exports.deleteBootcamp = (req,res,next) => {
    res
      .status(200)
      .json({ success: true, msg: `Delete bootcamp with ${req.params.id}` });
}