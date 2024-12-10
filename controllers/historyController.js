const db = require('../config/firebase');

// Tambah Riwayat Diagnosis
exports.addHistory = async (req, res) => {
  const { userId, imageUrl, result } = req.body;

  try {
    await db.collection('history').add({
      userId,
      imageUrl,
      result,
      createdAt: new Date(),
    });

    res.status(201).json({ message: "History added successfully." });
  } catch (error) {
    res.status(500).json({ error: "Failed to add history." });
  }
};

// Dapatkan Riwayat Diagnosis
exports.getHistory = async (req, res) => {
  const { userId } = req.params;

  try {
    const historySnapshot = await db.collection('history').where('userId', '==', userId).get();
    const histories = historySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    res.status(200).json(histories);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch history." });
  }
};
