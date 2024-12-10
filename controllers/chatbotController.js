exports.getChatResponse = async (req, res) => {
    const { message } = req.body;
  
    try {
      // Mock response
      const response = `Bot: Saya tidak mengerti pesan "${message}" Anda, silakan ulangi.`;
      res.status(200).json({ response });
    } catch (error) {
      console.error("Error in chatbot response:", error);
      res.status(500).json({ error: "Failed to process chatbot message." });
    }
  };
  