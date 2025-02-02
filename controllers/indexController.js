import db from '../db/db.js';

export const renderIndex = async (req, res) => {
  const page = parseInt(req.query.page, 10) || 1;
  const limit = 3;
  const offset = (page - 1) * limit;
  const values = [limit, offset];
  const validSortValues = ['ASC', 'DESC'];
  const sortBy = validSortValues.includes(req.query.sortby)
    ? req.query.sortby
    : 'ASC';
  const result = await db(
    `SELECT messages.id, message, date, firstname AS name FROM messages JOIN users ON users.id = messages.user_id ORDER BY id ${sortBy} LIMIT $1 OFFSET $2`,
    values
  );
  const Messages = await db(`SELECT COUNT(*) FROM messages`);
  const totalMessages = Messages.rows[0].count;
  const totalPages = Math.ceil(totalMessages / limit, 10);
  const messages = result.rows;
  console.log(messages);

  res.render('index', {
    messages,
    user: req.user,
    totalPages,
    currentPage: page,
    sortBy
  });
};
