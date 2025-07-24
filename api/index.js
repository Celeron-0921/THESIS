const express = require('express');
const pool = require('../db/mysql');
const app = express();

app.use(express.json());

app.get('/hello', (req, res) => {
  res.json({ message: '🚀 Vercel Express is working!' });
});

app.get('/users', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM users');
    res.json({ users: rows });
  } catch (err) {
    res.status(500).json({ error: 'DB Error', details: err.message });
  }
});

module.exports = app;