const http = require("http");

const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("1st Middleware");
  next(); // Allow the request to continues to the next middleware in line
});

app.use((req, res, next) => {
  console.log("2nd Middleware");
});

const server = http.createServer(app);

server.listen(3000);
