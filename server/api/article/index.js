const express = require('express');
const controller = require('./article.controller');

import oauth from '../../components/auth/authorize';

const router = express.Router();

router.get('/', oauth, controller.index);
router.post('/', oauth, controller.create);
router.get('/:id/comments', oauth, controller.indexComment);
router.post('/:id/comments', oauth, controller.createComment);


module.exports = router;
