<template>
<div>
    <!--小标题点击切换不同新闻主题  后台调取更换-->
    <!--当前页面公共组件-->
    <!--注意！！！  问题 新闻时间顺序是否需要调整？-->
     <div class="news-list">
         <li><a href="#">钢结构<span>[2018-1-7]</span></a></li>
         <li><a href="#">轻钢结构和重钢结构的质的区别<span>[2017-12-19]</span></a></li>
         <li><a href="#">钢结构公司在管理方面的细节和着重点<span>[2017-11-10]</span></a></li>
         <li><a href="#">钢管结构在建筑中的应用<span>[2017-10-16]</span></a></li>
         <li><a href="#">经济新常态下钢结构行业的转型和发展<span>[2017-10-3]</span></a></li>
         <li><a href="#">装配式钢结构住宅优势及难点<span>[2017-10-1]</span></a></li>
         <li><a href="#">组合梁桥的施工<span>[2017-7-3]</span></a></li>
         <li><a href="#">国外钢结构技术的发展和系统的建立<span>[2017-6-21]</span></a></li>
         <li><a href="#">重型钢结构屋盖整体提升施工技术<span>[2017-6-20]</span></a></li>
         <li><a href="#">建筑施工对焊机安全操作规程<span>[2017-6-21]</span></a></li>
         <li><a href="#">我国钢结构建筑的重要性<span>[2017-6-20]</span></a></li>
         <li><a href="#">好钢结构建筑用钢量衡量标准<span>[2017-6-18]</span></a></li>
          <li><a href="#">榆林鑫天赐钢结构公司-涂装安全注意事项<span>[2017-7-12]</span></a></li>
         <li><a href="#">网架结构<span>[2017-4-7]</span></a></li>
         <li><a href="#">榆林鑫天赐钢结构公司焊接操作工艺流程<span>[2016-6-19]</span></a></li>
         <li><a href="#">企业是我家-榆林鑫天赐钢结构工程有限公司<span>[2016-5-3]</span></a></li>
     </div>
     
</div>
</template>
<script>
 export default{
     name:"news",
     data(){
         return{
         }
     }
 }
</script>
<style scoped>
 .news-list li{  
     
     font-size:0.8em;
     height: 4em; 
     line-height: 4em;
      border-bottom: 1px solid #ddd;
      }
 .news-list a{
     margin-left: 0.5em;
   color:#333;
 }
.news-list a:hover{
     margin-left: 0.5em;
   color:#f44e05;
 }
 .news-list a>span{
   
   float:right;
   margin-right: 1%;
   color:#c3c3c3;
 }
</style>