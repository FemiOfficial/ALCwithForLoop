import database from '../db/models';

const MealService = {
  async fetchAllMeals(catererId) {
    const meals = database.Meal.findAll({ where: catererId });
    return meals;
  },

  async getAMeal(id) {
    const meal = database.Meal.findOne({ where: { id } });
    return meal;
  },

  async addMeal(data) {
    const newMeal = await database.Meal.create(data);
    return newMeal;
  },

  async editMeal(id, data, catererId) {
    try {
      const updatedMeal = await database.Meal.update(data, { where: { catererId, id } });
      if (updatedMeal[0] === 0) {
        const err = { error: 'an error occured' };
        throw err;
      }
      const response = {
        message: 'meal updated successfully',
        updatedMeal,
      };
      return response;
    } catch (e) {
      throw e;
    }
  },

  async getToDelete(id) {
    const meal = await database.Meals.destroy({ where: { id } });
    if (meal === 0) {
      const err = { error: 'an error occured' };
      throw err;
    }
    return meal;
  },

  async checkCaterer(id, catererId) {
    const meal = await database.Meal.findOne({ where: { id, catererId } });
    if (meal === null) {
      return false;
    }
    return true;
  },
};

export default MealService;
