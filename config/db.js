const mongoose = require('mongoose');

async function connectDB() {
    try {
      await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.26zhx4l.mongodb.net/${process.env.DB_NAME}`);
      console.log("💥 Mongo DB connected successfully 💥");      
    } catch (error) {
      console.error("DB connection failed 😞");
      console.error(error);
    }
}

module.exports = connectDB; // הפונקציה הזו זמינה לקבצים אחרים