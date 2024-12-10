const express = require('express');
const { getUserData, updateUserData } = require('../controllers/userController');
const { authMiddleware } = require('../middleware/authMiddleware');

const router = express.Router();

// Route untuk mendapatkan data pengguna berdasarkan ID
router.get('/:userId', authMiddleware, getUserData);

// Route untuk memperbarui data pengguna
router.patch('/:userId', authMiddleware, updateUserData);

module.exports = router;
