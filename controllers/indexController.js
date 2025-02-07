import isAuthenticated from '../auth/authMiddleware.js';
import db from '../db/db.js';

const increaseVisits = async (req, res) => {
  try {
    const count = await db(`SELECT * FROM counter WHERE user_id = $1`, [
      req.user.id,
    ]);
    const visitCount = count.rows[0].visits;
    const newVisitCount = visitCount + 1;
    const cont = await db(
      `UPDATE counter SET visits = $1  WHERE user_id = $2`,
      [newVisitCount, req.user.id]
    );
  } catch (error) {
    console.error(error);
  }
};
export const renderIndex = async (req, res) => {
  try {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = 3;
    const offset = (page - 1) * limit;
    const values = [limit, offset];
    const validSortValues = ['ASC', 'DESC'];
    const sortBy = validSortValues.includes(req.query.sortby)
      ? req.query.sortby
      : 'ASC';
    const result = await db(
      `SELECT messages.id AS message_id, messages.title AS message_title, message, date, counter.visits AS user_visits, counter.logins AS user_logins, firstname AS name FROM messages JOIN users ON users.id = messages.user_id JOIN counter ON users.id = counter.user_id  ORDER BY users.id ${sortBy} LIMIT $1 OFFSET $2`,
      values
    );
    req.user ? increaseVisits(req, res) : '';
   
    const Messages = await db(`SELECT COUNT(*) FROM messages`);
    const totalMessages = Messages.rows[0].count;
    const totalPages = Math.ceil(totalMessages / limit, 10);
    const messages = result.rows;
    console.log(req.user);
    console.log(messages)
    res.render('index', {
      messages,
      user: req.user,
      totalPages,
      currentPage: page,
      sortBy,
    });
  } catch (error) {
    console.error(error);
  }
};
