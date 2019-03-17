import express from 'express';
import swaggerJSDoc from 'swagger-jsdoc';

const router = express.Router();

// Swagger jsdoc configuration
const swaggerDefinition = {
  info: {
    title: 'Node Swagger API',
    version: '1.0.0',
    description: 'Api documentation for Andela developer challenge.',
  },
  host: 'localhost:3000',
  basePath: '/api/v1',
};


// options for the swagger docs
const options = {

  // import swaggerDefinitions
  swaggerDefinition,

  // path to the API docs
  apis: ['./apis/swagger/*.js']

};

// initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

// setup swagger route
router.get('/', (req, res) => {
  res.header('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

module.exports = router;
