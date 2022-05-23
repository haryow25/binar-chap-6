const express = require("express");

const router = express.Router();

// import controller
const addDataController = require("./controller/addData");
const showDashboardController = require("./controller/dashboard");
const updateDataController = require("./controller/update");
const deleteDataController = require("./controller/delete");
const routeController = require("./controller/home");
const gameController = require("./controller/game");
const loginController = require("./controller/login");

router.get("/dashboard", showDashboardController.showDashboard);

//tambah data API
router.get("/tambahdata", addDataController.addDataUserDisplay);
router.post("/tambahdata", addDataController.addDataUser);

// update data API
router.get("/update/:id", updateDataController.updateDataUserDisplay);
router.post("/update/:id", updateDataController.updateDataUser);

// hapus data
router.get("/delete/:id", deleteDataController.deleteDataUser);

router.post("/login", loginController.loginPost);
router.get("/home", routeController.home);
router.get("/game", gameController.game);
router.get("/login", loginController.login);

module.exports = router;
