import MenuServices from '../services/MenuServices';
import database from '../db/models';

const MenuController = {
  async setUpMenuOption(req, res) {
    // Form data id is the meal to add to menu options
    try {
      const { id } = req.body;
      const menu = await MenuServices.setUpMenu(id);
      return res.status(200).json({
        status: 'success',
        data: menu,
      });
    } catch (error) {
      return res.status(404).json(error);
    }
  },

  async deleteMenuOption(req, res) {
    try {
      const { id } = req.params;
      let response = {};
      database.Meal.count({ where: { isMenu: true, id } })
        .then((count) => {
          if (count > 0) {
            const menutoEdit = MenuServices.deleteMenuOption(id);
            response = res.status(200).json({
              status: 'menu option deleted successfully',
              data: menutoEdit,
            });
          } else {
            response = res.status(404).json({
              error: 'menu option is not available',
            });
          }
        });
      return response;
    } catch (error) {
      return res.status(404).json({
        status: 'failed',
        error,
      });
    }
  },

  async fetchMenu(req, res) {
    try {
      const allMenu = await MenuServices.fetchMenu();
      return res.status(200).json({
        status: 'success',
        allMenu,
      });
    } catch (error) {
      return res.status(404).json({
        status: 'failed',
        error,
      });
    }
  },
};

export default MenuController;
