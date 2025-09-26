const express = require('express');
const productsRoute = require('./routes/products');
const app = express();

// ...existing code...
app.use(productsRoute);
// ...existing code...
