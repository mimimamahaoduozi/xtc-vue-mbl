<template>
<div>
     <div class="iabout-t"><h2>关于我们</h2></div>
     <div class="iabout-info">
         <!--<div class="info-f"><img src="../../assets/img/index-about.jpg" alt="" /></div>-->
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
   margin: 10px 0;
 }
 .iabout-info{
     width:100%;
     height:8em;
     background:  #b8090c;
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
      margin-left: 0.5em;
     color:#fff;
     line-height: 1.6em;
  }
</style>
