const db = require("../models");
const Comm2 = db.Comment2
exports.findAll=(req,res)=>{
    Comm2.findAll().then((data)=>{
        res.send(data)
    })
    
}
exports.create=(req,res)=>{
    const com2={
        name:"麦当劳不捞",
        des:req.body.des,
        time:"刚刚",
        zan:"0",
    };
    Comm2.create(com2).then(data=>{
        res.send(data)
    }).catch(err=>{
        res.status(500).send({
            message:err.message || "发表失败"
        })
    })
}