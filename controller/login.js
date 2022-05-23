const user = require("../db/data.json");

const login = (req, res) => {
  res.render("../views/login/login");
};

const loginPost = (req, res) => {
  const { email, password } = req.body;
  const userFound = user.find((user) => user.email === email);
  if (userFound) {
    if (userFound.password === password) {
      res.redirect("/dashboard");
    } else {
      res.render("../views/login/login", {
        error: "Password is incorrect",
      });
    }
  } else {
    res.render("../views/login/login", {
      error: "Email is incorrect",
    });
  }
};

module.exports = { login, loginPost };
