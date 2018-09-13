<template>
  <div id="index">
    <Nav></Nav>
    <Content></Content>
    <mininav></mininav>
    <ipro></ipro>
    <iabout></iabout>
    <inews></inews>
    <news></news>
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
  import Footer from "../../components/footer"

  export default {
    name: "Index",
    components:{Nav,Content,mininav,ipro,iabout,inews,Footer},
    data() {
      return {

      };
    }
  };

</script>

<style scoped lang='scss'>

</style>





