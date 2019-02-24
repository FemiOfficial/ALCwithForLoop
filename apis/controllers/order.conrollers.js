import OrderServices from '../services/OrderServices';
import dummyData from '../utils/dummyData';
import today from '../utils/date';

const OrderControllers = {

  fetchAllOrders(req, res) {
    const allOrders = OrderServices.allOrders();
    return res.status(200).json({
      status: 'success',
      data: allOrders,
    });
  },

  addOrder(req, res) {
    // Request body contains the meal_id and quantity to be added to the menu option
    const order = req.body;
    const errors = [];
    order.day = today;

    // Checking if a meal has already being ordered; if it has we just update the quantity intead
    const checkIfOrdered = dummyData.order
      .find(orderExisting => orderExisting.meal_id === order.meal_id);
    if (
      checkIfOrdered
    ) {
      const orderId = checkIfOrdered.id;
      dummyData.order[orderId - 1].quantity = parseInt(checkIfOrdered.quantity, 10) + 1;
      return dummyData.order;
    }

    // Finding the meal option ordered by its id from the menu
    const mealOrdered = dummyData.menu
      .find(meal => meal.id === order.menu_id);

    if (
      mealOrdered
    ) {
      order.meal_name = mealOrdered.name;
    } else {
      errors.push({ msg: 'ordered for a meal option that does not exist in the menu' });
    }

    if (
      order.address == null
    ) {
      errors.push({ msg: 'order address cannot be empty' });
    }

    if (
      order.quantity == null
    ) {
      errors.push({ msg: 'order quantity cannot be empty' });
    }

    if (
      order.user == null
    ) {
      errors.push({ msg: 'order owner cannot be empty' });
    }

    if (
      errors.length > 0
    ) {
      return res.status(400).json({
        status: 'failed',
        errors,
      });
    }
    const newOrder = req.body;
    const data = OrderServices.addOrder(newOrder);
    return res.status(200).json({
      status: 'success',
      data,
    });
  },

  editOrder(req, res) {
    const data = req.body;

    const id = req.params.id;

    const orderToEdit = dummyData.order.find(order => order.id === id);

    const errors = [];
    const meal = dummyData.menu.find(mea => mea.id === data.menu_id);

    if (
      !meal
    ) {
      errors.push({ msg: 'selected order does not exist in the menu options available for today' });
    }

    if (
      !orderToEdit
    ) {
      errors.push({ msg: 'order does not exist' });
    }

    if (
      data.user
    ) {
      errors.push({ msg: 'cannot edit who made this order' });
    }

    if (
      errors.length > 0
    ) {
      return res.status(400).json({
        status: 'failed',
        errors,
      });
    }
    const editInfo = req.body;
    const editId = req.params.id;
    const orderEdit = OrderServices.editOrder(editId, editInfo);
    return res.status(200).json({
      status: 'success',
      data: orderEdit,
    });
  },
};

export default OrderControllers;
