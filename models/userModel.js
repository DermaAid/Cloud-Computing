class User {
    constructor(fullName, email, mobileNumber, password, dob) {
      this.fullName = fullName;
      this.email = email;
      this.mobileNumber = mobileNumber;
      this.password = password; // Password harus di-hash sebelum disimpan
      this.dob = dob;
      this.createdAt = new Date();
    }
  }
  
  module.exports = User;
  