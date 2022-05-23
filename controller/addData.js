const { user_game } = require("../models");

const addDataUser = (req, res) => {
  user_game
    .create({
      nama: req.body.nama,
      password: req.body.password,
      email: req.body.email,
    })
    .then(() => {
      res.redirect("/dashboard");
    })
    .catch((err) => {
      res.send(err);
    });
};

const addDataUserDisplay = (req, res) => {
  res.render("addData");
};

module.exports = {
  addDataUserDisplay,
  addDataUser,
};
