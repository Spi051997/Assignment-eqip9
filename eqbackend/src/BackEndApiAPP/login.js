const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const db = require("../../dbConnection");
// hasing Npm Package
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

router.post("/login", async (req, res) => {
  const { mobileNumber, password } = req.body;

  if (!mobileNumber || !password) {
    res.status(200).send({
      message: "Please Provide all details",
    });
  }
  try {
    const query = "SELECT * FROM users WHERE mobileNumber = ?";
    const user = await new Promise((resolve, reject) => {
      db.query(query, [mobileNumber], (err, results) => {
        if (err) {
          reject(err);
          return;
        }

        if (results.length === 0) {
          res.status(400).send({
            message: "No mobile number found",
          });
          return;
        }

        resolve(results[0]);
      });
    });

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid credentials." });
    }

    const payload = { mobileNumber: user.mobileNumber };
    const secretKey = process.env.SECRET_KEY;
    const options = { expiresIn: "1h" };

    jwt.sign(payload, secretKey, options, (err, token) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ message: "Error generating token." });
      }

      return res.status(200).json({ message: "Login successful.", token });
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
