//importing model
const express = require("express");

//using route
const router = express.Router();

//import controller
const homeController = require("../controller/home_controller");
const uploadController = require("../controller/upload_controller");

//making route

router.get("/", homeController.Index);
router.use("/upload", require("./upload"));
router.use("/delete", require("./delete"));

//export
module.exports = router;