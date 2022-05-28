module.exports=(sequelize,Sequelize)=>{
    const Comment2=sequelize.define("commment2",{
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
        }
    })
    return Comment2
}