module.exports = app =>{
    const user = require("../controllers/userCon.js");
    const info = require("../controllers/infoCon.js")
    var router = require("express").Router();
    router.post("/",user.create)
    router.post("/login",user.findAll)
    router.get("/info",info.findAll)
    router.post("/info",info.update)
    app.use('/api/user',router)
    
}