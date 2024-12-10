const express = require('express');
const { uploadImage } = require('../controllers/scanController');
const { authMiddleware } = require('../middleware/authMiddleware');

const router = express.Router();

// Route untuk mengunggah gambar untuk analisis
router.post('/', authMiddleware, uploadImage);

module.exports = router;
