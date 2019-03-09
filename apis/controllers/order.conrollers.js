import OrderServices from '../services/OrderServices';
import PermissionList from '../config/permission';

const OrderControllers = {

  async fetchAllOrders(req, res) {
    try {
      const userId = req.decodedToken.id;
      const isAdmin = req.decodedToken.permissions.includes(PermissionList.WRITE_MEAL) || false;
      const allOrders = await OrderServices.allOrders(userId, isAdmin);
      return res.status(200).json({
        status: 'success',
        data: allOrders,
      });
    } catch (error) {
      return res.status(500).json({
        status: 'failed',
        error,
      });
    }
  },

  async addOrder(req, res) {
    // Request body contains the menu_id and quantity to be ordered
    const order = req.body;
    order.userId = req.decodedToken.id;

    order.isCancelled = false;
    order.isDelivered = false;
    const errors = [];
    if (!req.body.mealId) {
      errors.push({ msg: 'meal id cannot be empty here' });
    }

    if (!req.body.quantity) {
      order.quantity = 1;
    }

    if (errors.length > 0) {
      return res.status(404).json({
        status: 'failed',
        errors,
      });
    }
    try {
      const orderAdded = await OrderServices.addOrder(order);
      return res.status(200).json({
        orderAdded,
      });
    } catch (error) {
      return res.status(500).json({
        status: 'failed',
        error,
      });
    }
  },

  async editOrder(req, res) {
    const data = req.body;

    const { id } = req.params;

    const userId = req.decodedToken.id;

    const errors = [];

    if (
      data.userId
    ) {
      errors.push({ msg: 'cannot edit who made this order' });
    }

    if (
      data.refCode
    ) {
      errors.push({ msg: 'cannot edit who the refCode for this order' });
    }

    if (
      data.price
    ) {
      errors.push({ msg: 'cannot edit price of order' });
    }

    if (
      errors.length > 0
    ) {
      return res.status(400).json({
        status: 'failed',
        errors,
      });
    }

    try {
      const orderEdit = await OrderServices.editOrder(id, userId, data);
      return res.status(200).json({
        status: 'success',
        data: orderEdit,
      });
    } catch (error) {
      return res.status(500).json({
        status: 'failed',
        errors,
      });
    }
  },
};

export default OrderControllers;
