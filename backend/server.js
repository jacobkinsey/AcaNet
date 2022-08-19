const express = require('express');
const app = express();
const cors = require("cors");
const { pool } = require("./dbConfig");
const bcrypt = require("bcrypt");
const session = require("express-session");
const flash = require("express-flash");
require("dotenv").config();
const jwt = require('jsonwebtoken');
const auth = require('./middleware/auth');

const authRoutes = require('./routes/api/auth');

const PORT = process.env.PORT || 4001;

//middleware
app.use(cors());
app.use(express.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

app.use('/auth', authRoutes);

//basic commands//

app.get('/', (req, res) => {
    res.send("Hello");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

