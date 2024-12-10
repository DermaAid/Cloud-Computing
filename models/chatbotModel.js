class ChatbotMessage {
    constructor(userMessage, botResponse, createdAt) {
      this.userMessage = userMessage;
      this.botResponse = botResponse;
      this.createdAt = createdAt || new Date();
    }
  }
  
  module.exports = ChatbotMessage;
  