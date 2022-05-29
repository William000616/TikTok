module.exports = app =>{
    const user = require("../controllers/userCon.js");
    const info = require("../controllers/infoCon.js")
    const comm1 = require("../controllers/Com1Con.js")
    const comm2 = require("../controllers/Com2Con.js")
    var router = require("express").Router();
    router.post("/",user.create)//注册
    router.post("/login",user.findAll)//登录
    router.get("/info",info.findAll)//获取个人资料
    router.post("/info",info.update)//修改个人资料
    router.get("/comm1",comm1.findAll)//获取评论区1
    router.get("/comm2",comm2.findAll)//获取评论区2
    router.post("/comm2",comm2.create)//发表个人评论
    app.use('/api/user',router)
    
}