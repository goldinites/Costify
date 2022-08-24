const express = require("express");
const router = express.Router();

// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection( {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'karma&koma',
  database: 'TESTDB'
});

//Вывод всех динамических страниц сайта.
router.get("/", async (req, res) => {
  try {
// simple query
    connection.query(
      'SELECT * FROM `users`',
      function(err, results, fields) {
        res.status(200);
        res.json(results);
      }
    );
  } catch (err) {
    // Если возникает проблема, то возвращаем ошибку сервера.
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
