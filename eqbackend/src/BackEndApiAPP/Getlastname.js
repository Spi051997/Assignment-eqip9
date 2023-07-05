const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root123",
  database: "User",
});

router.get("/mobile/:mobileNumber", async (req, res) => {
  const { mobileNumber } = req.params;

  try {
    const query = `SELECT * FROM users WHERE mobileNumber = ?`;
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

    const firstname = user.firstName;
    const lastname = user.lastName;
    return res.json({
      firstname,
      lastname,
    });
  } catch (error) {
    console.error("Error fetching user last name:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
