const database = require('../db/models');

const MenuService = {
  async setUpMenu(id) {
    const createdMenu = await database.Meal.update({ isMenu: true }, { where: { id } });
    if (createdMenu[0] === 0) {
      // create and throw 500 error
      const err = { error: 'an error occured' };
      throw err;
    }
    const response = {
      message: 'menu option added successfully',
      menu: createdMenu,
    };
    return response;
  },

  async deleteMenuOption(id) {
    const menu = await database.Meal.update({ isMenu: false }, { where: { id } });
    if (menu[0] === 0) {
      // create and throw 500 error
      const err = { error: 'and error occured' };
      throw err;
    }
    const response = {
      message: 'Menu option deleted successfully',
    };
    return response;
  },

  async fetchMenu() {
    const todayMenu = await database.Meal.findAll({ where: { isMenu: true } });
    const response = {
      todayMenu,
    };
    return response;
  },

  async inMenu(id) {
    database.Meal.count({ where: { isMenu: true, id } })
      .then(count => count);
  },
};

export default MenuService;
