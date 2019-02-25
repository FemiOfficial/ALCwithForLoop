import dummyData from '../utils/dummyData';
import today from '../utils/date';

const Order = require('../models/Order');

const OrderService = {

  addOrder(data) {
    const order = data;
    order.day = today;
    const menu = dummyData.menu.find(men => men.id === data.menu_id);
    order.price = parseInt(menu.price, 10) * parseInt(order.quantity, 10);

    if (
      dummyData.order.length === 0
    ) {
      order.id = '1';
      dummyData.order.push(order);
      return dummyData.order;
    }
    const orderLength = dummyData.order.length;
    const lastId = dummyData.order[orderLength - 1].id;
    const newId = parseInt(lastId, 10) + 1;
    order.id = `${newId}`;

    dummyData.order.push(order);
    return dummyData.order;
  },
  editOrder(id, data) {
    const orderToEdit = dummyData.order.find(order => order.id === id);

    if (
      data.menu_id
    ) {
      const menu = dummyData.menu.find(mea => mea.id === data.menu_id);

      orderToEdit.menu_name = menu.menu_name;
      if (
        data.quantity
      ) {
        orderToEdit.price = parseInt(data.quantity, 10) * parseInt(menu.price, 10);
        orderToEdit.quantity = data.quantity;
      }
      orderToEdit.menu_id = data.menu_id;
    }

    if (
      data.address
    ) {
      orderToEdit.address = data.address;
    }
    return orderToEdit;
  },

  allOrders() {
    const allOrders = dummyData.order.map((data) => {
      const order = new Order();
      order.id = data.id;
      order.menu_id = data.menu_id;
      order.meal_name = data.meal_name;
      order.quantity = data.quantity;
      order.address = data.address;
      order.price = data.price;
      order.user = data.user;
      order.day = data.day;
      return order;
    });
    return allOrders;
  },
};

export default OrderService;
