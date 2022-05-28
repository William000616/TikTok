const db = require("../models");
const Comm1 = db.Comment1
exports.findAll=(req,res)=>{
    Comm1.findAll().then((data)=>{
        res.send(data)
    })
    
}