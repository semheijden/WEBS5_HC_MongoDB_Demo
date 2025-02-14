var mongoose = require("mongoose");
mongoose.Promise = require("q").Promise;

module.exports = function () {
  if (mongoose.connection.readyState == 0) {
    // Get these from config
    mongoose.connect(
      "mongodb+srv://sem:hwKXeJwdym58isJ@web5.todbq.mongodb.net/?retryWrites=true&w=majority&appName=web5"
    );
  }
  return mongoose;
};
