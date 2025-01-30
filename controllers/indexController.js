import db from '../db/db.js';
export const renderIndex = async (req, res) => {
  const result = await db(
    `SELECT messages.id, message, date, firstname AS name FROM messages JOIN users ON users.id = messages.user_id`
  );
  const messages = result.rows;
  res.render('index', { messages: messages, user: req.user });
};
