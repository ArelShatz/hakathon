const { Pool } = require('pg');

export default new Pool({
  user: process.env.DBUser,
  password: process.env.DBPass,
  host: process.env.DBHost,
  port: process.env.DBPort,
  database: process.env.DBName,
});