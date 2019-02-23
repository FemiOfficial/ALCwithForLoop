import dummyData from '../utils/dummyData';

const Meals = require('../models/Meals');


const MealService = {
  fetchAllMeals() {
    const allMeals = dummyData.meals.map((data) => {
      const meal = new Meals();
      meal.id = data.id;
      meal.name = data.name;
      meal.size = data.size;
      meal.category = data.category;
      meal.price = data.price;
      meal.currency = data.currency;
      return meal;
    });
    return allMeals;
  },

  getAMeal(id) {
    const meal = dummyData.meals.find(mea => mea.id === id);
    return meal;
  },

  addMeal(data) {
    const mealsLength = dummyData.meals.length;
    const lastId = dummyData.meals[mealsLength - 1].id; 
    const newId = lastId + 1;
    data.id = newId;
    dummyData.meals.push(data);
    return dummyData.meals;
  },

  getToEdit(id, data) {
    const meals = dummyData.meals;
    if (
      data.name
    ) {
      meals[id - 1].name = data.name;
    }

    if (
      data.category
    ) {
      meals[id - 1].category = data.category;
    }

    if (
      data.currency
    ) {
      meals[id - 1].currency = data.currency;
    }

    if (
      data.size
    ) {
      meals[id - 1].size = data.size;
    }
    return meals[id - 1];
  },

  getToDelete(id) {
    const error = { msg: 'cannot find id' };
    const meals = dummyData.meals;
    const mealsLength = dummyData.meals.length;
    const newMealsLength = dummyData.meals.filter(meal => meal.id !== id).length;

    if (
      mealsLength === newMealsLength
    ) {
      return error;
    }
    const index = dummyData.meals.findIndex(meal => meal.id === id);
    meals.splice(index, 1);
    return meals;
  },
};

export default MealService;
