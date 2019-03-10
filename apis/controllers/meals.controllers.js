import MealService from '../services/MealServices';
import database from '../db/models';

const MealController = {
  async test(req, res) {
    return res.json({ msg: 'got here' });
  },
  async fetchAllMeals(req, res) {
    const allMeals = await MealService.fetchAllMeals();
    return res.status(200).json({
      status: 'success',
      data: allMeals,
    });
  },

  async addAMeal(req, res) {
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
      !req.body.description
    ) {
      error.push({ msg: 'description field is required' });
    }

    if (
      !req.body.price
    ) {
      error.push({ msg: 'price field is required' });
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
    newMeal.catererId = req.decodedToken.id;
    newMeal.orderedTimes = 1;
    newMeal.isMenu = false;
    const createdMeal = MealService.addMeal(newMeal);
    return res.status(200).json({
      status: 'success',
      data: createdMeal,
    });
  },

  async getSingleMeal(req, res) {
    const { id } = req.params;
    const foundMeal = await MealService.getAMeal(id);
    if (
      !foundMeal
    ) {
      return res.status(404).json({
        status: 'failed',
        error: 'Nothing found',
      });
    }
    return res.status(200).json({
      status: 'success',
      data: foundMeal,
    });
  },

  editAMeal(req, res) {
    try {
      const { id } = req.params;
      const catererId = req.decodedToken.id;
      let response = {};
      database.Meal.count({ where: { id } })
        .then((count) => {
          if (count > 0) {
            const checkCaterer = MealService.checkCaterer(id, catererId);
            if (!checkCaterer) {
              response = res.status(400).json({
                status: "only this meal's caterer can update this meal",
              });
            }
            const mealtoEdit = MealService.editMeal(id, req.body, catererId);
            if (!mealtoEdit) {
              response = res.status(404).json({
                status: 'failed to update meal',
              });
            }
            response = res.status(200).json({
              status: 'success',
              data: mealtoEdit,
            });
          } else {
            response = res.status(404).json({
              error: 'meal id is not available',
            });
          }
        });
      return response;
    } catch (error) {
      return res.status(500).json({ error });
    }
  },

  deleteAMeal(req, res) {
    try {
      const { id } = req.params;
      let response = {};
      database.Meal.count({ where: { id } })
        .then((count) => {
          if (count > 0) {
            const deleteMeal = MealService.getToDelete(req.params.id);
            response = res.status(200).json({
              deleteMeal,
            });
          } else {
            response = res.status(404).json({
              error: 'meal id is not available',
            });
          }
        });
      return response;
    } catch (error) {
      return res.status(500).json({ error });
    }
  },
};

export default MealController;
