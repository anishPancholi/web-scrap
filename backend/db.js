const mongoose = require('mongoose');
require('dotenv').config();
const connectDB = async () => {
  const URL = process.env.mongoURL;
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;

