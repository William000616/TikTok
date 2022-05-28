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
module.exports=dbdb