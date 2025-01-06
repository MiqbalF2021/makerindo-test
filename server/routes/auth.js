const express = require('express');
const db = require('../db');
const bcrypt = require('bcrypt');

const router = express.Router();

// Register
router.post('/register', async (req, res) => {
    const { username, password, confirmPassword } = req.body;
  
    // Validasi apakah username adalah email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(username)) {
      return res.status(400).json({ message: 'Username harus berupa email yang valid' });
    }
  
    // Cek apakah password dan konfirmasi password cocok
    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Password dan konfirmasi password tidak cocok' });
    }
  
    // Cek apakah email sudah terdaftar
    db.query('SELECT * FROM users WHERE username = ?', [username.toLowerCase()], async (err, results) => {
      if (err) return res.status(500).json({ message: 'Error checking user' });
      if (results.length > 0) return res.status(400).json({ message: 'Email sudah terdaftar' });
  
      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Simpan user ke database
      db.query(
        'INSERT INTO users (username, password) VALUES (?, ?)',
        [username.toLowerCase(), hashedPassword],
        (err) => {
          if (err) return res.status(500).json({ message: 'Error registering user' });
          res.status(201).json({ message: 'User registered successfully' });
        }
      );
    });
  });
  

// Login
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  db.query('SELECT * FROM users WHERE username = ?', [username], async (err, results) => {
    if (err) return res.status(500).json({ message: 'Error logging in' });
    if (results.length === 0) return res.status(404).json({ message: 'User not found' });

    const user = results[0];
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful' });
  });
});

module.exports = router;
