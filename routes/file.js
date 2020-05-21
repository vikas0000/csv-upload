//importing models
const express = require("express");


//using route
const router = express.Router();


const fileController = require("../controller/file_controller");
//making route
router.get("/:file", fileController.View);

//export
module.exports = router;