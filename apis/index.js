const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mealsRoute = require('./routes/mealsRoute');
const menuRoute = require('./routes/menuRoute');
const orderRoute = require('./routes/orderRoute');
const userRoute = require('./routes/userRoute');
const indexRoute = require('./routes/indexRoute');
const apiDocsRoute = require('./routes/api.docs.routes');


const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Routes
app.use('/api/v1', indexRoute);
app.use('/api/v1/swagger.json', apiDocsRoute);
app.use('/api/v1/meals', mealsRoute);
app.use('/api/v1/menu', menuRoute);
app.use('/api/v1/order', orderRoute);
app.use('/api/v1/auth', userRoute);

// Routes for Swagger Docs
app.use('/api-docs', express.static(path.join(__dirname, '../apis/public/api-docs')));


const PORT = 3000;


app.listen(process.env.PORT || PORT, () => console.log(`app is running from ${PORT}`));

export default app;
