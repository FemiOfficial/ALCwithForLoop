import MealController from '../controllers/meals.controllers';
import checkAuth from '../middlewares/checkAuth';
import mealsPermissions from '../middlewares/permissionAuth/meals';

const express = require('express');

const router = express.Router();

router.get('/', checkAuth.verifyToken, mealsPermissions.canView,
  MealController.fetchAllMeals);

router.get('/:id', checkAuth.verifyToken, mealsPermissions.canView,
  MealController.getSingleMeal);

router.post('/', checkAuth.verifyToken, mealsPermissions.canCreate,
  MealController.addAMeal);

router.put('/:id', checkAuth.verifyToken, mealsPermissions.canCreate,
  MealController.editAMeal);

router.delete('/:id', checkAuth.verifyToken, mealsPermissions.canCreate,
  MealController.deleteAMeal);

module.exports = router;
