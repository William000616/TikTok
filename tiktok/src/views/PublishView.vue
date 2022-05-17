<template>
    <div class="publish">
        <div class="pub-top">
            <div class="back" @click="$router.go(-1)">
            <span>X</span>
            </div>
            <div><span>选择音乐</span></div>
        </div>
        <div class="upload-box">
            <video ref="video" style="width:100%;height:575px;object-fit:fill;"></video>
            <div class="upload-bar">
                <div class="bar-item">
                    <div class="icon">
                        <img src="../assets/img/k1.png" style="width:100%;height:30px;" >
                    </div>
                    <p>道具</p>
                </div>
                <div class="bar-item" @click="getCamera">
                    <div class="pub-border">
                        <div class="pub"></div>
                    </div>
                </div>
                <div class="bar-item">
                    <div class="icon">
                        <img src="../assets/img/k2.png" style="width:100%;height:30px;" >
                    </div>
                    <p>上传</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { reactive, toRefs } from 'vue'
export default {
//     setup() {
//     const state = reactive({
        
//     });
//     const getCamera=()=>{
//         navigator.mediaDevices.getUserMedia({
//                 video:true
//             }).then(success=>{
//                 this.$refs['video'].srcObject=success
//                 this.$refs['video'].play()
//             }).catch(err=>{
//                 console.log(err)
//             })
//     }
//     return {
//       ...toRefs(state),
//       getCamera
//     };
//   },
    methods:{
        getCamera(){
            navigator.mediaDevices.getUserMedia({
                video:true
            }).then(success=>{
                this.$refs['video'].srcObject=success
                this.$refs['video'].play()
            }).catch(err=>{
                console.log(err)
            })
        }
    }
}
</script>
<style scoped>
 .publish{
     height: 640px;
     background-color: #ccc;
     /* color: #fff; */
 }
 .pub-top{
     height: 64px;
     line-height: 44px;
     display: flex;
     justify-content: center;
     color: #fff;
     background-color: black;
    font-size: 20px;
     position: relative;
     align-items: center;
 }
 .back{
     position: absolute;
     left: 10px;
 }
 .back span{
     font-size: 28px;
 }
 .upload-box{
     /* background-color:black; */
     height: -webkit-fill-available;
 }
 .upload-box .upload-bar{
     position: fixed;
     bottom: 0;
     display: flex;
     height: 100px;
     justify-content: space-between;
     width: 100%;
     padding: 0 50px;
     box-sizing: border-box;
         margin-bottom: 25px;
 }
 .upload-box .upload-bar .icon{
     width: 30px;
     height: 30px;
     border-radius: 5px;
     border: 2px red solid;
     margin-bottom: 5px;
 }
 .pub-border{
     display: flex;
     align-items: center;
     justify-content: center;
     height: 50px;
     width: 50px;
     border-radius: 50%;
     border: 1px #ef2c55 solid;
     box-shadow: -5px 0 5px #ef2c55,5px 0 5px #ef2c55, 0 -5px  5px #ef2c55,0 5px 5px #ef2c55;
 }
 .pub{
     height: 45px;
     width: 45px;
     border-radius: 50%;
     background-color: #ef2c55;
 }
</style>