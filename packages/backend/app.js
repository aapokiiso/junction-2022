const express = require('express')
require("dotenv").config();
const mysql = require('mysql2')
const Sequelize = require("sequelize");

const app = express()
const port = 3000

app.get('/', (req, res) => {
   

    const sequelize = new Sequelize(
      process.env.MYSQL_DATABASE,
      'root',
      process.env.MYSQL_ROOT_PASSWORD,
        {
          host: 'db',
          dialect: 'mysql'
        }
      );

    sequelize.authenticate().then(() => {
      console.log('Connection has been established successfully.');
    }).catch((error) => {
      console.error('Unable to connect to the database: ', error);
    });

  
  res.end("asd")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})