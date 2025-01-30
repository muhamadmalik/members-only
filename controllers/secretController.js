import db from '../db/db.js';
import bcrypt from 'bcrypt';
export const sendSecret = async (req, res) => {
  try {
    const result = await db(`SELECT * FROM secret`);
    const secrets = result.rows;
    const secret = secrets[0].secret;
    const match = await bcrypt.compare(req.body.secret, secret);
    if (!match) {
      return res.render('membership', {
        message: { text: 'wrong code buddy', type: 'error' },
      });
    }
    const values = [match, req.user.id];
    const user = await db(
      `UPDATE users SET isAdmin = $1 WHERE id = $2`,
      values
    );
    res.redirect('/');
  } catch (error) {
    console.error('Error adding the message', error);
  }
};
