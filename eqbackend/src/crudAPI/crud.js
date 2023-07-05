const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const bodyParser = require("body-parser");
// hasing Npm Package
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const db = require("../../dbConnection");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post("/register", (req, res) => {
  const { firstname, lastname, mobilenumber, password } = req.body;
  const callProcedureQuery =
    'CALL sp_crudUsers("CREATE", null, ?, ?, ?, ?, "admin", "admin")';
  db.query(
    callProcedureQuery,
    [firstname, lastname, mobilenumber, password],
    (error) => {
      if (error) {
        console.error("Error creating user:", error);
        return res.status(500).json({ message: "Internal server error." });
      }
      return res.status(200).json({ message: "User created successfully." });
    }
  );
});

router.get("/fetchuser", (req, res) => {
  const callProcedureQuery =
    'CALL sp_crudUsers("SELECT", null, null, null, null, null, null, null)';
  db.query(callProcedureQuery, (error, results) => {
    if (error) {
      console.error("Error retrieving users:", error);
      return res.status(500).json({ message: "Internal server error." });
    }
    return res.status(200).json({
      Number_of_records: results[0].length,
      results,
    });
  });
});

router.put("/update/:id", (req, res) => {
  const { id } = req.params;
  const { firstname, lastname, mobilenumber, password, updated_by } = req.body;
  const callProcedureQuery =
    'CALL sp_crudUsers("UPDATE", ?, ?, ?, ?, ?, ?, "admin")';
  db.query(
    callProcedureQuery,
    [id, firstname, lastname, mobilenumber, password, updated_by],
    (error) => {
      if (error) {
        console.error("Error updating user:", error);
        return res.status(500).json({ message: "Internal server error." });
      }
      return res.status(200).json({ message: "User updated successfully." });
    }
  );
});

router.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  const callProcedureQuery = 'CALL sp_crudUsers("DELETE", ?)';
  db.query(callProcedureQuery, [id], (error) => {
    if (error) {
      console.error("Error deleting user:", error);
      return res.status(500).json({ message: "Internal server error." });
    }
    return res.status(200).json({ message: "User deleted successfully." });
  });
});

module.exports = router;
