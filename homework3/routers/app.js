const express = require('express');
let router = express.Router();

const userEndpoint = require('./user')

//redirects to user.js

router.use('/user', userEndPoint)

module.exports = router;