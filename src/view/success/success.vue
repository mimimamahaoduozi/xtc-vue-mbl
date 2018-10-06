<template>
   <div class="hello">
       <Nav></Nav>
       <Content></Content>
       <place>成功案例</place>
        <mini :items="lists" @click.native="change"></mini>
        <div class="text_c">

             <ul class="ul1">
                <li class="li1" v-for="(item,index) in lists[active].list" :key="index">
                    <!--<ul>
                        <li v-for="item in list" :key="item.id">-->
                            <a href="#" class="a1"><img :src="item.addr" class="imgb"></a>
                    <a href="#" class="a2">{{item.title}}</a>
                        <!--</li>
                    </ul>-->

                </li>
            </ul>
            <!--<p v-for="(item,index) in getList" :key="index">{{ item.a }}</p>
            <p>数量：{{ getListLength }}</p>-->
        </div>
        <Footer style="clear:both"></Footer>
    </div>

</template>

<script>
import mini from "../../components/mininav.vue";
import Content from "../../components/lb.vue";
import Nav from "../../components/Nav.vue";
import Footer from "../../components/footer.vue";
import place from "../../components/place.vue";
 import {
        mapActions,
        mapGetters
    } from "vuex";
    import imgLogo from "@/assets/img/logo.png";

    export default {
        name: "HelloWorld",
        data() {
            return {
                msg: "Welcome to Your Vue.js App",
                lists:[{
                list:[
                    {addr:'./static/success/qg1.jpg',title:"双破彩钢房",id:1},
                    {addr:"./static/success/qg2.jpg",title:"双破彩钢房",id:2},
                    {addr:"./static/success/qg3.jpg",title:"轻钢单层组合房",id:3},
                    {addr:"./static/success/qg4.jpg",title:"三层轻钢组合房",id:4},
                    {addr:"./static/success/qg5.jpg",title:"三层轻钢组合房",id:5},
                    {addr:"./static/success/qg6.jpg",title:"轻钢单层组合房",id:6},
                    {addr:"./static/success/qg7.jpg",title:"三层轻钢组合房",id:7},
                    {addr:"./static/success/qg8.jpg",title:"轻钢单层组合房",id:8},
                    {addr:"./static/success/qg9.jpg",title:"轻钢单层组合房",id:9},
                    {addr:"./static/success/qg10.jpg",title:"二层轻钢组合房",id:10},
                    {addr:"./static/success/qg11.jpg",title:"二层轻钢组合房",id:11},
                 ],title:"轻钢组合房"},
                 {list:[
                    {addr:'./static/success/qg1.jpg',title:"双破彩钢房",id:1},
                    {addr:"./static/success/qg2.jpg",title:"双破彩钢房",id:2},
                    {addr:"./static/success/qg3.jpg",title:"单坡彩钢房",id:3},
                    {addr:"./static/success/qg4.jpg",title:"单坡彩钢房",id:4},
                    {addr:"./static/success/qg5.jpg",title:"三层轻钢组合房",id:5},
                    {addr:"./static/success/qg6.jpg",title:"轻钢单层组合房",id:6},
                    {addr:"./static/success/qg7.jpg",title:"三层轻钢组合房",id:7},
                    {addr:"./static/success/qg8.jpg",title:"轻钢单层组合房",id:8},
                    {addr:"./static/success/qg9.jpg",title:"轻钢单层组合房",id:9},
                    {addr:"./static/success/qg10.jpg",title:"单坡彩钢房",id:10},
                 ],title:"彩钢活动房"},
                {list:[
                    {addr:'./static/success/picture_1.jpg',title:"移动售货亭",id:1},
                    {addr:"./static/success/picture_2.jpg",title:"移动售货亭",id:2},
                    {addr:"./static/success/picture_3.jpg",title:"岗亭",id:3},
                    {addr:"./static/success/picture_4.jpg",title:"移动办公室",id:4},
                    {addr:'./static/success/picture_5.jpg',title:"岗亭",id:5},
                    {addr:"./static/success/picture_6.jpg",title:"移动办公室",id:6},
                    {addr:"./static/success/picture_7.jpg",title:"岗亭",id:7},
                    {addr:"./static/success/picture_8.jpg",title:"移动售货亭",id:8},
                    {addr:"./static/success/picture_9.jpg",title:"移动售货亭",id:9},
                 ],title:"移式岗亭"},
                 {list:[
                    {addr:'./static/success/1-double.jpg',title:"集装箱式活动房",id:1},
                    {addr:"./static/success/2-double.jpg",title:"集装箱式活动房",id:2},
                    {addr:"./static/success/3-double.jpg",title:"集装箱式活动房",id:3},
                    {addr:"./static/success/4-double.jpg",title:"集装箱式活动房",id:4},
                    {addr:"./static/success/5-double.jpg",title:"集装箱式活动房",id:5},
                    {addr:"./static/success/6-double.jpg",title:"集装箱式活动房",id:6},
                    {addr:"./static/success/7-double.jpg",title:"集装箱式活动房",id:7},
                    {addr:"./static/success/8-double.jpg",title:"集装箱式活动房",id:8},
                    {addr:"./static/success/9-double.jpg",title:"集装箱式活动房",id:9},
                 ],title:"集装箱式活动房"},
                 {list:[
                    {addr:'./static/success/lm1.jpg',title:"菱镁活动房",id:1},
                    {addr:"./static/success/lm2.jpg",title:"菱镁活动房",id:2},
                    {addr:"./static/success/lm3.jpg",title:"菱镁活动房",id:3},
                    {addr:"./static/success/lm4.png",title:"菱镁活动房",id:4},
                    {addr:"./static/success/lm5.jpg",title:"菱镁活动房",id:5},
                    {addr:"./static/success/lm6.png",title:"菱镁活动房",id:6},
                    {addr:"./static/success/lm7.png",title:"菱镁活动房",id:7},
                    {addr:"./static/success/lm8.png",title:"菱镁活动房",id:8},
                    {addr:"./static/success/lm9.png",title:"菱镁活动房",id:9},
                    {addr:"./static/success/lm10.png",title:"菱镁活动房",id:10},
                    {addr:"./static/success/lm11.png",title:"菱镁活动房",id:11},
                    {addr:"./static/success/lm12.png",title:"菱镁活动房",id:12},
                 ],title:"菱镁活动房"},
                 ],
                 active:0

            };
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
          mini,
          Nav,
          place,
          Content,
          Footer
        }
    };

</script>

<style scoped lang='scss'>
// img{
//     width:90%;
// }
.header {
    text-align: center;
    padding: 20px 0;
}

.box {
    display: flex;
    align-items: center;
    justify-content: center;
    p {
        width: 120px;
        text-align: center;
    }
}
.text_c{
    text-align: center;
    .ul1{
        list-style-type: none;
        .li1{
          width:50%;
          float: left;
          text-align: center;
          margin-bottom: 10px;
          .a1{
             text-align: center;
             img{
                 display:inline-block;
                 width:90%;
                 height: 150px;
                 border:solid 1px #fff;
             }
          }
         .a2{
             color:#000;
         }
        }
    }
}
</style>
