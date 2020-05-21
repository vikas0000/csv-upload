//importing models
const File = require("../models/files");

const fs = require("fs");
const path = require("path");
//create the register route
module.exports.Index = async function(req, res){
    try{
        let files = await File.find({});
        res.render("home", {
            file: files
        });
    }catch(err){
        console.log(err);
    }
}



