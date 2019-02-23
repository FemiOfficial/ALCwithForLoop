import MenuServices from '../services/MenuServices';
import dummyData from '../utils/dummyData';
import today from '../utils/date';

const MenuController = {
  setUpMenuOption(req, res) {
    // Request body contains the meal_id and quantity to be added to the menu option

    const mealOption = req.body;

    mealOption.day = today;
    const error = [];

    if (
      !req.body.meal_id
    ) {
      error.push({ msg: 'Meal id is a required field' });
    }

    if (
      !req.body.quantity
    ) {
      error.push({ msg: 'Quantity field is required' });
    }

    // Checking if a meal has already been added to menu for a partcular day
    const mealExistinMenu = dummyData.menu
      .find(meal => (meal.meal_id === mealOption.meal_id) && (meal.day === mealOption.day));

    if (
      mealExistinMenu
    ) {
      error.push({ msg: "Meal cannot be added twice for a particular day's meal" });
    }

    // Checking if a meal added to the menu by id actually exists
    const mealExist = dummyData.meals.find(meal => (meal.id === mealOption.meal_id));
    if (
      !mealExist
    ) {
      error.push({ msg: 'meal added does not exist in available meal options' });
    } else {
      mealOption.meal_name = mealExist.name;
    }

    if (
      error.length > 0
    ) {
      return res.status(400).json({
        status: 'failed',
        errors: error,
      });
    } 

    const newMeal = req.body;
    const menu = MenuServices.setUpMenu(newMeal);
    return res.status(200).json({
      status: 'success',
      data: menu,
    });
  },

  editMenuOption(req, res) {
    const error = [];

    const menuOption = dummyData.meals.find(meal => meal.id === req.body.meal_id);

    const menuOptionExist = dummyData.menu.find(menu => menu.id === req.params.id);

    if (
      !menuOptionExist
    ) {
      error.push({ msg: 'menu option does not exist' });
    }

    if (
      !menuOption
    ) {
      error.push({ msg: 'meal does not exist' });
    }
    if (
      req.body.meal_name
    ) {
      error.push({ msg: 'cannot edit meal name from menu' });
    }
    if (
      error.length > 0
    ) {
      return res.status(404).json({
        status: 'failed',
        error,
      });
    }
    const id = req.params.id;
    const menutoEdit = MenuServices.editMenuOption(id, req.body);
    return res.status(200).json({
      status: 'success',
      data: menutoEdit,
    });
  },

  fetchMenu(req, res) {
    const allMenu = MenuServices.fetchMenu();
    return res.status(200).json({
      status: 'success',
      data: allMenu,
    });
  },
};

export default MenuController;
