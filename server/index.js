require("dotenv").config();

const express = require("express");
const bodyParser = require('body-parser');
const app = express();
// const mysql = require('mysql2');
// import dbConfig from 'db';
// app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// const connection = mysql.createConnection(dbConfig);

const userRoutes = require("./routes/users.js");
app.use("/api/users", userRoutes);

const { loadNuxt, build } = require("nuxt");
const isDev = process.env.NODE_ENV !== "production";
const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 3000;
async function start() {
  const nuxt = await loadNuxt(isDev ? "dev" : "start");
  app.use(nuxt.render);
  if (isDev) {
    build(nuxt);
  }
  app.listen(port, host);
}
start();
