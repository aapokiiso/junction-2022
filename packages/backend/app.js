const express = require('express')
require("dotenv").config();
const mysql = require('mysql2')
const Sequelize = require("sequelize");

const app = express()
const port = process.env.PORT || 3000

app.get('/nodes/', (req, res) => {

  const connection = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.MYSQL_DATABASE,

  });

  connection.query(
    'SELECT nodes.* FROM `nodes`',
    function(err, results, fields) {

      res.json(results); // results contains rows returned by server
    }
  );
})

app.get('/edges/', (req, res) => {

  const connection = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.MYSQL_DATABASE,

  });

  connection.query(
    'SELECT links.* FROM `links`',
    function(err, results, fields) {

      res.json(results); // results contains rows returned by server
    }
  );
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
