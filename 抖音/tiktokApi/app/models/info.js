module.exports=(sequelize,Sequelize)=>{
    const Information=sequelize.define("information",{
        name:{
            type:Sequelize.STRING
        },
        cardID:{
            type:Sequelize.STRING
        },
        des:{
            type:Sequelize.STRING
        },
        school:{
            type:Sequelize.STRING
        },
        imgUrl:{
            type:Sequelize.STRING
        }
    })
    return Information
}