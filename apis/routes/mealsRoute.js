import MealController from '../controllers/meals.controllers';

const express = require('express');


const router = express.Router();

router.get('/', MealController.fetchAllMeals);

router.get('/:id', MealController.getSingleMeal);

router.post('/', MealController.addAMeal);

router.put('/:id', MealController.editAMeal);

router.delete('/:id', MealController.deleteAMeal);

module.exports = router;
