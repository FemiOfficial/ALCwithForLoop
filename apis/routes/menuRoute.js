import MenuController from '../controllers/menu.controllers';

const express = require('express');

const router = express.Router();

router.get('/', MenuController.fetchMenu);

router.post('/', MenuController.setUpMenuOption);

router.put('/:id', MenuController.editMenuOption);

module.exports = router;
