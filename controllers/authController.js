const db = require('../config/firebase');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Sign Up
exports.signup = async (req, res) => {
  const { fullName, email, mobileNumber, password, dob } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    await db.collection('users').doc(email).set({
      fullName,
      email,
      mobileNumber,
      password: hashedPassword,
      dob,
      createdAt: new Date(),
    });

    res.status(201).json({ message: "User registered successfully." });
  } catch (error) {
    res.status(500).json({ error: "Failed to register user." });
  }
};

// Login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userDoc = await db.collection('users').doc(email).get();
    if (!userDoc.exists) return res.status(404).json({ error: "User not found." });

    const user = userDoc.data();
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Incorrect password." });

    const token = jwt.sign({ email: user.email }, 'secretKey', { expiresIn: '1h' });
    res.status(200).json({ token, message: "Login successful." });
  } catch (error) {
    res.status(500).json({ error: "Login failed." });
  }
};

// Forgot Password
exports.forgotPassword = async (req, res) => {
  const { email, newPassword } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await db.collection('users').doc(email).update({ password: hashedPassword });

    res.status(200).json({ message: "Password updated successfully." });
  } catch (error) {
    res.status(500).json({ error: "Failed to update password." });
  }
};
