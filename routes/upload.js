//importing models
const express = require("express");

//using route
const router = express.Router();

//importing controllers
const uploadController = require("../controller/upload_controller");

//making route
router.post("/", uploadController.Upload);
router.use("/file", require("./file"));

//export
module.exports = router;