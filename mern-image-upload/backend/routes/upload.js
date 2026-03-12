const express = require("express");
const multer = require("multer");
const path = require("path");

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, "uploads/");
    },
    filename: (req, file, cb) =>{
        cb(null, Date.now() + path.extname(file.originalname))
    },
});

const upload = multer({ storage: storage});

router.post("/upload", upload.single("image"), (req, res) => {
    
    try {
        res.json({
            message: "Image Uploaded Successfully",
            imageUrl: `http://localhost:3400/uploads/${req.file.filename}`,
        });
    } catch (error) {
        res.status(500).json({error: error.message})
    }
});

module.exports = router;