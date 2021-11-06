require('dotenv').config();
module.exports = {
  dialect: 'mysql',
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: '3306',
  options: {
    logging: true,
    define: {
      freezeTableName: true,
      timestamps: true,
      paranoid: true,
      underscored: true,
    },
  }
};
