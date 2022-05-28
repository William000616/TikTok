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