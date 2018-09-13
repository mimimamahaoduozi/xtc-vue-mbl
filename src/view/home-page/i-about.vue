<template>
<div>
     <div class="iabout-t"><h3>关于我们 >></h3></div>
     <div class="iabout-info">
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
.iabout-t{
   font-size: 1.2em;
   color:#f00;
   text-align: center;
   margin-top: 10px;
   margin-bottom: 10px;
 }
 .iabout-info{
     width:100%;
     height:8em;
     background:  #b8090c;
      margin-bottom: 10px;
 }
 .iabout-info div{
   float:left;
   width:50%;
 }
 .info-f img{
     width:100%;
     height:8em;
  }
  .info-r p{
      margin-left: 0.2em;
     color:#fff;
     line-height: 1.5em;
  }
</style>