const db = require('../config/firebase');

// Get User Data by ID
exports.getUserData = async (req, res) => {
  const { userId } = req.params;

  try {
    const userDoc = await db.collection('users').doc(userId).get();
    if (!userDoc.exists) {
      return res.status(404).json({ error: "User not found." });
    }

    res.status(200).json({ user: userDoc.data() });
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ error: "Failed to fetch user data." });
  }
};

// Update User Data
exports.updateUserData = async (req, res) => {
  const { userId } = req.params;
  const updates = req.body;

  try {
    await db.collection('users').doc(userId).update(updates);
    res.status(200).json({ message: "User data updated successfully." });
  } catch (error) {
    console.error("Error updating user data:", error);
    res.status(500).json({ error: "Failed to update user data." });
  }
};
