const express = require('express');
const router = express.Router();
const { query } = require('../db'); // Assuming you have a database connection module

router.post('/messages', async (req, res) => {
  const { incoming_id, message } = req.body;
  const outgoing_id = req.session.unique_id;

  try {
    // Insert the message into the database
    const sql = `
      INSERT INTO messages (incoming_msg_id, outgoing_msg_id, msg)
      VALUES ($1, $2, $3)
    `;
    await query(sql, [incoming_id, outgoing_id, message]);

    res.json({ success: true });
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
