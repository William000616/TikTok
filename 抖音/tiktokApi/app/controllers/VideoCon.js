const db = require("../models");
const Video = db.Video
exports.findAll=(req,res)=>{
    Video.findAll().then((data)=>{
        res.send(data)
    })
    
}