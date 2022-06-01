# 2021-2022学年第2学期

# **实 验 报 告**

![zucc](img/zucc.png)

- 课程名称:跨平台脚本开发技术  

- 实验项目：期末大作业

- 专业班级：计算机1904

- 学生学号：31901108

- 学生姓名：黄吉祥

- 实验指导教师：郭鸣

## 实验内容

1. 项目分工表格

| 姓名   |   学号   |       班级 |                  任务 | 权重 |
| :----- | :------: | ---------: | --------------------: | ---: |
| 黄吉祥 | 31901108 | 计算机1904班 | 为抖音App前端传输数据，数据库设计及后端接口的编写 |  1.0 |
| 高政杰 | 31901226 | 软工1904班 | 为抖音App前端传输数据，后端接口调试及上传文件等复杂接口的编写 |  0.9 |

git提交记录

<img src="./img/2.png" alt="4" style="zoom:23%;" />

2. 项目自我评估表

| 讲义章节 | 项目                              | 分数 | 说明                                                         |
| -------- | :-------------------------------- | :--: | ------------------------------------------------------------ |
| 4        | 函数式编程                        |  4   | vue将各个阶段调用的函数作为对象属性输出，编写函数式组件调用，其中数据多使用JSON包返回 |
| 5        | 原型继承                          |  4   | 父组件与子组件的传值动态绑定，使用props传值                  |           |
| 7        | 模块,require规则                  |  4   | 在node.js后台中，模块化数据库层和接口层的文件，接口层调用数据库层，app.js调用接口层，使用require和import函数实现了各类库的调用 |
| 8/10     | 浏览器 DOM，浏览器事件处理        |  4   | v-if决定数据是否挂载到DOM，v-on指令监听DOM操作，在js中定义方法 |
| 11       | http xhr promise cookie           |  4   | 后端接口类型基本为get和post，通过req.query获取通过url传递的数据，前端使用axios异步调用接口 |
| 13       | REST.API                          |  4   | 接口实现restful风格（详见接口文档），使用res.send传输封装好的对象或者数组 |
| 其他     | 响应式设计(Desktop/Tablet/Mobile) |  3   | 项目只适配移动端，vue网页虚拟运行，但是对于不同机型的适配未做较大改变 |

3. 项目说明

   本项目由node.js后端和vue前端组成，后端使用express+sequelize框架连接本地mysql数据库，前端使用vue3+vant实现。

   整个项目主要由登录注册界面、个人资料显示和修改界面、评论区显示和更新界面。

   其中子页面包括

   1、短视频首页：

   mounted阶段使用axios调用接口获取评论区数据，并赋值给动态绑定的数据

```javascript
    onMounted(() => {
      axios.get("http://localhost:3000/api/user/comm1", {

      }).then(res => {

        state.comList = res.data

      })
      axios.get("http://localhost:3000/api/user/comm2", {

      }).then(res => {

        state.comList2 = res.data
        // console.log(state.comList)

      })
      
    })
```

   刚刚打开评论区时的数据显示

   <img src="./img/2.png" alt="4" style="zoom:23%;" /> 

   发表评论模块绑定接口实现个人评论发表功能，点击发表图标按钮@click调用接口回传输入框的评论内容至数据库，axios再次调用更新评论区数据。


```javascript
    const pub = () => {
      if (state.des0 === "") {
        console.log("不能发表空白评论！")
      } else {
        // state.comListShow=false
        axios.post("http://localhost:3000/api/user/comm2", {
          des: state.des0
        }).then(res => {
          console.log(res.data)
          axios.get("http://localhost:3000/api/user/comm2", {
          }).then(res => {
            state.comList2 = res.data
            console.log(state.comList)
          })
          //  state.comListShow=true
        })

      }
    }
```

   <img src=".\img\3.png" alt="3" style="zoom: 24%;"  >

   

   2、个人资料界面

   在mounted阶段axios调用接口获取个人资料并双向绑定渲染在前端页面中。

```javascript
    onMounted(()=>{

      axios.get("http://localhost:3000/api/user/info",{
        
      }).then(res=>{
        // console.log(res.data)
        state.infoList=res.data      
        
        state.nickname=state.infoList[0].name
        state.cardId=state.infoList[0].cardID
        state.des=state.infoList[0].des
        state.school=state.infoList[0].school
        if(store.state.imgIndex===0){
        state.url=require('../assets/img/head.jpg')
        }else{
          state.url=state.infoList[0].imgUrl
        }
      })
  })
```

   <img src=".\img\4.png" alt="12" style="zoom: 45%;" >

   3、个人资料修改界面

   首先在mounted阶段通过axios调用接口获取个人资料信息

```javascript
    onMounted(() => {
      axios.get("http://localhost:3000/api/user/info", {}).then((res) => {
        // console.log(res.data)
        state.infoList = res.data;
        console.log(state.infoList);
        state.nickname = state.infoList[0].name;
        state.cardId = state.infoList[0].cardID;
        state.des = state.infoList[0].des;
        state.school = state.infoList[0].school;

        state.url=state.infoList[0].imgUrl

        
      });
    });
```

  axios发送修改个人资料post请求，对数据库个人信息进行修改

```javascript
  axios.post("http://localhost:3000/api/user/info", {
            name: state.nickname,
            cardID: state.cardId,
            des: state.des,
            school: state.school,
            imgUrl:state.url,
          })
          .then((res) => {
            store.state.imgIndex=1
            console.log("修改成功！");
            router.push("/me");
          });
   ```
<img src=".\img\5.png" alt="12" style="zoom: 45%;" >
  头像修改功能：

  采用createObjectURL函数将获取到的文件路径转为url并通过调用接口传到数据库中，然后上传成功后返回修改界面再次调用个人信息获取接口，实现头像更新。
```javascript
  function doUpload() {
      let file = $('#file').get(0).files[0];
      console.log(file)
      //创建空的formData对象
      let formdata = new FormData();
      //  formdata.append的属性名 要和后端保持一致 `file`
      formdata.append('file', file);
      $.ajax({
          url: 'http://localhost:3000/api/user/uploadImage',
          type: 'POST',
          data: formdata,
          contentType: false,
          processData:false,
          success: function (data) {
              console.log(data)
              $('img').attr('src', data.data.url);
          }
      }
      )
  }
```
```javascript
  axios.post("http://localhost:3000/api/user/info", {
            name: state.nickname,
            cardID: state.cardId,
            des: state.des,
            school: state.school,
            imgUrl:state.url,
          })
          .then((res) => {
            
            console.log("修改成功！");
            router.push("/me");
          });
```
<img src=".\img\6.png" alt="12" style="zoom: 45%;" >
<img src=".\img\7.png" alt="12" style="zoom: 45%;" >
   4、注册界面

   注册功能的实现就是axios调用post请求将输入框的账号密码通过接口发送到后端数据库并保存起来，实现注册功能。
```JavaScript
   const res =()=>{
       if (state.username == ""){
         console.log("账号不能为空")
       }else if (state.password == ""){
         console.log("密码不能为空")
       }else{
        //  console.log(state)
         axios.post("http://localhost:3000/api/user",{
           username : state.username,
           password : state.password
         }).then(res=>{
           console.log(res.data)
           console.log("注册成功，请登录！！")
           router.push("/sign")
         })
       }
       
    }
```

   <img src=".\img\8.png" alt="13" style="zoom:23%;" /> 


   7、登录界面

   登录功能同样使用的是post请求调用，将输入框双向绑定读入到的数据通过接口发送到后端进行匹配验证，根据后端sql精准查询，若能查询到数据，则将数据传送回前台，前台根据是否有回传数据来判断是否登录成功。

```JavaScript
   axios
          .post("http://localhost:3000/api/user/login", {
            username: state.username,
            password: state.password,
          })
          .then((res) => {       
            // console.log(res.data);
            if(res.data.length===1){
              router.push("/me")
              console.log("登录成功！！");
            }else{
              console.log("账号或密码错误！！");
            }
          });
```
  后端验证规则：
```javascript
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
```
<img src=".\img\9.png" alt="13" style="zoom:23%;" /> 
4. 解决技术要点说明

   整个后端由controller、routes、config、models、app.js组成，项目结构如下

   <img src=".\img\1.png" alt="23" style="zoom:95%;" >

   1、config/db.js用于建立数据库连接

```javascript
   module.exports={
    HOST:"localhost",
    USER:"root",
    PASSWORD:"123456",
    DB:"tiktok",
    dialect:'mysql',}
  ```

   并将对象模块化，可在其它文件内调用

```javascript
  const sequelize = new Sequelize(
    db.DB,
    db.USER,
    db.PASSWORD,
    {
        host:db.HOST,
        dialect:db.dialect
    }
  )
  const dbdb={};
  dbdb.sequelize=sequelize;
  dbdb.Sequelize=Sequelize;
  dbdb.User=require('../models/user.js')(sequelize,Sequelize)
  dbdb.Information=require('../models/info.js')(sequelize,Sequelize)
  dbdb.Comment1=require('../models/Com_1.js')(sequelize,Sequelize)
  dbdb.Comment2=require('../models/Com_2.js')(sequelize,Sequelize)
  dbdb.Video=require('../models/video.js')(sequelize,Sequelize)
  module.exports=dbdb
```

   2、controller编写接口，调用数据库

   以个人信息获取和修改为例

```javascript
  exports.findAll=(req,res)=>{//获取个人信息
    Info.findAll().then((data)=>{
        res.send(data)
    })
    
  }
  exports.update=(req,res)=>{//修改个人信息
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
```

   req为接收到的传参，res为返回的数据

   3、models进行数据库建表

   以评论区表为例

```javascript
   module.exports=(sequelize,Sequelize)=>{
    const Comment1=sequelize.define("commment1",{
        name:{
            type:Sequelize.STRING
        },
        time:{
            type:Sequelize.STRING
        },
        des:{
            type:Sequelize.STRING
        },
        zan:{
            type:Sequelize.STRING
        },
        name1:{
            type:Sequelize.STRING
        },
        time1:{
            type:Sequelize.STRING
        },
        des1:{
            type:Sequelize.STRING
        },
        zan1:{
            type:Sequelize.STRING
        },
        more:{
            type:Sequelize.STRING
        }
    })
    return Comment1 
  }
```

   4、app.js配置跨域并启动后台

   引入接口文件

```javascript
   const express = require("express");
   const bodyParser = require("body-parser");
    const cors = require("cors");
    const app = express();
    var corsOptions = {
    origin: "http://localhost:8080"
  };
    app.use(cors(corsOptions));

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
    extended: true
    }));
    const db = require("./app/models");
    db.sequelize.sync()
    require("./app/routes/userRou")(app)

    app.listen(3000,()=>{
        console.log("项目运行成功：http://localhost:3000")
    })
```

   端口默认3000

   5、routes/userRou.js汇总路由接口并配置

```javascript
   module.exports = app =>{
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
    
  }
```

   6、接口文档

   本项目接口使用restful风格，具体如下：

   | 方法 | 接口                     | 参数                                 | 返回                                                         | 说明                 |
   | ---- | :----------------------- | ------------------------------------ | ------------------------------------------------------------ | -------------------- |
   | post  | /api/user/             | 传参: username, pwd                    | 成功返回200，注册成功，用户对象。失败返回400，注册失败。 | 用户注册   |
   | post  | /api/user/login           | 传参: username, pwd               | 失败返回400，密码或用户名错误。成功返回200，登录成功             | 用户登录             |
   | get | /api/user/info        |    |       | 获取个人信息        |
   | post  | /api/user/info          |          传参:  转换后的url                            |              对头像进行修改                             | 修改头像         |
   | post  | /api/user/info       |         传参：name，des，school                             | 对个人信息进行修改                                            | 修改个人信息         |
   | get  | /api/user/comm1     |                          | 获取评论区信息                                         | 获取带回复的评论区信息         |
   | get  | /api/user/comm2     |                          | 获取评论区信息                                         | 获取不带回复评论区信息         |
   | post  | /api/user/comm1 |        传参：des0                              | 发表输入框输入的评论                                         | 发表评论     |
   | post  | /api/user/uploadImage |        url传参：文件file                              | 修改个人资料的头像                                         | 修改头像     |


5. 心得体会（结合自己情况具体说明）

   - 大项目开发过程心得
     - 遇到哪些困难，经历哪里过程，有哪些收获
     
       1、node.js连接数据库无从下手，觉得过去繁琐

       解决：
      找到了Sequelize+express数据库框架，便于编写，代码变得十分精炼：
```javascript
          const db = require("../config/db.js");
            const Sequelize = require("sequelize");

          const sequelize = new Sequelize(
              db.DB,
              db.USER,
              db.PASSWORD,
              {
                  host:db.HOST,
                  dialect:db.dialect
              }
          )
          const dbdb={};
          dbdb.sequelize=sequelize;
          dbdb.Sequelize=Sequelize;
          dbdb.User=require('../models/user.js')(sequelize,Sequelize)
          dbdb.Information=require('../models/info.js')(sequelize,Sequelize)
          dbdb.Comment1=require('../models/Com_1.js')(sequelize,Sequelize)
          dbdb.Comment2=require('../models/Com_2.js')(sequelize,Sequelize)
          dbdb.Video=require('../models/video.js')(sequelize,Sequelize)
          module.exports=dbdb
```
     
      2、修改头像没思路

      解决：先将上传的文件放到后端文件夹里，采用函数将获取到的文件路径，转为url并通过调用接口传到数据库中。

```javascript
  function doUpload() {
      let file = $('#file').get(0).files[0];
      console.log(file)
      //创建空的formData对象
      let formdata = new FormData();
      //  formdata.append的属性名 要和后端保持一致 `file`
      formdata.append('file', file);
      $.ajax({
          url: 'http://localhost:3000/api/user/uploadImage',
          type: 'POST',
          data: formdata,
          contentType: false,
          processData:false,
          success: function (data) {
              console.log(data)
              $('img').attr('src', data.data.url);
          }
      }
      )
  }
```
```javascript
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
```
       
     - 本课程建议
     
       - 课程难度方面，进度方面，课程内容，授课方式等，给出你的意见
     
         课程难度适中，但是作为js基础差点的人只能吸收课程的知识点，但是一节课理论一节课实验的模式能帮助我活用知识，但是我觉得node.js讲授的再早一点就好了，在接触nodejs之前一直是用springboot写后端，写的过程非常繁琐且心累。对这门课的建议的话就是希望老师能讲一些动画效果等拓展的js，对于基础的内容讲的更深入一些，虽然node.js写接口其实不是特别主流，但用它写接口感觉特别得心应手，毕竟基础的东西到哪都能用。

