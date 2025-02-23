// lib/db.js
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: '127.0.0.1',
  port: 3306,
  user: 'muncharoo',
  password: '1122',
  database: 'muncharoo_db',
});

export default pool;
