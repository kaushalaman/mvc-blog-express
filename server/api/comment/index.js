const express = require('express');
const controller = require('./comment.controller');

import oauth from '../../components/auth/authorize';

const router = express.Router();

router.get('/me', oauth, controller.index);


module.exports = router;
