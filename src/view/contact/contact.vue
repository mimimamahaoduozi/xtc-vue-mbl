<template>
  <div>
    <Nav></Nav>
    <Content></Content>
    <Place>联系我们</Place>
    <div class="connec">
      <div class="contents-2">
        <h2 class="con_1">联系我们</h2>
        <ul>
          <li>榆林市鑫天赐钢结构工程有限公司</li>
          <li>地址：榆林市榆横开发区苏庄则</li>
          <li>联系人：李经理  18729921752（钢结构部）  15291277120</li>
          <li>电话：0912-8144789  0912-7150118</li>
          <li>传真：0912-7150119（钢结构部）  0912-8144777（彩钢部）</li>
          <li>邮箱：401687384</li>
          <li>网址：http://www.tianciganggou.com</li>
        </ul>
      </div>
      <div class="amap-wrapper">
        <el-amap class="amap-box" :vid="'amap-vue'"></el-amap>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>

  import Nav from '../../components/Nav.vue';
  import Content from '../../components/lb.vue';
  import Footer from '../../components/Footer.vue';
  import Place from '../../components/place.vue';
  import {
    mapActions,
    mapGetters
  } from "vuex";
  import imgLogo from "@/assets/img/logo.png";
  export default {
    data() {
      return {
        msg:'vue-amaphello'
      };
    },
    components:{ Nav,Content,Place,Footer }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
  *{
    margin:0 auto;
  }
  .connec{
    width:100%;

  }
  .con_1{
    font-size: 20px;
    color: #ff0000;
    border-bottom: solid 2px #b8090c;
    padding-bottom: 5px;
  }
  .contents-2{
    padding-top:20px;
    width:98%;
  }
  .contents-2>ul{
    width:100%;
    list-style-type:none;
    padding-top:10px;
  }
  .contents-2>ul>li{
    width:100%;
    line-height:24px;
    color: #494949;
  }
  .amap-wrapper {
    padding-top:10px;
    width:100%;
    height:200px;
  }
</style>
