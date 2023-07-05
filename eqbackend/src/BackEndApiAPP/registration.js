const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const db=require('../../dbConnection')
// hasing Npm Package
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


require('dotenv').config();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// API endpoint to register a new user
router.post('/api', (req, res) => {
  const { firstName, lastName, mobileNumber, password } = req.body;

 
  if (!firstName || !lastName || !mobileNumber || !password) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  db.query('SELECT * FROM users WHERE mobileNumber = ?', [mobileNumber], (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: 'Error checking mobileNumber.' });
    }

    if (results.length > 0) {
      return res.status(409).json({ message: 'Mobile number already exists.' });
    }

    // Hash the password using bcrypt
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ message: 'Error hashing password.' });
      }

      const sql = 'INSERT INTO users (firstName, lastName, mobileNumber, password, createdBy, updatedBy) VALUES (?, ?, ?, ?, ?, ?)';
      db.query(
        sql,
        [firstName, lastName, mobileNumber, hash, 'admin', 'admin'],
        (err, result) => {
          if (err) {
            console.log(err);
            return res.status(500).json({ message: 'Error registering user.' });
          }
  
      
          const payload = {
            mobileNumber,
          };
  
          const secretKey = process.env.SECRET_KEY 
          const options = {
            expiresIn: '1h', 
          };
  
          jwt.sign(payload, secretKey, options, (err, token) => {
            if (err) {
              console.log(err);
              return res.status(500).json({ message: 'Error generating token.' });
            }
  
            return res.status(201).json({ message: 'User registered successfully.', token });
          });
        }
      );
      
    });
});
});

module.exports = router;
