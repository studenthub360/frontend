const express = require('express');
const router = express.Router();
const { query } = require('../db'); 

router.post('/', async (req, res) => {
  const { incoming_id } = req.body;
  const outgoing_id = req.session.unique_id;

  try {
    const sql = `
      SELECT messages.*, users.img
      FROM messages
      LEFT JOIN users ON users.unique_id = messages.outgoing_msg_id
      WHERE (outgoing_msg_id = $1 AND incoming_msg_id = $2)
        OR (outgoing_msg_id = $2 AND incoming_msg_id = $1)
      ORDER BY msg_id`;
    const result = await query(sql, [outgoing_id, incoming_id]);

    const messages = result.rows.map(row => ({
      id: row.msg_id,
      sender: row.outgoing_msg_id === outgoing_id ? 'outgoing' : 'incoming',
      message: row.msg,
      image: row.img
    }));

    res.json(messages);
  } catch (error) {
    console.error('Error retrieving messages:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
