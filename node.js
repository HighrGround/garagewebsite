const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/carDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Define the car schema
const carSchema = new mongoose.Schema({
    model: String,
});

// Create the car model
const Car = mongoose.model('Car', carSchema);

// Middleware to parse JSON requests
app.use(bodyParser.json());

// API endpoint to get all cars
app.get('/api/cars', async (req, res) => {
    const cars = await Car.find();
    res.json(cars);
});

// API endpoint to add a new car
app.post('/api/cars', async (req, res) => {
    const newCar = new Car({ model: req.body.model });
    const savedCar = await newCar.save();
    res.json(savedCar);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
