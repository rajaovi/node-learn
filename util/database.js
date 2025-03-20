const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "RajaOvireddy@4", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
