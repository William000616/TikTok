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
| 4        | 函数式编程                        |  4   | vue将各个阶段调用的函数作为对象属性输出，编写函数式组件调用，其中数据多使用闭包返回 |
| 5        | 原型继承                          |  4   | 父组件与子组件的传值动态绑定，使用props传值                  |
| 6        | 正则表达式和错误处理              |  3   | 前端使用正则表达式匹配data，用于element表单的验证            |
| 7        | 模块,require规则                  |  4   | 在node.js后台中，模块化数据库层和接口层的文件，接口层调用数据库层，app.js调用接口层，使用require和import函数实现了各类库的调用 |
| 8/10     | 浏览器 DOM，浏览器事件处理        |  4   | v-if决定数据是否挂载到DOM，v-on指令监听DOM操作，在methods中定义方法 |
| 11       | http xhr promise cookie           |  4   | 后端接口类型基本为get，通过req.query获取通过url传递的数据，前端使用axios异步调用接口 |
| 12       | 表单文件                          |  3   | 注册登录使用提交表单的方式，rules正则表达式错误检测绑定在blur()，元素失去焦点时，表单动态绑定data进行存储 |
| 12       | 本地存储                          |  4   | 使用localStorage用于用户登录之后各个页面的数据获取与同步，监听在路由地址变化之后重新调用，保存登录状态 |
| 13       | REST.API                          |  4   | 接口实现restful风格（详见接口文档），使用res.send传输封装好的对象或者数组 |
| 其他     | 响应式设计(Desktop/Tablet/Mobile) |  3   | 项目只适配移动端，vue项目云打包实现手机端真机运行，但是对于不同机型的适配未做较大改变 |

3. 项目说明

   本项目由node.js后端和vue前端组成，后端使用express+sequelize框架连接本地mysql数据库，前端使用vue3+vant实现。

   整个项目主要由登录注册界面、个人资料显示和修改界面、评论区显示和更新界面。

   其中子页面包括

   1、首页：

   create阶段使用axios调用接口获取各个列表数据，并赋值给动态绑定的数据

   ```javascript
   created() {
   	this.axios.get("http://localhost:3000/article/list").then(
   		res => {
   			this.newsList = res.data.list;
   		});
   	this.axios.get("http://localhost:3000/product/list").then(
   		res => {
   			this.productList = res.data.list;
   		});
   	this.axios.get("http://localhost:3000/encyclopedia/list").then(
   		res => {
   			this.encyclopediasList = res.data.list;
   		});
   	this.axios.get("http://localhost:3000/encyclopedia/detaillist").then(
   		res => {
   			this.contentList = res.data.list;
   		});
   }
   ```

   中医百科初始时为所有列表信息

   <img src=".\img\4.png" alt="4" style="zoom:23%;" /> 

   搜索模块绑定接口实现模糊查询，搜索按钮@click调用接口回传列表绑定到中医百科模块

   列表项为自编组件，通过props传值

   ```javascript
   props: {
   	encyclopedias: Object,
   	contentList: Array
   },
   ```

   <img src=".\img\3.jpg" alt="3" style="zoom: 24%;"  align='left'>

   其他两个模块复用模块页，在下面详细解释

   2、百科详情页

   该中药的各类信息

   <img src=".\img\12.png" alt="12" style="zoom: 45%;" align="left">

   根据浏览器绑定的id(this.$route.params.id)传参Param调用接口获取百科内容

   3、资讯页

   调用接口获取列表，父子组件传值，展示所有资讯

   <img src=".\img\5.png" alt="5" style="zoom: 25%;" /> 

   4、资讯详情页

   ①该资讯的全部内容

   <img src=".\img\9.png" alt="9" style="zoom: 47%;" /> 

   ②该资讯的上一篇和下一篇跳转链接（没有就不显示该模块）

   绑定@click跳转路由，路由id传参重新获取列表

   <img src=".\img\10.png" alt="10" style="zoom:24%;" /> 

   ③其他推荐的资讯（固定显示3篇）

   获取的列表中id不为本页路由id的文章

   <img src=".\img\11.png" alt="11" style="zoom:24%;" /> 

   5、商城页

   调用接口获取商品列表，两个列表分别v-for两个组件，父子组件传值

   ①热卖的商品，固定两件

   <img src=".\img\6.png" alt="6" style="zoom: 25%;" /> 

   ②所有商品

   <img src=".\img\7.png" alt="7" style="zoom: 39%;" /> 

   购物车具有购买的功能，点击按钮调用接口存储

   <img src=".\img\25.jpg" alt="25" style="zoom:25%;" align="left">

   6、注册页

   <img src=".\img\13.png" alt="13" style="zoom:23%;" /> 

   点击重置清空本地v-model绑定的对象

   点击注册提交表单验证，验证失败不调用接口，验证成功调用接口

   验证规则

   ```javascript
   rules: {
   	id: [{
   		required: true,
   		message: '请输入用户名',
   		trigger: 'blur'
   	}],
   	pwd: [{
   		required: true,
   		message: '请输入密码',
   		trigger: 'blur'
   	}],
   	cfpwd: [{
   		required: true,
   		validator: validatePassword,
   		trigger: 'blur'
   	}]
   }
   ```

   添加失败返回状态为400，成功返回状态为200

   ```javascript
   //用户注册
   register = (req, res) => {
     let username = req.query.username;
     let pwd = req.query.pwd;
     var sql = "insert into user (username,pwd) values(?,?)";
     var sqlArr = [username, pwd];
     var callBack = (err, data) => {
       if (err) {
         console.log("用户名已存在");
         res.send({
           code: 400,
           msg: "用户名已存在",
         });
       } else {
         res.send({
           code: 200,
           msg: "注册成功",
           list: data,
         });
       }
     };
     dbConfig.sqlConnect(sql, sqlArr, callBack);
   };
   ```

   根据返回状态提示消息弹框

   ```javascript
   this.axios.get("http://localhost:3000/users/register?username="+this.Form.id+"&pwd="+this.Form.pwd).then(
   	res => {
   		if(res.data.code==200){
   			this.$message({
   				type: 'success',
   				message: res.data.msg
   			});
   		}
   		else{
   			this.$message({
   				type: 'error',
   				message: res.data.msg
   			});
   		}
   });
   ```

   <img src=".\img\16.jpg" alt="16" style="zoom:25%;" align="left">

   <img src=".\img\17.jpg" alt="17" style="zoom:25%;" align="left">

   7、登录页

   传参username直接返回整个用户对象，大体与注册相同，先判断该用户是否存在，再判断获取的对象和绑定的输入密码是否相同

   <img src="D:\计算机科学\study2021上\跨平台脚本开发技术\大作业\img\14.png" alt="14" style="zoom:40%;" /> 

   通过data.length判断是否查找到用户

   ```javascript
   //用户获取
   getByUsername = (req, res) => {
     let { username } = req.query;
     var sql = "select * from user where username=?";
     var sqlArr = [username];
     var callBack = (err, data) => {
       if (err) {
         console.log("寻找有误");
       } else {
         if (data.length != 0) {
           res.send({
             code: 200,
             msg: "已找到该用户",
             list: data,
           });
         } else {
           res.send({
             code: 400,
             msg: "该用户不存在",
             list: data,
           });
         }
       }
     };
     dbConfig.sqlConnect(sql, sqlArr, callBack);
   };
   ```

   若登录成功将对象转换成JSON格式存储到localstorage，并跳转路由

   ```javascript
   this.axios.get("http://localhost:3000/users/select?username=" + this.Form.id).then(
   	res => {
   		console.log(res.data);
   		if (res.data.code == 200) {
   			var user = res.data.list[0];
   			if (user.pwd == this.Form.pwd) {
   				localStorage.setItem("user", JSON.stringify(user));
   				this.$router.push({
   					path: '/home',
   				});
   				this.$message({
   					type: 'success',
   					message: '登录成功'
   				});
   			} else {
   				this.$message({
   					type: 'error',
   					message: '密码错误'
   				});
   			}
   		} else {
   			this.$message({
   				type: 'error',
   				message: '用户名错误'
   			});
   		}
   });
   ```

   主页监听路由，变换重新获取localstorage

   ```javascript
   watch: {
   	$route: function(newVal, oldVal) {
   		if (localStorage.getItem("user") != null) {
   			this.user = JSON.parse(localStorage.getItem("user"));
   			console.log(typeof(this.user));
   		}
   		document.documentElement.scrollTop = 0;
   		document.body.scrollTop = 0;
   	}
   }
   ```

   <img src=".\img\18.jpg" alt="18" style="zoom:25%;" align="left">

   <img src=".\img\19.jpg" alt="19" style="zoom:25%;" align="left">

   <img src=".\img\20.jpg" alt="20" style="zoom:25%;" align="left">

   

   8、个人页

   父页面获取localstorage传递给子页面

   <img src=".\img\8.png" alt="8" style="zoom: 45%;" /> 

   有修改头像的功能

   <img src=".\img\24.jpg" alt="24" style="zoom:25%;" align="left">

   商品详情页单独分了出来，有返回首页和返回商城页的功能

   创建时获取商品列表

   通过url绑定id判断是否显示获取的对象

   <img src=".\img\15.png" alt="15" style="zoom:40%;" /> 

   其他：

   topbar组件通过v-if判断应该显示哪个模块，注销按钮清空localstorage

   未登录时

   <img src=".\img\21.png" alt="21" style="zoom: 22%;" /> 

   登录之后

   <img src=".\img\22.png" alt="22" style="zoom:22%;" /> 

4. 解决技术要点说明

   整个后端由controller、routes、config、models、app.js组成，项目结构如下

   <img src=".\img\1.png" alt="23" style="zoom:95%;" align="left">

   1、util/dbconfig.js用于创建连接池，建立数据库连接

   ```javascript
   const mysql = require("mysql");
   
   //数据库配置
   const config = {
     host: "localhost",
     port: "3306",
     user: "root",
     password: "123456",
     database: "zyserver",
     multipleStatements: true
   };
   
   //连接数据库，使用mysql的连接池连接方式
   var pool = mysql.createPool(config);
   module.exports = {
     pool: pool,
     //连接池对象
     sqlConnect: function (sql, sqlArr, callBack) {
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

   并将对象模块化，可在其它文件内调用

   2、controller编写接口，调用数据库

   以获取百科为例

   ```javascript
   //获取百科
   getEncy = (req, res) => {
     let { id } = req.query;
     var sql = "select * from encyclopedia where id=?";
     var sqlArr = [id];
     var callBack = (err, data) => {
       if (err) {
         console.log("百科获取失败");
       } else {
         res.send({
           list: data,
         });
       }
     };
     dbConfig.sqlConnect(sql, sqlArr, callBack);
   };
   ```

   req为接收到的传参，res为返回的数据

   3、routes汇总接口

   以article为例

   ```javascript
   var express = require('express');
   var router = express.Router();
   var article = require('../controller/ArticleController')
   
   router.get('/list', article.getArticle);
   router.get('/detail', article.getArticleDetail);
   
   module.exports = router;
   ```

   4、app.js配置并启动后台

   引入接口文件

   ```javascript
   var indexRouter = require("./routes/index");
   var usersRouter = require("./routes/users");
   var articleRouter = require("./routes/article");
   var productRouter = require("./routes/product");
   var encyclopediaRouter = require("./routes/encyclopedia");
   var cartRouter = require("./routes/cart");
   ```



   将引入的接口配置到路径下，配置路由

   ```javascript
   app.use("/", indexRouter);
   app.use("/users", usersRouter);
   app.use("/article", articleRouter);
   app.use("/product", productRouter);
   app.use("/encyclopedia", encyclopediaRouter);
   app.use("/cart", cartRouter);
   
   server.listen(3000);
   ```

   端口默认3000

   5、上传头像关键代码

   接口实现

   ```javascript
   //图片上传
   let editUserImg = (req,res)=>{
     if(req.file.length === 0){
         res.render('error',{message:'上传文件不能为空！'});
     }else{
         let file = req.file;
         console.log(file);
         fs.renameSync('./public/uploads/'+file.filename,'./public/uploads/'+file.originalname);
         res.set({
             'content-type':'application/JSON; charset=utf-8'
         })
         let {username}=req.query;
         let imgUrl = 'http://192.168.43.178:3000/public/uploads/'+file.originalname;
         //let imgUrl = 'http://localhost:3000/public/uploads/'+file.originalname;
         let sql =`update user set headimg=? where username=?`;
         let sqlArr = [imgUrl,username];
         dbConfig.sqlConnect(sql,sqlArr,(err,data)=>{
             if(err){
                 console.log(err);
                 throw '出错了';
             }else{
                 if(data.affectedRows == 1){
                     res.send({
                         code:200,
                         msg:'修改成功',
                         url:imgUrl
                     })
                 }else{
                     res.send({
                         code:400,
                         msg:'修改失败'
                     })
                 }
             }
         })
     }
   }
   ```

   依赖引入

   ```javascript
   let fs = require('fs');
   let multer = require('multer');
   let upload = multer({dest:'./public/uploads/'}).single("file");
   ```

   静态资源配置

   ```javascript
   //静态资源
   app.use(express.static(path.resolve(__dirname, 'public')));
   app.use('/public', express.static('public'));
   ```

   5、接口文档

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

