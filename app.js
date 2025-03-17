const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  console.log("This Always runs");
  next();
});

app.use("/add-product", (req, res, next) => {
  console.log("2nd Middleware");
  res.send("<h1>The Add Product Page !</h1>");
});

app.use("/", (req, res, next) => {
  console.log("3rd Middleware");
  res.send("<h1>Hello From Express !</h1>");
});

app.listen(3000);
