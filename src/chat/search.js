const express = require('express');
const router = express.Router();
const { query } = require('../db'); // Assuming you have a database connection module

router.post('/search-users', async (req, res) => {
  const { searchTerm } = req.body;
  const outgoing_id = req.session.unique_id; // Assuming user session is stored and managed

  try {
    // Search for users based on the provided search term
    const sql = `
      SELECT *
      FROM users
      WHERE NOT unique_id = $1
        AND (fname LIKE $2 OR lname LIKE $2)
    `;
    const result = await query(sql, [outgoing_id, `%${searchTerm}%`]);

    if (result.rows.length > 0) {
      res.json(result.rows);
    } else {
      res.json({ message: 'No user found related to your search term' });
    }
  } catch (error) {
    console.error('Error searching for users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
