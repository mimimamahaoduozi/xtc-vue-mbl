<template>
    <div id="index">
      <Nav></Nav>
      <Content></Content>
      <mininav></mininav>
      <news></news>
      <Footer></Footer>
    </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper"
import Nav from "../../components/Nav"
import Content from "../../components/lb"
import mininav from "../../components/mininav"
import news from "./news-content"
import Footer from "../../components/footer"

export default {
  name: "News",
  components:{Nav,Content,mininav,news,Footer},
  data() {
    return {

    };
  }
};

</script>

<style scoped lang='scss'>

</style>




     
