//importing models
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const FILES_PATH = path.join("/uploads/files");

//create the schema
const fileSchema = new mongoose.Schema({
  filePath:{
    type: String
  },
  originalName:{
    type: String
  } , 
  file:{
        type:String
    }
},{
    timestamps: true
});

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, "..", FILES_PATH));
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now());
    }
  });


  //static functions
  fileSchema.statics.uploadedFile = multer({ storage: storage }).single("file");
  fileSchema.statics.filePath = FILES_PATH;


//creating models
const Files = mongoose.model("Files", fileSchema);

//export
module.exports = Files;