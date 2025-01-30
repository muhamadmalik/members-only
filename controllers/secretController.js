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
    
    res.redirect('/');

    // res.redirect('/');
  } catch (error) {
    console.error('Error adding the message', error);
  }
};
