const { Router } = require('express');

const router = Router();

const { addUser, getUser } = require('../controller/user');

router.get('/user', getUser);

router.post('/user', addUser);

module.exports = router;