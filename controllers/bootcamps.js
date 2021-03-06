const Bootcamp = require("../models/Bootcamp");

// @desc	Get all bootcamps
// @route	GET /api/v1/bootcamps
// @access	Public
exports.getBootcamps = async (req, res, next) => {
    try {
        const bootcamps = await Bootcamp.find();
        res.status(200).json({
            success: true,
            data: bootcamps
        });
    } catch (err) {
        // bad request
        res.status(400).json({ success: false });
    }
};

// @desc	Get single bootcamps
// @route	GET /api/v1/bootcamps/:id
// @access	Public
exports.getBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findById(req.params.id);
        if (!bootcamp) {
            // obj not found
            return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: bootcamp });
    } catch (err) {
        res.status(400).json({ success: false });
    }
};

// @desc	Create a new bootcamp
// @route	POST /api/v1/bootcamps/
// @access	Public
exports.createBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.create(req.body);
        res.status(201).json({
            success: true,
            data: bootcamp
        });
    } catch (err) {
        // bad request
        res.status(400).json({ success: false });
    }
};

// @desc	Edit a bootcamp
// @route	PUT /api/v1/bootcamps/:id
// @access	Public
exports.editBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );
        if (!bootcamp) {
            return res.status(400).json({ success: false });
        }
        res.status(200).json({
            success: true,
            data: bootcamp
        });
    } catch (err) {
        // bad request
        res.status(400).json({ success: false });
    }
};

// @desc	Delete a bootcamp
// @route	DELETE /api/v1/bootcamps/:id
// @access	Public
exports.deleteBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
        if (!bootcamp) {
            return res.status(400).json({ success: false });
        }
        res.status(200).json({
            success: true,
            msg: `delete bootcamp: ${req.params.id}`
        });
    } catch (err) {
        // bad request
        res.status(400).json({ success: false });
    }
};
