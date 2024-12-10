require('dotenv').config(); // Mengaktifkan variabel lingkungan dari file .env
const express = require('express');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const historyRoutes = require('./routes/historyRoutes');
const scanRoutes = require('./routes/scanRoutes');
const newsRoutes = require('./routes/newsRoutes');
const chatbotRoutes = require('./routes/chatbotRoutes');

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/history', historyRoutes);
app.use('/api/scan', scanRoutes);
app.use('/api/news', newsRoutes);
app.use('/api/chatbot', chatbotRoutes);

// Port diambil dari .env
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
