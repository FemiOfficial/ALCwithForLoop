import UserController from '../controllers/user.controllers';


const express = require('express');

const router = express.Router();

router.post('/signup', UserController.createUser);
router.post('/login', UserController.loginUser);


module.exports = router;
