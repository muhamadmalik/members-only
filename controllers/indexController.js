import db from '../db/db.js';
export const renderIndex = async (req, res) => {
  const result = await db(`SELECT * FROM messages`);
  const messages = result.rows;
  console.log(req.user)
  res.render('index', { messages: messages, user: req.user });
};
