const express = require("express");
const router = express.Router();

// route path: /api/v1/bootcamps
router.get("/", (req, res) => {
    res.status(200).json({ success: true, msg: "show all bootcamps" });
});

router.get("/:id", (req, res) => {
    res.status(200).json({
        success: true,
        msg: `show bootcamp with id: ${req.params.id}`
    });
});

router.post("/", (req, res) => {
    res.status(200).json({
        success: true,
        msg: `create new bootcamp: `
    });
});

router.put("/:id", (req, res) => {
    res.status(200).json({
        success: true,
        msg: `edit bootcamp: ${req.params.id}`
    });
});

router.delete("/:id", (req, res) => {
    res.status(200).json({
        success: true,
        msg: `delete bootcamp: ${req.params.id}`
    });
});

module.exports = router;
