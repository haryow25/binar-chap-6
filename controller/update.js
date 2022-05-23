const { user_game } = require("../models");

const updateDataUser = (req, res) => {
  user_game
    .update(
      {
        nama: req.body.nama,
        password: req.body.password,
        email: req.body.email,
      },
      { where: { id: req.params.id } }
    )
    .then(() => {
      //   res.render("");
      res.redirect("/dashboard");
    })
    .catch((err) => {
      res.send(err);
    });
};

const updateDataUserDisplay = (req, res) => {
  user_game.findOne({ where: { id: req.params.id } }).then((data) => {
    res.render("update", { data });
  });
};

module.exports = {
  updateDataUserDisplay,
  updateDataUser,
};
