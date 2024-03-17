const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

const app = express();
app.use(bodyParser.json());

// Connect to your SQL database
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql', // or 'postgres', 'sqlite', 'mssql', etc.
    logging: false // Disable logging for production
});

// Define your model
const Item = sequelize.define('item', {
    name: Sequelize.STRING,
    description: Sequelize.STRING
});

// Sync the model with the database
sequelize.sync()
    .then(() => {
        console.log('Database and tables created successfully');
    })
    .catch(err => {
        console.error('Error syncing database:', err);
    });

// Route to add new item to the database
app.post('/add-item', async (req, res) => {
    try {
        const newItem = await Item.create(req.body);
        res.send('Item added successfully');
    } catch (error) {
        res.status(500).send(error);
    }
});

// Route to dynamically generate template page
app.get('/item/:id', async (req, res) => {
    try {
        const itemId = req.params.id;
        const item = await Item.findByPk(itemId);
        // Render your template with item data and send it as a response
        res.render('itemTemplate', { item });
    } catch (error) {
        res.status(500).send(error);
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
