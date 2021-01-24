// Import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const newPswrdRoutes = require('./routes/newPasswordRoute');
const verifyPswrdRoutes = require('./routes/verifyPasswordRoute');

// Create a new express application called 'app'
const app = express();

// Set our backend port to be either an environment variable or port 5000
const port = process.env.PORT || 5000;

// This application level middleware prints incoming requests to the servers console
app.use((req, res, next) => {
    console.log(`Request_Endpoint: ${req.method} ${req.url}`);
    next();
});

// Set up the bodyParser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// Set up the CORs middleware
app.use(cors());

// Configure app to use route
app.use('/new-password', newPswrdRoutes);
app.use('/verify-password', verifyPswrdRoutes);

// Catch any bad requests
app.get('*', (req, res) => {
    res.status(200).json({
        msg: 'No routes defined'
    });
});

// Set our server to listen on the port defiend by our port variable
app.listen(port, () => console.log(`BACK_END_SERVICE_PORT: ${port}`));