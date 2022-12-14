const express = require('express')
require("dotenv").config();
const mysql = require('mysql2')
const Sequelize = require("sequelize");
const cors = require('cors')
const grid = require('./grid_analysis/grid')

const app = express()
app.use(express.json());
app.use(cors())

const port = process.env.PORT || 3000

app.get('/calculation/', async (req,res) => {

  const temperature = await grid();
  res.status(200).json(temperature);



});

app.get('/nodes/', (req, res) => {

  const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.DB_NAME || process.env.MYSQL_DATABASE,
    socketPath: process.env.DB_SOCKET_PATH,
    charset: "utf8"
  });

  connection.query(
    'SELECT nodes.* FROM `nodes`',
    function(err, results, fields) {
      console.log(err)
      res.json(results); // results contains rows returned by server
    }
  );
  connection.end();
})

app.patch('/nodes/:id', (req, res) => {

  const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.DB_NAME || process.env.MYSQL_DATABASE,
    socketPath: process.env.DB_SOCKET_PATH,
    charset: "utf8"
  });
  var parameters = req.body;

  connection.query(
    'UPDATE nodes SET power=?, deltaT=? WHERE id = ?',
    [parameters.power, parameters.deltaT, req.params.id],
    function(err, results, fields) {
      res.end();
    }
  );
  connection.end();
})

app.patch('/edges/:id', (req, res) => {

  const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.DB_NAME || process.env.MYSQL_DATABASE,
    socketPath: process.env.DB_SOCKET_PATH,
    charset: "utf8"
  });
  var parameters = req.body;

  connection.query(
    'UPDATE links SET deltaT=? WHERE id = ?',
    [parameters.deltaT, req.params.id],
    function(err, results, fields) {
      console.log(err);
      res.end();
    }
  );
  connection.end();
})

app.get('/edges/', (req, res) => {

  const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.DB_NAME || process.env.MYSQL_DATABASE,
    socketPath: process.env.DB_SOCKET_PATH,
    charset: "utf8"
  });

  connection.query(
    'SELECT links.* FROM `links`',
    function(err, results, fields) {

      res.json(results); // results contains rows returned by server
    }
  );
  connection.end();
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
