const db = require('../config/firebase');

// Get All News
exports.getAllNews = async (req, res) => {
  try {
    const newsSnapshot = await db.collection('news').get();
    const news = newsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    res.status(200).json(news);
  } catch (error) {
    console.error("Error fetching news:", error);
    res.status(500).json({ error: "Failed to fetch news." });
  }
};

// Get News by ID
exports.getNewsById = async (req, res) => {
  const { newsId } = req.params;

  try {
    const newsDoc = await db.collection('news').doc(newsId).get();
    if (!newsDoc.exists) {
      return res.status(404).json({ error: "News not found." });
    }

    res.status(200).json(newsDoc.data());
  } catch (error) {
    console.error("Error fetching news by ID:", error);
    res.status(500).json({ error: "Failed to fetch news by ID." });
  }
};
