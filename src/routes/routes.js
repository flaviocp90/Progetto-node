const express = require('express');
const router = express.Router();
const controller = require('../controller/custController');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: './src/image/',
    filename:(req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}_${path.extname(file.originalname)}`)
    }
})

const upload = multer({
    storage: storage
})

router.get('/displayData', controller.displayData);
router.post('/createData',upload.single('image'), controller.createData);

module.exports = router;