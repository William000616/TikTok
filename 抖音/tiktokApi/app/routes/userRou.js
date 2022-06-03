module.exports = app =>{
    const upload = require('../multer/upload.js');
    const query = require('../config/db1.js')
    const user = require("../controllers/userCon.js");
    const info = require("../controllers/infoCon.js")
    const comm1 = require("../controllers/Com1Con.js")
    const comm2 = require("../controllers/Com2Con.js")
    const video = require("../controllers/VideoCon.js")
    var router = require("express").Router();
    router.post("/",user.create)//注册
    router.post("/login",user.findAll)//登录
    router.get("/info",info.findAll)//获取个人资料
    router.post("/info",info.update)//修改个人资料
    router.get("/comm1",comm1.findAll)//获取评论区1
    router.get("/comm2",comm2.findAll)//获取评论区2
    router.post("/comm2",comm2.create)//发表个人评论
    router.get("/video",video.findAll)//获取视频列表
    app.use('/api/user',router)
    // 上传图片接口
    router.post('/uploadImage', (req, res) => {
    upload(req, res).then(imgsrc => {
      // 上传成功 存储文件路径 到数据库中
      // swq sql需要修改一下，变成新增，这里测试暂用更新
      let sql = `UPDATE information SET imgUrl='${imgsrc}'WHERE id='1' `
      query(sql, (err, results) => {
        if (err) {
          formatErrorMessage(res, err)
        } else {
          res.send({
            "code": "ok",
            "message": "上传成功",
            'data': {
              url: imgsrc
            }
          })
        }
      })
    }).catch(err => {
      formatErrorMessage(res, err.error)
    })
    })
    //删除
    router.post('/delete',  (req, res)=>{
      var id=req.body.id
      var sql = `DELETE from commment2s WHERE id= '${id}'`;
      console.log(sql)
      query(sql, function (err, rows) {
          if (err) {
              console.log('err:', err.message);
          }else{
            res.send(rows)
          }
      });
    })
  // 格式化错误信息
  function formatErrorMessage(res, message,) {
    res.status(500).send({
      "code": "error",
      "message": message || '',
    });
  }
}