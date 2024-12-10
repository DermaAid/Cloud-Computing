const express = require('express');
const { getAllNews, getNewsById } = require('../controllers/newsController');
const router = express.Router();

// Route untuk mendapatkan semua berita
router.get('/', getAllNews);

// Route untuk mendapatkan berita berdasarkan ID
router.get('/:newsId', getNewsById);

module.exports = router;
