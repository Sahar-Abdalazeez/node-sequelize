const { Sequelize } = require("sequelize");

// Option 3: Passing parameters separately (other dialects)
//node is the database n ame
const sequelize = new Sequelize("node", "root", "", {
  host: "localhost",
  dialect:
    "mysql" /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
});

//connecting to database
const connectDb = async () => {
  return await sequelize.sync({ alter: true });
};

module.exports = { sequelize, connectDb };
