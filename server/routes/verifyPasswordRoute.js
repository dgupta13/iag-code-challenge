const express = require('express');
const verifyPasswordController = require('../controllers/verifyPasswordController');

const router = express.Router();

router.post('', verifyPasswordController.verifyPassword);

module.exports = router;