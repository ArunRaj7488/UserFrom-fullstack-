const { Router } = require('express');

const router = Router();

const { addUser, getUser, login } = require('../controller/user');

router.get('/user', getUser);

router.post('/user', addUser);

router.post('/login', login);
module.exports = router;