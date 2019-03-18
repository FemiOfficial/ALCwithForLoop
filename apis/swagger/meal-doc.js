/**
 * @swagger
 * securityDefinitions:
 *   Bearer:
 *     type: apiKey
 *     name: Authorization
 *     in: header
 * definition:
 *   MealObject:
 *     properties:
 *       id:
 *         type: number
 *       catererId:
 *         type: number
 *       price:
 *         type: number
 *       name:
 *         type: string
 *       description:
 *         type: string
 *       isMenu:
 *         type: boolean
 *       category:
 *         type: string
 *       orderedTimes:
 *         type: number
 *   Meal:
 *     properties:
 *       price:
 *         type: number
 *       name:
 *         type: string
 *       description:
 *         type: string
 *       isMenu:
 *         type: boolean
 *       category:
 *         type: string
 *   MealModel:
 *     properties:
 *       meal:
 *         $ref: '#/definitions/Meal'
 *   MealResponse:
 *     properties:
 *       message:
 *         type: string
 *       id:
 *         type: number
 *   ResponseObjectSingleMeal:
 *     properties:
 *       status:
 *         type: number
 *       data:
 *         $ref: '#/definitions/MealObject'
 *   ResponseObjectMeal:
 *     properties:
 *       status:
 *         type: number
 *       data:
 *         type: array
 *         items:
 *           $ref: '#/definitions/MealObject'
 *   ManipulationObject:
 *     properties:
 *       message:
 *         type: string
 *       id:
 *         type: number
 *   UpdateObjectMeal:
 *     properties:
 *       status:
 *         type: number
 *       data:
 *           $ref: '#/definitions/ManipulationObject'
 *   ErrorObject:
 *     properties:
 *       status:
 *         type: number
 *       error:
 *         type: string
 *   Token:
 *     properties:
 *       token:
 *        type: string
 */

/**
 * @swagger
 * /meal:
 *   post:
 *     tags:
 *       - Meal
 *     description: Creates a new meal
 *     security:
 *       - Bearer: []
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: meal
 *         description: meal creation credentials
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/MealModel'
 *     responses:
 *       200:
 *         description: Successfully created
 *         schema:
 *           $ref: '#/definitions/MealResponse'
 *       500:
 *         description: Server error exists
 *         schema:
 *           $ref: '#/definitions/ErrorObject'
 *       400:
 *         description: Validation error exists
 *         schema:
 *           $ref: '#/definitions/ErrorObject'
 *       401:
 *         description: Authentication error exists
 *         schema:
 *           $ref: '#/definitions/ErrorObject'
 *       403:
 *         description: Authourization error exists
 *         schema:
 *           $ref: '#/definitions/ErrorObject'
 */
/**
 * @swagger
 * /meal:
 *   get:
 *     tags:
 *       - Meal
 *     description: Returns all caterer's meals
 *     security:
 *       - Bearer: []
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: caterer meals' data
 *         schema:
 *           $ref: '#/definitions/ResponseObjectMeal'
 *       500:
 *         description: Server error exists
 *         schema:
 *           $ref: '#/definitions/ErrorObject'
 *       401:
 *         description: Authentication error exists
 *         schema:
 *           $ref: '#/definitions/ErrorObject'
 *       403:
 *         description: Authourization error exists
 *         schema:
 *           $ref: '#/definitions/ErrorObject'
 */
/**
 * @swagger
 * /meal/{id}:
 *   put:
 *     tags:
 *       - Meal
 *     description: Update a Meal
 *     security:
 *       - Bearer: []
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Meal's id
 *         in: path
 *         required: true
 *         type: string
 *       - name: meal
 *         description: meal creation credentials
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/MealModel'
 *     responses:
 *       200:
 *         description: Successfully updated
 *         schema:
 *           $ref: '#/definitions/MealResponse'
 *       500:
 *         description: Server error exists
 *         schema:
 *           $ref: '#/definitions/ErrorObject'
 *       400:
 *         description: Validation error exists
 *         schema:
 *           $ref: '#/definitions/ErrorObject'
 *       401:
 *         description: Authentication error exists
 *         schema:
 *           $ref: '#/definitions/ErrorObject'
 *       403:
 *         description: Authourization error exists
 *         schema:
 *           $ref: '#/definitions/ErrorObject'
 */
/**
 * @swagger
 * /meal/{id}:
 *   delete:
 *     tags:
 *       - Meal
 *     description: Delete a single meal object
 *     security:
 *       - Bearer: []
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Meal's id
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Meal successfully deleted
 *         schema:
 *           $ref: '#/definitions/MealResponse'
 *       500:
 *         description: Server error exists
 *         schema:
 *           $ref: '#/definitions/ErrorObject'
 *       400:
 *         description: Validation error exists
 *         schema:
 *           $ref: '#/definitions/ErrorObject'
 *       401:
 *         description: Authentication error exists
 *         schema:
 *           $ref: '#/definitions/ErrorObject'
 *       403:
 *         description: Authourization error exists
 *         schema:
 *           $ref: '#/definitions/ErrorObject'
 */
