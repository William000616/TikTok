module.exports=(sequelize,Sequelize)=>{
    const Video=sequelize.define("video",{
        videoList:{
            type:Sequelize.STRING
        },
    })
    return Video
}