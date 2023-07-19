const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../db'); // Assuming you have the db.js file configured

// Endpoint: POST /api/register
router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Check if the email already exists in the database
        const checkQuery = 'SELECT * FROM users WHERE email = ?';
        const checkResults = await db.query(checkQuery, [email]);

        if (checkResults.length > 0) {
            return res.status(409).json({ error: 'Email already exists' });
        }

        // Hash the password using bcrypt before storing it in the database
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert the user data into the database with role 'normal' and status 'notActive'
        const insertQuery = 'INSERT INTO users (username, email, password, role, status) VALUES (?, ?, ?, ?, ?)';
        await db.query(insertQuery, [username, email, hashedPassword, 'normal', 'notActive']);

        res.status(201).json({ msg: 'User registered successfully' });
    } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).json({ error: 'Registration failed. Please try again later.' });
    }
});

// Endpoint: POST /api/login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the email exists in the database
        const userQuery = 'SELECT * FROM users WHERE email = ?';
        const userResults = await db.query(userQuery, [email]);

        if (userResults.length === 0) {
            return res.status(401).json({ error: 'Invalid credentials. Please try again.' });
        }

        // Compare the provided password with the hashed password in the database
        const user = userResults[0];
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid credentials. Please try again.' });
        }

        // Check if the user is active
        if (user.status !== 'active') {
            return res.status(403).json({ error: 'Forbidden. Your account is not active.' });
        }

        // Generate a JWT token with user information
        const token = jwt.sign(
            { userId: user.userId, username: user.username, email: user.email, role: user.role },
            'your_secret_key',
            { expiresIn: '1h' } // Token expiration time (optional)
        );

        res.status(200).json({
            msg: 'Login successful',
            user: {
                userId: user.userId,
                username: user.username,
                email: user.email,
                role: user.role,
            },
            accessToken: token,
        });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'Login failed. Please try again later.' });
    }
});

// Endpoint: PATCH /api/admin/users/:userId/status
router.put('/admin/users/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;
        const status = 'active';

        // Check if the user exists in the database
        const userQuery = 'SELECT * FROM users WHERE userId = ?';
        const userResults = await db.query(userQuery, [userId]);

        if (userResults.length === 0) {
            return res.status(404).json({ error: 'User not found.' });
        }

        // Update the user's status in the database
        const updateQuery = 'UPDATE users SET status = ? WHERE userId = ?';
        await db.query(updateQuery, [status, userId]);

        res.status(200).json({ msg: 'User status updated successfully' });
    } catch (error) {
        console.error('Error updating user status:', error);
        res.status(500).json({ error: 'Failed to update user status. Please try again later.' });
    }
});


module.exports = router;
