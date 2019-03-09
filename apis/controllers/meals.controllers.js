import MealService from '../services/MealServices';

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
      const checkCaterer = MealService.checkCaterer(id, catererId);
      if (!checkCaterer) {
        return res.status(400).json({
          status: "only this meal's caterer can update this meal",
        }); 
      }
      const mealtoEdit = MealService.editMeal(id, req.body, catererId);
      if (!mealtoEdit) {
        return res.status(404).json({
          status: 'failed to update meal',
        });
      }
      return res.status(200).json({
        status: 'success',
        data: mealtoEdit,
      });
    } catch (error) {
      return res.status(500).json({ error });
    }
  },

  async deleteAMeal(req, res) {
    try {
      const deleteMeal = await MealService.deleteMeal(req.params.id);
      return res.status(200).json({
        deleteMeal,
      });
    } catch (error) {
      return res.status(500).json({ error });
    }
  },
};

export default MealController;
