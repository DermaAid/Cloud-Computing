class News {
    constructor(title, content, author, createdAt) {
      this.title = title;
      this.content = content;
      this.author = author;
      this.createdAt = createdAt || new Date();
    }
  }
  
  module.exports = News;
  