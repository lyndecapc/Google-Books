const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3002;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


app.use(routes);


mongoose.connect(
  process.env.MONGODB_URI || "mongodb://lynde:2v96xcX35gR!DUk@ds263928.mlab.com:63928/heroku_vdgm0slv",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);


app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
