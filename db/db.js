import pg from 'pg';
import 'dotenv/config';
import bcrypt from 'bcrypt';
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
// const query = await db(`CREATE TABLE counter (
  // id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, visits INT,logins INT)`);
// const query = await db(`CREATE TABLE secret (
//     id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
//     secret TEXT)
//     `);
// const query = `DELETE FROM messages`;
// const message = await db(`DELETE FROM users WHERE id != 0`)
const users = await db(`SELECT * FROM messages`); 
console.log(users.rows)

// const users = await db(`SELECT messages.id AS message_id, message, date, counter.visits AS user_visits, 
//   counter.logins AS user_logins, firstname AS user_name FROM messages JOIN users ON users.id = messages.user_id JOIN counter ON users.id = counter.user_id ORDER BY messages.id ASC LIMIT 5 OFFSET 0`,); 
// console.log(users.rows) 
const counter = await db(`SELECT users.id , email, counter.logins AS user_logins, counter.visits AS user_visits FROM users LEFT JOIN counter ON users.id = counter.user_id`); 
// console.log(counter.rows)
// const message = await db(`ALTER TABLE messages ADD COLUMN title TEXT`)
// const secret = await bcrypt.hash('secret', 10);
// const valuess = [0, 0]
const values = [17];
console.log(values)
// `SELECT users.id , email, counter.logins AS user_logins, counter.visits AS user_visits FROM users JOIN counter ON users.id = counter.user_id WHERE users.id = 1`
const resultt = await db(
  `SELECT users.id , email, counter.logins AS user_logins, counter.visits AS user_visits, users.isAdmin AS isAdmin FROM users LEFT JOIN counter ON users.id = counter.user_id `
);
// const users = resultt.rows; 
// console.log(users)
// const message = await db(`INSERT INTO counter (visits, logins) VALUES ($1, $2)`, valuess)
// console.log(message.rows)
// const query = `DROP TABLE users`;
// const users = await db(`UPDATE messages SET user_id = 15 WHERE id != 2`)
// console.log(users.rows)
const userss = await db(
  `SELECT * FROM messages ORDER BY id ASC LIMIT 5 OFFSET 0` 
);
// console.log(userss.rows)
// const queries = await db(query);
// const messages = await db(message);
// const values = ['This is the text messages.', new Date()];
const valuess = [5, 4, 14];
// const result = await db(`INSERT INTO messages  (message, date) VALUES ($1, $2)`, values );
// const result = await db(`INSERT INTO counter  (visits, logins, user_id) VALUES ($1, $2, $3)`, values );
// console.log(messages.rows);
// console.log(queries.rows);
export default db;