const db = require('../config/firebase');
const News = require('../models/newsModel');

// Mendapatkan semua berita
exports.getAllNews = async () => {
  const newsSnapshot = await db.collection('news').get();
  return newsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// Mendapatkan berita berdasarkan ID
exports.getNewsById = async (newsId) => {
  const newsDoc = await db.collection('news').doc(newsId).get();
  if (!newsDoc.exists) {
    throw new Error("News not found");
  }
  return newsDoc.data();
};

// Menambahkan berita baru
exports.addNews = async (newsData) => {
  const news = new News(newsData.title, newsData.content, newsData.author);
  const newsRef = await db.collection('news').add(news);
  return { id: newsRef.id, ...news };
};
