const express = require('express');
const router = express.Router();
const { pool } = require("../../dbConfig");
const bcrypt = require("bcrypt");
const session = require("express-session");
const flash = require("express-flash");
require("dotenv").config();
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');

//AUTH//

router.post("/", async (req, res) => {
    
    let errors = [];

    if (errors.length > 0) {
        res.status(400).json({errors});

    }else{
            jwt.sign(
                { id: 123 },
                process.env.SESSION_SECRET,
                { expiresIn: 3600 },
                (err, token) => {
                    if(err) throw err;
                    res.json({
                        token
                    });
                }
            )
        }
});

// GET USER DATA //
router.get("/", auth, async (req, res) => {
    try {
        
        res.json("Authenticated");
    } catch (err) {
        console.error(err.message);
    }
});


module.exports = router;