import OrderController from '../controllers/order.conrollers';

const express = require('express');

const router = express.Router();

router.get('/', OrderController.fetchAllOrders);

router.post('/', OrderController.addOrder);

router.put('/:id', OrderController.editOrder);

module.exports = router;
