<template>
<div>
     <h3 class="clearfix"><span>新闻中心</span><router-link to="/news">更多>></router-link></h3>
     <div class="iabout-n"><img src="http://www.tianciganggou.com/img/inews.jpg"/><p>中国钢结构业架起“腾飞之环”...</p></div>
     <div class="news-list">
         <li><a href="#">榆林鑫天赐钢结构公司-涂装安全...<span>[2017-7-12]</span></a></li>
         <li><a href="#">中国钢结构业架起“腾飞之环”<span>[2017-8-22]</span></a></li>
         <li><a href="#">钢结构焊缝质量等级的选用有哪些？<span>[2017-6-21]</span></a></li>
         <li><a href="#">钢结构的防腐<span>[2017-6-20]</span></a></li>
         <li><a href="#">高层建筑的常见结构层次及特点<span>[2017-6-20]</span></a></li>
         <li><a href="#">钢结构主体验收特点有哪些？<span>[2017-6-18]</span></a></li>
     </div>

</div>
</template>
<script>
 export default{
     name:"inews",
     data(){
         return{
         }
     }
 }
</script>
<style scoped>

 .iabout-n{
     width:97%;
     margin:0 1.5% 0 1.5%;
     position: relative;
 }
 .iabout-n img{
     height:13em;
 }
 .iabout-n p{
     width:100%;
     height:2em;
     line-height: 2em;
     background-color:black;
     opacity: 0.65;
     position: relative;
     margin-top: -2em;
     color:#fff;
 }
 .news-list{
   padding: 0 5px;
 }
 .news-list li{
     height: 1.8em;
   padding: 5px 0;
   line-height: 1.8em;
      border-bottom: 1px dashed #666;
      }
 .news-list a{
   display: block;
   color:#333;
 }
.news-list a:hover{
     margin-left: 0.5em;
   color:#f44e05;
 }
 .news-list a>span{
   float:right;
   color:#c3c3c3;
 }
</style>
