const express = require('express')
require("dotenv").config();
const mysql = require('mysql2')
const Sequelize = require("sequelize");

const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {


    const sequelize = new Sequelize(
      process.env.DB_NAME || process.env.MYSQL_DATABASE,
      process.env.DB_USERNAME || 'root',
      process.env.DB_PASSWORD || process.env.MYSQL_ROOT_PASSWORD,
        {
          host: process.env.DB_HOST,
          dialect: 'mysql',
          dialectOptions: {
            socketPath: process.env.DB_SOCKET_PATH,
          },
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
