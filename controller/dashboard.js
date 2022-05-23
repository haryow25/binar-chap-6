const { user_game } = require("../models");

const showDashboard = (req, res) => {
  user_game.findAll().then((data) => {
    res.render("dashboard", { data });
  });
};

module.exports = {
  showDashboard,
};
