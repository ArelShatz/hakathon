const { Pool } = require('pg');

export default new Pool({
  user: 'your_username',
  password: 'your_password',
  host: 'localhost',
  port: 5432,
  database: 'your_database_name',
});