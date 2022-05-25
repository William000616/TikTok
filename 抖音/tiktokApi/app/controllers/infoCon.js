
const db = require("../models");
const Info = db.Information
exports.findAll=(req,res)=>{
    Info.findAll().then((data)=>{
        res.send(data)
    })
    
}
exports.update=(req,res)=>{
    Info.update({
        name:req.body.name,
        cardID:req.body.cardID,
        des:req.body.des,
        school:req.body.school,
        imgUrl:req.body.imgUrl
    },{
    where:{
        id:"1"
    }
    }
 ).then((data)=>{
    res.send(data)
})
}
