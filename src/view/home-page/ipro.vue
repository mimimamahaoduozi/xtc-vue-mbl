
<template>
    <div id="pro">
        <router-view></router-view>
         <div class="index_product">
      <h3 class="cl"><span>产品展示</span><router-link to="/product">更多>></router-link></h3>
      <div class="imgs cl">
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

<style scoped>

.index_product{
  width:100%;
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

