// @desc	Get all bootcamps
// @route	GET /api/v1/bootcamps
// @access	Public
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({ success: true, msg: "show all bootcamps" });
};

// @desc	Get single bootcamps
// @route	GET /api/v1/bootcamps/:id
// @access	Public
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: `show bootcamp with id: ${req.params.id}`
    });
};

// @desc	Create a new bootcamp
// @route	POST /api/v1/bootcamps/
// @access	Public
exports.createBootcamp = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: `create new bootcamp: `
    });
};

// @desc	Edit a bootcamp
// @route	PUT /api/v1/bootcamps/:id
// @access	Public
exports.editBootcamp = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: `edit bootcamp: ${req.params.id}`
    });
};

// @desc	Delete a bootcamp
// @route	DELETE /api/v1/bootcamps/:id
// @access	Public
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: `delete bootcamp: ${req.params.id}`
    });
};
