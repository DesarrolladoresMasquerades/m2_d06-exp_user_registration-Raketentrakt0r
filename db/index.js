const mongoose = require("mongoose");
require("dotenv/config")

//const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/express-basic-auth";

mongoose
  .connect(`mongodb+srv://${process.env.MG_USERNAME}:${process.env.MG_PWD}@cluster0.tz3zj.mongodb.net/users?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
