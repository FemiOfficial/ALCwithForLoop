[![Build Status](https://travis-ci.org/FemiOfficial/ALCwithForLoop.svg?branch=apis)](https://travis-ci.org/FemiOfficial/ALCwithForLoop)

[![Coverage Status](https://coveralls.io/repos/github/FemiOfficial/ALCwithForLoop/badge.svg?branch=feature%2Ftravis-ci)](https://coveralls.io/github/FemiOfficial/ALCwithForLoop?branch=feature%2Ftravis-ci)


# ALCwithForLoop
# Meal Booking REACT Application 
## UI link - https://femiofficial.github.io/ALCwithForLoop/frontend

## Completed all endpoints 

## GET /apis/v1/meals

This to get all availble meal options

## POST /apis/v1/meals

This is to post a new meal option (add)

## PUT /apis/v1/meals/1

This is to edit a meal option with a valid id

## DELETE /apis/v1/meals/1

This is to delete a meal option with a valide id

## POST /apis/v1/menu

This is to post a new menu option in this formal {meal_id: "1", quantity: "34"} //meal_id is the id of the meal to be added and quantity is number of plates or bowls to be added

## GET /apis/v1/menu

This is get all the menu options for a particular day

## PUT /apis/v1/menu/1

This is to edit a menu option with a valid id

## POST /apis/v1/order

This is to place an order from the menu options available for a particular day

## GET apis/v1/order

This is to get all the orders

## PUT apis/v1/order/1

This is to edit an order with a valid id

## Test cases completed to test all routes using Mocha and Chai
