const { DataTypes } = require("sequelize");
const { sequelize } = require("../connection");

const userModel = sequelize.define("User", {
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(250),
    allowNull: false,
    unique: true,
  },
  age: {
    type: DataTypes.INTEGER,
  },
  password: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
});

module.exports = userModel;
