import { isAdmin } from '../auth/authMiddleware.js';
import db from '../db/db.js';
export const sendMessage = async (req, res) => {
  try {
    const values = [req.body.message, new Date(), req.user.id];
    console.log(req.user.id)
    const result = await db(
      `INSERT INTO messages (message, date, user_id ) VALUES ($1, $2, $3)`,
      values
    );
    const messages = result.rows;
    console.log(messages);
    // res.status(201).json({
    //   success: true,
    //   message: 'Message sent successfully!',
    // //   newMessage: newMessage,
    // });

    //   res.render('index', { messages: messages, user: req.user });
    res.redirect('/');
  } catch (error) {
    console.error('Error adding the message', error);
  }
};
export const deleteMessage = async (req, res) => {
  try {
    const values = [req.params.id];
    const result = await db(
      `DELETE FROM messages WHERE id = $1`,
      values
    );
    res.redirect('/');
  } catch (error) {
    console.error('Error adding the message', error);
  }
};
