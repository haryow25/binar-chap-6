const { user_game } = require("../models");

const deleteDataUser = (req, res) => {
  user_game
    .destroy({
      where: {
        id: req.params.id,
      },
    })
    .then(() => {
      res.redirect("/dashboard");
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = {
  deleteDataUser,
};
