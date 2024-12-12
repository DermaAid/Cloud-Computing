const { predict } = require('../service/mlModelHandler');

exports.uploadImage = async (req, res) => {
  const { userId } = req.body;
  const imageBuffer = req.file.buffer;

  try {
    // Analisis gambar menggunakan model ML
    const result = await predict(imageBuffer);

    // Simpan hasil diagnosis ke database
    const diagnosis = {
      userId,
      imageUrl: 'http://example.com/image.jpg', 
      result: result[0], // Prediksi dari model
      createdAt: new Date(),
    };
    await db.collection('history').add(diagnosis);

    res.status(201).json({ message: "Image analyzed successfully.", diagnosis });
  } catch (error) {
    console.error("Error analyzing image:", error);
    res.status(500).json({ error: "Failed to analyze image." });
  }
};
