const express = require('express');
const app = express();
const pool = require('../db/mysql');

app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({ message: '🚀 Vercel Express is working!' });
});

app.get('/api/users', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM users');
    res.json({ users: rows });
  } catch (err) {
    res.status(500).json({ error: 'DB Error', details: err.message });
  }
});

module.exports = app; // <-- this is required for Vercel to work
