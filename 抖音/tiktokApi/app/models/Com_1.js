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