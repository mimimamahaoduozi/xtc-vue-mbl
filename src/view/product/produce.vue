<template>
<div>
  <Nav></Nav>
  <Content></Content>
    <div class="pro">
      <mini :items="p_data" @click.native="change"></mini>
      <Place>产品中心</Place>
      <div class="cont_p">
        <ul class="ul_p">
          <li class="li_p" v-for="(item,index) in p_data[active].p_img" :key="index">
            <a href="#" class="a_p">
              <img :src="item.addr" class="img_pro">
            </a>
          </li>
        </ul>
      </div>
    </div>
  <Footer></Footer>
</div>
</template>

<script>
  import mini from "../../components/mininav.vue";
  import {
    mapActions,
    mapGetters
  } from "vuex";
  import imgLogo from "@/assets/img/logo.png";
  import Footer from "../../components/footer";
  import Nav from "../../components/Nav";
  import Content from "../../components/lb";
  import Place from "../../components/place";
    export default {
      name: "produce",
      data(){
        return{
          p_data:[
            {p_img:[
              {addr:'./static/img/zhanqiao.jpg',id:1},
              {addr:'./static/img/zhanqiao2.jpg',id:2},
              {addr:'./static/img/zhanqiao3.jpg',id:3},
              {addr:'./static/img/zhanqiao4.jpg',id:4},
              {addr:'./static/img/zhanqiao5.jpg',id:5},
              {addr:'./static/img/zhanqiao6.jpg',id:6},
              {addr:'./static/img/zhanqiao7.jpg',id:7},
              {addr:'./static/img/zhanqiao8.jpg',id:8},
            ],title:"栈桥"},
            {p_img:[
                {addr:'./static/img/cl1.jpg',id:1},
                {addr:'./static/img/cailiao2.jpg',id:2},
                {addr:'./static/img/cailiao3.jpg',id:3},
                {addr:'./static/img/cailiao4.jpg',id:4},
                {addr:'./static/img/cailiao5.jpg',id:5},
                {addr:'./static/img/cailiao6.jpg',id:6},
                {addr:'./static/img/cailiao7.jpg',id:7},
                {addr:'./static/img/cailiao8.jpg',id:8},
              ],title:"材料库"},
            {p_img:[
                {addr:'./static/img/bs1.jpg',id:1},
                {addr:'./static/img/bs2.jpg',id:2},
                {addr:'./static/img/dxck3.jpg',id:3},
                {addr:'./static/img/dxck4.jpg',id:4},
                {addr:'./static/img/dxck5.jpg',id:5},
                {addr:'./static/img/dxck6.jpg',id:6},
                {addr:'./static/img/dxck7.jpg',id:7},
                {addr:'./static/img/dxck8.jpg',id:8},
              ],title:"大型仓库"},
            {p_img:[
                {addr:'./static/img/ll1.jpg',id:1},
                {addr:'./static/img/ll2.jpg',id:2},
                {addr:'./static/img/ll3.jpg',id:3},
                {addr:'./static/img/ll4.jpg',id:4},
                {addr:'./static/img/lianlang5.jpg',id:5},
                {addr:'./static/img/lianlang6.jpg',id:6},
                {addr:'./static/img/lianlang7.jpg',id:7},
                {addr:'./static/img/lianlang8.jpg',id:8},
              ],title:"钢结构连廊"},
            {p_img:[
                {addr:'./static/img/jggc1.jpg',id:1},
                {addr:'./static/img/jggc2.jpg',id:2},
                {addr:'./static/img/jggc3.jpg',id:3},
                {addr:'./static/img/jggc4.jpg',id:4},
                {addr:'./static/img/jingguan5.jpg',id:5},
                {addr:'./static/img/jingguan6.jpg',id:6},
                {addr:'./static/img/jingguan7.jpg',id:7},
                {addr:'./static/img/jingguan8.jpg',id:8},
              ],title:"钢结构景观工程"},
            {p_img:[
                {addr:'./static/img/mk1.jpg',id:1},
                {addr:'./static/img/mk2.jpg',id:2},
                {addr:'./static/img/mk3.jpg',id:3},
                {addr:'./static/img/meikuang4.jpg',id:4},
                {addr:'./static/img/meikuang5.jpg',id:5},
                {addr:'./static/img/meikuang6.jpg',id:6},
                {addr:'./static/img/meikuang7.jpg',id:7},
                {addr:'./static/img/meikuang8.jpg',id:8},
              ],title:"煤矿综采设备中转库"},
          ],
          active:0
        }
      },
      computed: {
        getCont() {
          return this.$store.state.cont.cont;
        },
        ...mapGetters(["getList", "getListLength"])
      },
      methods: {
        change(e){
          // console.log(e.target.type);
          this.active=e.target.type
        }
      },
      components:{
        Content,
        Nav,
        Footer,
        mini,
        Place
      }
    }
</script>

<style scoped>
.pro{
  width:100%;
}
  .pro ul{
    list-style: none;
  }
  .pro ul li{
    float: left;
    width: 50%;
    text-align: center;
  }
  .pro ul li .img_pro{
    display: inline-block;
    margin-top: 10%;
    width:90%;
    height: 130px;
    border:solid 1px #fff;
    text-align: center;
  }
</style>
