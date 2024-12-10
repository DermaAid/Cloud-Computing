class History {
    constructor(userId, imageUrl, result) {
      this.userId = userId;
      this.imageUrl = imageUrl;
      this.result = result;
      this.createdAt = new Date();
    }
  }
  
  module.exports = History;
  