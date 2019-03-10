const database = require('../db/models');

const OrderService = {

  async addOrder(order) {
    const meal = await database.Meal.findOne({ where: { id: order.mealId, isMenu: true } });
    if (meal) {
      const { catererId } = meal;
      // eslint-disable-next-line no-param-reassign
      order.catererId = catererId;

      const orderedMeal = await database.Order.create(order);
      const response = {
        message: 'Meal Ordered Successfully',
        orderedMeal,
      };
      return response;
    }
    const error = {
      error: 'menu option is not available',
    };
    throw error;
  },
  async editOrder(id, userId, order) {
    try {
      const updatedOrder = await database.Order.update(order, { where: { id, userId } });
      if (updatedOrder[0] === 0) {
        const err = { error: 'an error occurred' };
        throw err;
      }
      const response = {
        message: 'Order Updated',
        order: updatedOrder,
      };
      return response;
    } catch (e) {
      const err = { error: 'an error occured' };
      return err;
    }
  },

  async allOrders(userId, isAdmin) {
    let dbQuery = { where: { userId } };
    if (isAdmin) {
      dbQuery = { where: { catererId: userId } };
    }
    try {
      const orders = await database.Order.findAll(dbQuery);
      const response = {
        orders,
      };
      return response;
    } catch (e) {
      const err = { error: 'an error occured' };
      throw err;
    }
  },
};

export default OrderService;
