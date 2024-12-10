const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');
require('dotenv').config(); // Menggunakan dotenv untuk membaca file .env

// Konfigurasi Firebase menggunakan variabel lingkungan dari .env
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Ekspor db untuk digunakan di bagian lain dari aplikasi
module.exports = db;
