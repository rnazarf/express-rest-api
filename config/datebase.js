const { DB_USERNAME, DB_PASSWORD, DB_HOST, DB_DATABASE } = process.env;

module.exports = {
  "development": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DB_DATABASE,
    "host": DB_HOST,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "db_testing",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "db_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
};