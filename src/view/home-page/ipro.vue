


<template>
    <div id="app">
        <router-view></router-view>
         <div class="index_product">
      <h3><a href="#">产品展示 >></a></h3>
      <div class="imgs">
      <img src="http://www.tianciganggou.com/img/idisplay_1.jpg">
      <img src="http://www.tianciganggou.com/img/idisplay_2.jpg">
      <img src="http://www.tianciganggou.com/img/idisplay_3.jpg">
      <img src="http://www.tianciganggou.com/product/img/zhanqiao7.jpg">
       </div>
</div>
    </div>
</template>

<script>
export default {
  name: "Pro",
  data() {
    return {

    };
  }
};
</script>

<style scoped lang='scss'>
 h3{
   text-align:center;
   font-weight: bold;
   font-size:1.8em;
  line-height: 30px;
 }
 h3>a{
   color:#f00;
 }
.imgs{
  width:100%;
}
.imgs>img{
  float: left;
  margin-left:1.3%;
  border:2px solid #ccc;
  margin-bottom:1%;
  width:47%;
  border-radius: 2px;
  height: 100px;
}
</style>

