const db = require("../models");
const User = db.User
const Sequelize = require('sequelize')
const Op=Sequelize.Op
exports.create=(req,res)=>{
    const user={
        username:req.body.username,
        password:req.body.password
    };
    User.create(user).then(data=>{
        res.send(data)
    }).catch(err=>{
        res.status(500).send({
            message:err.message || "注册失败"
        })
    })
}
exports.findAll=(req,res)=>{
    const user={
        username:req.body.username,
        password:req.body.password
    };
    User.findAll({
        where:{
            username:{
                [Op.eq]:user.username
            },
            password:{
                [Op.eq]:user.password
            },
        }
    }).then((data)=>{
        res.send(data)
    })
}