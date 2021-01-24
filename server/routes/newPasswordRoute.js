const express = require('express');
const newPasswordController = require('../controllers/newPasswordController');

const router = express.Router();
router.get('', newPasswordController.newPassword);

module.exports = router;