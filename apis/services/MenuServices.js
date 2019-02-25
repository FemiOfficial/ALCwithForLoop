import dummyData from '../utils/dummyData';
import today from '../utils/date';

const Menu = require('../models/Menu');

const MenuService = {
  setUpMenu(data) {
    const mealOption = data;
    mealOption.day = today;
    const meal = dummyData.meals.find(mea => mea.id === data.meal_id);
    mealOption.price = meal.price;

    if (
      dummyData.menu.length === 0
    ) {
      mealOption.id = '1';
      dummyData.menu.push(mealOption);
      return dummyData.menu;
    }
    const menuLength = dummyData.menu.length;
    const lastId = dummyData.menu[menuLength - 1].id;
    const newId = parseInt(lastId, 10) + 1;

    mealOption.id = `${newId}`;

    dummyData.menu.push(mealOption);
    return dummyData.menu;
  },

  editMenuOption(id, data) {
    const { menu } = dummyData;
    if (
      data.meal_id
    ) {
      menu[id - 1].meal_id = data.meal_id;
      const meal = dummyData.meals.find(mea => mea.id === data.meal_id);
      menu[id - 1].price = meal.price;
    }

    if (
      data.quantity
    ) {
      menu[id - 1].quantity = data.quantity;
    }
    return menu[id - 1];
  },

  fetchMenu() {
    const todayMenu = dummyData.menu.map((data) => {
      const meal = new Menu();
      meal.id = data.id;
      meal.meal_id = data.meal_id;
      meal.meal_name = data.meal_name;
      meal.quantity = data.quantity;
      meal.day = data.day;
      meal.price = data.price;

      return meal;
    });
    return todayMenu;
  },
};

export default MenuService;
