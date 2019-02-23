import MealService from '../services/MealServices';
import dummyData from '../utils/dummyData';

const MealController = {
  fetchAllMeals(req, res) {
    const allMeals = MealService.fetchAllMeals();
    return res.status(200).json({
      status: 'success',
      data: allMeals,
    });
  },

  addAMeal(req, res) {
    const error = [];
    if (
      req.body.id
    ) {
      error.push({ msg: 'cannot input meal id' });
    }

    if (
      !req.body.name
    ) {
      error.push({ msg: 'name field is required' });
    }

    if (
      !req.body.category
    ) {
      error.push({ msg: 'category field is required' });
    }

    if (
      !req.body.size
    ) {
      error.push({ msg: 'size field is required' });
    }

    if (
      !req.body.price
    ) {
      error.push({ msg: 'price field is required'});
    }

    if (
      !req.body.currency
    ) {
      error.push({ msg: 'currency field is required' });
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
    const createdMeal = MealService.addMeal(newMeal);
    return res.status(200).json({
      status: 'success',
      data: createdMeal,
    });
  },

  getSingleMeal(req, res) {
    const { id } = req.params;
    const foundMeal = MealService.getAMeal(id);
    if (
      !foundMeal
    ) {
      return res.status(404).json({
        status: 'failed',
        data: 'Nothing found',
      });
    }
    return res.status(200).json({
      status: 'success',
      data: foundMeal,
    });
  },

  editAMeal(req, res) {
    const error = [];
    const mealExist = dummyData.meals.find(meal => meal.id === req.params.id);

    if (
      !mealExist
    ) {
      error.push({ msg: 'meal does not exist' });
    }
    if (
      req.body.id
    ) {
      error.push({ msg: 'cannot edit meal id' });
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
    const mealtoEdit = MealService.getToEdit(id, req.body);
    return res.status(200).json({
      status: 'success',
      data: mealtoEdit,
    });
  },

  deleteAMeal(req, res) {
    const id = req.params.id;
    const meals = MealService.getToDelete(id);
    return res.status(200).json({
      status: 'success',
      data: meals,
    });
  }
};

export default MealController;
