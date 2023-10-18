const express = require('express');
const { connectToMongoDB } = require('./db');
require("dotenv").config();
const bodyParser = require('body-parser');
const userRoute = require('./Routes/userRoute');
const productRoute = require('./Routes/productRoute')

const PORT = process.env.PORT;

const app = express();

connectToMongoDB();

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', userRoute.router);
app.use('api', productRoute.router);

app.get("/", (req, res) => {
  res.send("Welcome Home!")
})

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`)
})