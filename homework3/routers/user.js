const express = require('express');
const aws = require('aws-sdk');
const router = express.Router();
const userController = require('../../controllers/User');

router.post("/", userController.add);
router.get('/', userController.fetchAllUser);
router.put("/", userController.put);
router.delete("/", userController.delete);

module.exports = router;