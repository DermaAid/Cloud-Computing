const express = require('express');
const { addHistory, getHistory } = require('../controllers/historyController');
const { authMiddleware } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, addHistory);
router.get('/:userId', authMiddleware, getHistory);

module.exports = router;
