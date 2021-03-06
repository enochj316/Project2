require("dotenv").config();
const express = require('express');
const session = require("express-session");
const cookieParser = require("cookie-parser")
const flash = require('express-flash')
const path = require('path');
const passport = require("./config/passport.js");


// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 8080;

// Requiring our models for syncing
const db = require('./models');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(cookieParser());
app.use(session({ secret: "cheesy mcgee", cookie: { maxAge: 600000 }, resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require('./routes/api-routes.js')(app);
require('./routes/html-routes.js')(app);

//add {force: true} to reset tablex
db.sequelize.sync().then(() => {
    app.listen(PORT, () => console.log(`Server listening on: http://localhost:${PORT}`));
});