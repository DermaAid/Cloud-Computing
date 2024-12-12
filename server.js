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

// // Tambahkan route untuk endpoint '/'
// app.get('/', (req, res) => {
//     res.send('Testing Cloud Run, by CC Bangkit!');
// });

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/history', historyRoutes);
app.use('/api/scan', scanRoutes);
app.use('/api/news', newsRoutes);
app.use('/api/chatbot', chatbotRoutes);

app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the API!',
        endpoints: [
            '/api/auth',
            '/api/users',
            '/api/history',
            '/api/scan',
            '/api/news',
            '/api/chatbot'
        ]
    });
});

// Port diambil dari .env
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
