const express = require('express');
const controller = require('./user.controller');

import oauth from '../../components/auth/authorize';

const router = express.Router();

router.get('/me', oauth, controller.index);
router.get('/contacts', oauth, controller.contacts);


module.exports = router;
