const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'website_admn',
  password: 'TUNYVm29UHPqwFB',
  database: 'car_list'
});

// Connect to the database
connection.connect();

// Define a route to fetch cars from the database
app.get('/api/cars', (req, res) => {
  connection.query('SELECT * FROM cars', (error, results, fields) => {
    if (error) {
      console.error('Error fetching cars:', error);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.json(results);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
