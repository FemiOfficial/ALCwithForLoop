import OrderController from '../controllers/order.conrollers';
import checkAuth from '../middlewares/checkAuth';
import orderPermissions from '../middlewares/permissionAuth/order';


const express = require('express');

const router = express.Router();

router.get('/', checkAuth.verifyToken, orderPermissions.canView,
  OrderController.fetchAllOrders);

router.post('/', checkAuth.verifyToken, orderPermissions.canCreate,
  OrderController.addOrder);

router.put('/:id', checkAuth.verifyToken, orderPermissions.canCreate,
  OrderController.editOrder);

module.exports = router;
