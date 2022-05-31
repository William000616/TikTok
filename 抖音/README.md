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
| 黄吉祥 | 31901108 | 计算机1904 | 为抖音App前端传输数据 |  1.0 |

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

   <img src=".\img\4.png" alt="4" style="zoom:23%;" /> 

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

   <img src=".\img\3.jpg" alt="3" style="zoom: 24%;"  align='left'>

   

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

   <img src=".\img\12.png" alt="12" style="zoom: 45%;" align="left">

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
        if(store.state.imgIndex===0){
        state.url=require('../assets/img/head.jpg')
        }else{
          state.url=state.infoList[0].imgUrl
        }
        
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

  头像修改功能：

  采用createObjectURL函数将获取到的文件路径转为url并通过调用接口传到数据库中，然后上传成功后返回修改界面再次调用个人信息获取接口，实现头像更新。
```javascript
  const change = () => {
      state.file = document.getElementById("file").files[0];
      state.url = window.URL.createObjectURL(state.file);
      console.log(state.url);
      console.log("头像修改成功！");
    };
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
            store.state.imgIndex=1
            console.log("修改成功！");
            router.push("/me");
          });
   ```
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

   <img src=".\img\13.png" alt="13" style="zoom:23%;" /> 


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

4. 解决技术要点说明

   整个后端由controller、routes、config、models、app.js组成，项目结构如下

   <img src=".\img\1.png" alt="23" style="zoom:95%;" align="left">

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
   | GET  | /user/select             | url传参: username                    | 成功返回200，已找到该用户，用户对象。失败返回400，该用户不存在。 | 通过用户名查找用户   |
   | GET  | /user/register           | url传参: username, pwd               | 失败返回400，用户名已存在。成功返回200，注册成功             | 注册用户             |
   | POST | /user/editUserImg        | url传参： username；body传参：file； | 成功返回200，修改成功，图片url。失败返回400，修改失败。      | 修改用户头像         |
   | GET  | /product/list            |                                      | 返回所有商品列表                                             | 获取商品列表         |
   | GET  | /encyclopedia/list       |                                      | 返回所有百科列表                                             | 获取百科列表         |
   | GET  | /encyclopedia/select     | url传参:  id                         | 返回查找到的百科对象                                         | 获取百科对象         |
   | GET  | /encyclopedia/detail     | url传参:  id                         | 返回该百科的详细内容                                         | 获取百科内容         |
   | GET  | /encyclopedia/detailList |                                      | 返回所有详细内容列表                                         | 获取列表中的摘要     |
   | GET  | /encyclopedia/search     | url传参:  name                       | 返回模糊查询的结果列表                                       | 获取搜索结果         |
   | GET  | /cart/select             | url传参: productid, cartid           | 失败返回400，该商品不存在，成功返回200，已找到商品项，该商品对象 | 添加购物车的组成部分 |
   | GET  | /cart/getcartid          | url传参: username                    | 失败返回400，无此购物车，成功返回200，已找到该购物车，该购物车id | 添加购物车的组成部分 |
   | GET  | /cart/insert             | url传参: productid, cartid           | 失败返回400，该商品已存在，成功返回200，添加成功             | 添加购物车的组成部分 |
   | GET  | /cart/add                | url传参: productid, cartid           | 失败返回400，该商品不存在，成功返回200，添加成功             | 添加购物车的组成部分 |
   | GET  | /article/list            |                                      | 获取所有文章列表                                             | 获取所有文章列表     |
   | GET  | /article/detail          | url传参: id                          | 获取该文章的详细内容                                         | 文章详情页           |

5. 心得体会（结合自己情况具体说明）

   - 大项目开发过程心得
     - 遇到哪些困难，经历哪里过程，有哪些收获
     
       1、后端数据中的图片不显示
     
       只能绑定静态图片资源，用require将其路径换成static
     
       解决：
     
       ```javascript
       getpath(img) {
       	return require('@/imgs/' + img);
       }
       ```
     
       通过express配置静态资源访问localhost来访问图片
     
       解决：
     
       ```javascript
       //静态资源
       app.use(express.static(path.resolve(__dirname, 'public')));
       app.use('/public', express.static('public'));
       ```
       
       2、一个接口想要使用多条数据库语句
       
       为了安全起见，默认情况下是不允许执行多条查询语句的。要使用多条查询语句的功能，就需要在创建数据库连接的时候打开这一功能`multipleStatements: true`
       
       解决：
       
       ```javascript
       const config = {
         host: "localhost",
         port: "3306",
         user: "root",
         password: "123456",
         database: "zyserver",
         multipleStatements: true
       };
       ```
       
       3、连接超过数量限制
       
       之前把createpool放在sqlConnect函数里了，所以不停创建连接池，连接池上限为150，超过会报错，需重新启动
       
       解决：
       
       ```javascript
       //连接数据库，使用mysql的连接池连接方式
       var pool = mysql.createPool(config);
       module.exports = {
         pool: pool,
         //连接池对象
         sqlConnect: function (sql, sqlArr, callBack) {
           //var pool = mysql.createPool(config);
           pool.getConnection((err, conn) => {
             if (err) {
               console.log("连接失败");
               return;
             }
             //事件驱动回调
             conn.query(sql, sqlArr, callBack);
             //释放连接
             conn.release();
           });
         },
       };
       ```
       
       4、想在一个接口select数据库，然后把select到的数据加传参进行insert
       
       会导致有多个回调，未解决，把所有接口分开写了在前端解决
       
       ```javascript
       add(id) {
       	if (this.user != null) {
       		this.axios.get("http://localhost:3000/cart/getcartid?username=" + this.user.username).then(
       	res => {
       	if (res.data.code == 200) {
       		var cartid = res.data.list[0].id;
       		this.axios.get("http://localhost:3000/cart/select?productid=" + id + "&cartid=" +cartid).then(
       			res => {
       				if (res.data.code == 200) {
       					//add
       					this.axios.get("http://localhost:3000/cart/add?productid=" + id + "&cartid=" + cartid).then(
       						res => {
       							if (res.data.code == 200) {
       								//add
       								this.$message({
       									type: 'success',
       									message: '添加成功'
       								});
       							} else {
       								this.$message({
       								type: 'error',
       								message: '添加失败'
       							});
       						}
       					})
       				} else {
       					//insert
       					this.axios.get("http://localhost:3000/cart/insert?productid=" + id +"&cartid=" + cartid).then(
       						res => {
       							if (res.data.code == 200) {
       								//add
       								this.$message({
       									type: 'success',
       									message: '添加成功'
       								});
       							} else {
       								this.$message({
       									type: 'error',
       									message: '添加失败'
       								});
       							}
       						})
       					}
       				})
       			} else {
       				this.$message({
       					type: 'error',
       					message: '您还未登录'
       				});
       			}
       		})
       	} else {
       		this.$message({
       			type: 'error',
       			message: '您还未登录'
       		});
       	}
       }
       ```

       ```
       
     - 本课程建议
     
       - 课程难度方面，进度方面，课程内容，授课方式等，给出你的意见
     
         课程难度适中，但是作为js基础差点的人只能吸收课程的知识点，但是一节课理论一节课实验的模式能帮助我活用知识，但是我觉得node.js讲授的再早一点就好了，在接触nodejs之前一直是用springboot写后端，写的过程非常繁琐且心累。对这门课的建议的话就是希望老师能讲一些动画效果等拓展的js，对于基础的内容讲的更深入一些，虽然node.js写接口其实不是特别主流，但用它写接口感觉特别得心应手，果然基础的东西到哪都能用。

