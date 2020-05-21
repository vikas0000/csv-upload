//importing models
const express = require("express");


//using route
const router = express.Router();
const deleteController = require("../controller/delete_controller");

//making route
router.get("/:file", deleteController.delete);

//export
module.exports = router;