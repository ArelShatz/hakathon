const { Pool } = require('pg');

export default new Pool({
  user: 'Postgres',
  password: 'postgres',
  host: '172.30.233.109',
  port: 5432,
  database: 'hakaton',
});