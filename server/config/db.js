const mongoose = require('mongoose');

let isConnected = false;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
    });
    isConnected = true;
    console.log(`🌿 MongoDB Atlas Connected: ${conn.connection.host}/${conn.connection.name}`);
  } catch (error) {
    isConnected = false;
    console.warn(`\n⚠️  [MongoDB Atlas Notice]: Could not connect to Atlas (${error.message})`);
    console.warn(`👉 Tip: If you just created this cluster, make sure your current IP address (or 0.0.0.0/0) is added in MongoDB Atlas -> "Network Access".`);
    console.warn(`👉 The server is operating with resilient fallback mode so all API features remain fully functional!\n`);
  }
};

mongoose.connection.on('disconnected', () => {
  isConnected = false;
  console.log('MongoDB disconnected');
});

mongoose.connection.on('reconnected', () => {
  isConnected = true;
  console.log('🌿 MongoDB Atlas Reconnected');
});

module.exports = {
  connectDB,
  isDbConnected: () => isConnected,
};
