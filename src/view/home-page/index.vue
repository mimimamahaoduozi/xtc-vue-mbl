<template>
    <div id="index">
      <Nav></Nav>
      <Content></Content>
      <mininav></mininav>
      <ipro></ipro>
      <iabout></iabout>
      <inews></inews>
      <Footer></Footer>
    </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper"
import Nav from "../../components/Nav"
import Content from "../../components/lb"
import mininav from "../../components/mininav"
import inews from "./i-news"
import ipro from "./ipro"
import iabout from "./i-about"
import Footer from "../../components/Footer"

export default {
  name: "Index",
  components:{Nav,Content,mininav,ipro,iabout,inews,Footer},
  data() {
    return {

    };
  }
};

</script>

<style>
  h3{
    text-align:center;
    font-size:1.2em!important;
    line-height: 30px!important;
    margin: 10px 5px!important;
    padding: 0 20px!important;
    background: url("http://www.tianciganggou.com/img/inav_bg.jpg");
  }
  h3>span{
    float: left;
    font-size: 15px;
    font-weight: bold;
  }
  h3>a{
    color:#f00;
    float: right;
    font-size: 15px;
    font-weight: bold;
  }
</style>





