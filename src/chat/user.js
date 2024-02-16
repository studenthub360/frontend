const express = require('express');
const router = express.Router();
const { query } = require('../db'); // Assuming you have a database connection module

router.get('/', async (req, res) => {
  const outgoing_id = req.session.unique_id; // Assuming user session is stored and managed

  try {
    // Retrieve users excluding the current user
    const sql = `
      SELECT *
      FROM users
      WHERE NOT unique_id = $1
      ORDER BY user_id DESC
    `;
    const result = await query(sql, [outgoing_id]);

    if (result.rows.length === 0) {
      res.json({ message: 'No users are available to chat' });
    } else {
      res.json(result.rows);
    }
  } catch (error) {
    console.error('Error retrieving users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
