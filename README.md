[![Build Status](https://travis-ci.org/FemiOfficial/ALCwithForLoop.svg?branch=apis)](https://travis-ci.org/FemiOfficial/ALCwithForLoop)

[![Coverage Status](https://coveralls.io/repos/github/FemiOfficial/ALCwithForLoop/badge.svg?branch=feature%2Ftravis-ci)](https://coveralls.io/github/FemiOfficial/ALCwithForLoop?branch=feature%2Ftravis-ci)


# ALCwithForLoop
# Meal Booking REACT Application 
## UI link - https://femiofficial.github.io/ALCwithForLoop/frontend
## REST API ON Heroku - https://bookingmealalc.herokuapp.com/api/v1/

## Technologies used
### UI
* HTML - for the markup of the ui
* CSS - for aethetics on the web pages
* Javascript - to handle some extra ui/ux

### Backend
* Nodejs - for the server side
* Express - for the api routes
* Heroku for hosting services
* PostgreSql - for the database
* Babel for transpiling es6 codes to es5

### Continous Integration
* Travis CI for test automation
* Coveralls to report the test coverage of the tests implemented o the routes

## Installations
* Install Nodejs and npm (a stable version)
* Clone this repo *git clone https://github.com/FemiOfficial/ALCwithForLoop.git
* Run *npm install* this will intsall all dependencies
* Copy .env and edit the database credentials to match your database info.
* Run *npm run migrate* to migrate all the models (db tables) to the database
* Run *npm run seed* (the seed default database to corresponding models)
* Run *npm run test* to test routes
* Run *npm start* to start the app itself (you can test the routes with postman with this URL - https://bookingmealalc.herokuapp.com/api/v1/) 

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

This is to post a new menu option in this formal {id: "1", quantity: "34"} //meal_id is the id of the meal to be added and quantity is number of plates or bowls to be added

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

## Test cases completed on all routes using Mocha and Chai
