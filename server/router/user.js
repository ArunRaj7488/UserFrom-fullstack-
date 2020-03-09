const { Router } = require('express');

const router = Router();

const { addUser } = require('../controller/user');


router.post('/user', addUser);

module.exports = router;