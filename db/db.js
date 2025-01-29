import pg from 'pg';
import 'dotenv/config';

const { Pool } = pg;

const pool = new Pool({
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
});

const db = async (query, params) => {
  try {
    const result = await pool.query(query, params);
    return result;
  } catch (error) {
    console.error('Error executing query:', error);
    throw error;
  }
};
// const table = await db(`CREATE DATABASE users`);
// const query = `CREATE TABLE messages  (
//     id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
//     message TEXT,
//     date TIMESTAMP)
//     `;
// const query = `DELETE FROM users WHERE id = 0`;
const message = `SELECT * FROM messages`;
// const query = `DROP TABLE users`;
const users = await db(`SELECT * FROM users`)
console.log(users.rows)
// const queries = await db(query);
const messages = await db(message);
const values = ['This is the text messages.', new Date()]
// const result = await db(
//   `INSERT INTO messages  (message, date) VALUES(
//             $1, $2
//             ) `,
//   values
// );
// console.log(messages.rows);
// console.log(queries.rows);
export default db;
 