<template>
<div>
     <h3 class="clearfix"><span>关于我们</span><router-link to="/about">更多>></router-link></h3>
     <div class="iabout-info cl">
         <div class="info-f"><img src="http://www.tianciganggou.com/img/c.jpg" alt="" /></div>
         <div class="info-r"><p>榆林市鑫天赐钢结构工程有限公司是一家专业从事钢结构设计、加工制作、施工与技术服务为一体的大型综合性企业。</p></div>
     </div>
</div>
</template>
<script>
// import aboutimg from "../../assets/img/index-about.jpg"
 export default{
     name:"iabout",
     data(){
         return{
         }
     }
 }
</script>
<style scoped>

 .iabout-info{
    width:97%;
    margin:0 1.5% 0 1.5%;
   background: #EBEBEB;
 }
 .iabout-info div{
   float:left;
   width:50%;
 }
 .info-f img{
     width:100%;
     height:9em;
  }
  .info-r p{
      margin-left: 0.2em;
     line-height: 1.5em;
    padding: 0 5px;
  }
</style>
