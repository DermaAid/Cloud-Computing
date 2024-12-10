const express = require('express');
const { getChatResponse } = require('../controllers/chatbotController');
const router = express.Router();

// Route untuk chatbot
router.post('/', getChatResponse);

module.exports = router;
