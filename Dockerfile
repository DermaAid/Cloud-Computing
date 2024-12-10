# Gunakan Node.js sebagai base image
FROM node:16-alpine

# Tetapkan direktori kerja di dalam container
WORKDIR /app

# Salin package.json dan package-lock.json ke dalam container
COPY package*.json ./

# Instal dependencies
RUN npm install

# Salin seluruh file proyek ke dalam container
COPY . .

# Salin variabel lingkungan dari file .env (untuk produksi)
ENV NODE_ENV production
ENV MODEL_URL="https://storage.googleapis.com/mlgc-dimaz/model.json"
ENV PROJECT_ID="submissionmlgc-dimazardawan"
# Tentukan port yang digunakan
EXPOSE 3000

# Perintah untuk menjalankan aplikasi
CMD ["node", "server.js"]
