const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("1st Middleware");
  next(); // Allow the request to continues to the next middleware in line
});

app.use((req, res, next) => {
  console.log("2nd Middleware");
  res.send("<h1>Hello From Express !</h1>");
});

app.listen(3000);
