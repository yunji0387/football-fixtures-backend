const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

// // MongoDB connection without deprecated options
// mongoose.connect(process.env.MONGO_URI)
//     .then(() => console.log('MongoDB Connected Successfully'))
//     .catch(err => console.error('MongoDB connection error:', err));

// Middleware to parse JSON bodies
app.use(express.json());

app.use(cors());

const fixtureRoutes = require('./routes/fixtureRoutes');
const mockFixtureRoutes = require('./routes/mockFixtureRoutes');

app.use('/fixtures', fixtureRoutes);
app.use('/mock/fixtures', mockFixtureRoutes);

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Football League Fixtures Backend Server',
        apiEndpoints: {
            createFixtures: {
                method: 'POST',
                url: '/fixtures/:code',
                description: 'Add new fixtures for a specific competition. Replace :code with the actual competition code.',
            },
            readFixtures: {
                method: 'GET',
                url: '/fixtures/:code',
                description: 'Retrieve the current fixtures of a specific competition by its code. Replace :code with the actual competition code.',
            },
            updateFixtures: {
                method: 'PUT',
                url: '/fixtures/:code',
                description: 'Modify fixture data for a specific competition. Replace :code with the actual competition code.',
            },
            deleteFixtures: {
                method: 'DELETE',
                url: '/fixtures/:code',
                description: 'Remove fixtures for a competition from the database. Replace :code with the actual competition code.',
            },
        },
        note: 'Please ensure to replace :code with the actual competition code you wish to interact with in the provided API endpoints.'
    });
});

if (process.env.NODE_ENV !== 'test') {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

module.exports = app;