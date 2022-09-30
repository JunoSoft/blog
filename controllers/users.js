const userModel = require("../models/users");

exports.user = (req, res) => {
  res.send("use is sents");
  res.send(userModel());
};
