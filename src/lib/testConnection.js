import mysql from 'mysql2';


// Set up the connection to the database
const pool = mysql.createPool({
  host: '127.0.0.1',
  port: 3306,
  user: 'muncharoo',
  password: '1122',  // Replace with your actual password
  database: 'muncharoo_db',  // Use the muncharoo_db you created
});

// Test the connection
pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to the database:', err.message);
    return;
  }
  
  console.log('Successfully connected to the database!');
  
  // Close the connection
  connection.release();
});
