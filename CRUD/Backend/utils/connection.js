const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose
      .connect(process.env.MONGO_URL)
      .then(() => {
        console.log("🎯 :: Database Connect!");
      })
      .catch((err) => {
        console.log(`💀 :: Error on mongoDB URL : ${err.message}`);
      });
  } catch (err) {
    console.log(`💀 :: Error while mongoDB connect! : ${err.message}`);
  }
};

module.exports = { connectDB };
