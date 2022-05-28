module.exports = app =>{
    const user = require("../controllers/userCon.js");
    const info = require("../controllers/infoCon.js")
    const comm1 = require("../controllers/Com1Con.js")
    const comm2 = require("../controllers/Com2Con.js")
    var router = require("express").Router();
    router.post("/",user.create)
    router.post("/login",user.findAll)
    router.get("/info",info.findAll)
    router.post("/info",info.update)
    router.get("/comm1",comm1.findAll)
    router.get("/comm2",comm2.findAll)
    router.post("/comm2",comm2.create)
    app.use('/api/user',router)
    
}