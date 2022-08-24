require("dotenv").config();

const express = require("express");
const sequelize = require('./database');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const userRoutes = require("./routes/users.js");
app.use("/api/users", userRoutes);

const {loadNuxt, build} = require("nuxt");
const isDev = process.env.NODE_ENV !== "production";
const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 3000;

async function start() {
  const nuxt = await loadNuxt(isDev ? "dev" : "start");
  app.use(nuxt.render);

  if (isDev) {
    build(nuxt);
  }

  sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
    app.listen(port, host);
  }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
  });
}

start();
