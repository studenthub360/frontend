const express = require('express');
const { connection } = require('./conn.js');

const router = express.Router();
router.get('/:outgoing_id', async (req, res) => {
  const { outgoing_id } = req.params;

  try {
    const query = `
      SELECT user.*, messages.msg
      FROM user
      LEFT JOIN (
        SELECT *
        FROM messages
        WHERE (incoming_msg_id = user.unique_id OR outgoing_msg_id = user.unique_id)
          AND (outgoing_msg_id = $1 OR incoming_msg_id = $1)
        ORDER BY msg_id DESC
        LIMIT 1
      ) AS messages ON user.unique_id = messages.outgoing_msg_id OR users.unique_id = messages.incoming_msg_id
    `;
    connection.query(query, [outgoing_id], async(error, results) => {
      if (error) {
        console.error('Error querying the database:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
  })

    const output = result.rows.map(row => ({
      id: row.unique_id,
      firstName: row.fname,
      lastName: row.lname,
      imageUrl: `assets/images/${row.img}`,
      message: row.msg ? (row.msg.length > 28 ? row.msg.substring(0, 28) + '...' : row.msg) : 'No message available',
      status: row.status === 'Offline now' ? 'offline' : 'online'
    }));

    res.json(output);
  } catch (error) {
    console.error('Error retrieving messages:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
