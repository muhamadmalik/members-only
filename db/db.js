import pg from 'pg';
import 'dotenv/config';
import bcrypt from 'bcrypt'
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
// const query = await db(`CREATE TABLE messages  (
//     id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
//     message TEXT,
//     date TIMESTAMP,
//     user_id INT)
//     `);
// const query = await db(`CREATE TABLE secret (
//     id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
//     secret TEXT)
//     `);
// const query = `DELETE FROM messages`;
// const message = await db(`DELETE FROM secret WHERE id != 14`)
// const users = await db(`SELECT * FROM users`)

// const message = await db(`ALTER TABLE users ADD COLUMN isAdmin BOOLEAN`)
const secret = await bcrypt.hash('secret', 10)

console.log(secret)
// const values = [secret]
// const message = await db(`INSERT INTO secret (secret) VALUES ($1)`, values)
// console.log(message.rows) 
// const query = `DROP TABLE users`;
// const users = await db(`UPDATE users SET isadmin = false WHERE id != 12`) 
// console.log(users.rows)
const userss = await db(`SELECT * FROM users`) 
console.log(userss.rows)
// const queries = await db(query);
// const messages = await db(message);
// const values = ['This is the text messages.', new Date()]
// const result = await db(
//   `INSERT INTO messages  (message, date) VALUES(
//             $1, $2
//             ) `,
//   values
// );
// console.log(messages.rows);
// console.log(queries.rows);
export default db;
  