// Example of using the SQLDatabase class

// Import the class
import { SQLDatabase } from './sql-database';

// Usage example
const db = new SQLDatabase('your_connection_string');

// Connect to the database
db.connect()
  .then(() => {
    console.log('Connected to the database.');
  })
  .catch(err => {
    console.error('Connection error:', err);
  });

// Example query execution
const query = 'SELECT * FROM users';
db.execute(query)
  .then(results => {
    console.log('Query results:', results);
  })
  .catch(err => {
    console.error('Query error:', err);
  });

// Close the connection
db.disconnect();
