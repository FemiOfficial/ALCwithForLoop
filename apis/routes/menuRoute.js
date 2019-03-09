import MenuController from '../controllers/menu.controllers';
import checkAuth from '../middlewares/checkAuth';
import menuPermissions from '../middlewares/permissionAuth/menu';


const express = require('express');

const router = express.Router();

router.get('/', checkAuth.verifyToken, menuPermissions.canView,
  MenuController.fetchMenu);

router.post('/', checkAuth.verifyToken, menuPermissions.canCreate,
  MenuController.setUpMenuOption);

router.delete('/:id', checkAuth.verifyToken, menuPermissions.canCreate,
  MenuController.deleteMenuOption);

module.exports = router;
