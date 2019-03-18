/**
 * @swagger
 * securityDefinitions:
 *   Bearer:
 *     type: apiKey
 *     name: Authorization
 *     in: header
 * definition:
 *   OrderObject:
 *     properties:
 *       id:
 *         type: number
 *       userId:
 *         type: number
 *       catererId:
 *          type: number
 *       quantity:
 *         type: number
 *       mealId:
 *         type: number
 *       isCancelled:
 *         type: boolean
 *       isDleivered:
 *         type: boolean
 *   Order:
 *     properties:
 *       mealId:
 *         type: number
 *   OrderUpdate:
 *     properties:
 *       mealId:
 *         type: number
 *       isCancelled:
 *         type: boolean
 *       isDelivered: number
 *   OrderModel:
 *     properties:
 *       order:
 *         $ref: '#/definitions/Order'
 *   OrderUpdateModel:
 *     properties:
 *       order:
 *         $ref: '#/definitions/OrderUpdate'
 *   OrderResponse:
 *     properties:
 *       message:
 *         type: string
 *       id:
 *         type: number
 *   ResponseObjectOrder:
 *     properties:
 *       status:
 *         type: number
 *       data:
 *         type: array
 *         items:
 *           $ref: '#/definitions/OrderObject'
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
 * /order:
 *   post:
 *     tags:
 *       - Order
 *     description: Creates a new meal order
 *     security:
 *       - Bearer: []
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: order
 *         description: order creation credentials
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/OrderModel'
 *     responses:
 *       200:
 *         description: Successfully created
 *         schema:
 *           $ref: '#/definitions/OrderResponse'
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
 * /order:
 *   get:
 *     tags:
 *       - Order
 *     description: Returns all user's orders
 *     security:
 *       - Bearer: []
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: caterer orders' data
 *         schema:
 *           $ref: '#/definitions/ResponseObjectOrder'
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
 * /order/{id}:
 *   put:
 *     tags:
 *       - Order
 *     description: Updates a new order
 *     security:
 *       - Bearer: []
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Order's id
 *         in: path
 *         required: true
 *         type: string
 *       - name: order
 *         description: order creation credentials
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/OrderUpdateModel'
 *     responses:
 *       200:
 *         description: Successfully created
 *         schema:
 *           $ref: '#/definitions/OrderResponse'
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
