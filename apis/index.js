const express = require('express');
const bodyParser = require('body-parser');
const mealsRoute = require('./routes/mealsRoute');
const menuRoute = require('./routes/menuRoute');
const orderRoute = require('./routes/orderRoute');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = 3000;

app.use('/api/v1/meals', mealsRoute);
app.use('/api/v1/menu', menuRoute);
app.use('/api/v1/order', orderRoute);

app.listen(PORT, () => console.log(`app is running from ${PORT}`));

export default app;