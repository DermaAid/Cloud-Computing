const ChatbotMessage = require('../models/chatbotModel');

// Mock chatbot response logic
exports.getChatResponse = async (message) => {
  // Logika respons sederhana
  const responses = {
    "hello": "Hi there! How can I help you today?",
    "help": "Sure! Tell me your issue, and I'll try to assist.",
    "bye": "Goodbye! Have a nice day!"
  };

  const response = responses[message.toLowerCase()] || "Sorry, I don't understand your message.";
  const chatMessage = new ChatbotMessage(message, response);
  return chatMessage;
};
