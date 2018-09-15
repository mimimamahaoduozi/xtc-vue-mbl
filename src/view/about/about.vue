<template>
  <div>
     <Nav></Nav>
     <Content></Content>
     <place>关于我们</place>
   <div class="hello">
        <mini :items="lists" @click.native="change"></mini>
        <div class="text_q">
             <div class="qq">
                <div class="ww" v-for="(item,index) in lists[active].list" :key="index">
                  <p class="qw" v-for="(itemChlid,qq) in item.addrs" :key="qq">{{itemChlid.addr}}</p>
                  <img :src="itemChlid.img" v-for="(itemChlid,ww) in item.imgs " :key="ww"/>
                </div>
            </div>`
        </div>
    </div>
    <Footer></Footer>
    </div>

</template>

<script>
import mini from "../../components/mininav.vue";
import Footer from "../../components/footer.vue";
import Content from "../../components/lb.vue";
import Nav from "../../components/Nav.vue";
import place from "../../components/place.vue";



 import {
        mapActions,
        mapGetters
    } from "vuex";
    import imgLogo from "@/assets/img/logo.png";

    export default {
        name: "about",
        data() {
            return {
                lists:[
                  {list:[
                    {addrs:[
                        {addr:'榆林市鑫天赐钢结构工程有限公司是一家专业从事钢结构设计、加工制作、施工与技术服务为一体的大型综合性企业。公司始建于2009年，坐落于榆林市榆横开发区苏庄则，占地30亩，生产车间7000平米，总投资2000余万元，我公司利用雄厚的资本优势及强大的技术团队为您提供高效的服务。本公司主营：大型钢结构厂房，金属网架、门式及多层钢结构框架，加工销售：各种型号彩钢单板、楼承板、岩棉、泡沫、聚氨酯夹心板，C型钢、Z型钢、H型钢。我公司现有员工百余名：其中高级工程师3名，钢结构工程师3名，焊接工程师2名，专业高级焊工20余名，标准自动化数控技工10余名，注册会计师2名，初级技术工人和其他员工50余名。'},
                      ]},

                      {imgs:[
                          {img:"../static/img/abouta.jpg"},
                          {img:"../static/img/abouta1.jpg"},
                          {img:"../static/img/abouta2.jpg"},
                          {img:"../static/img/abouta3.jpg"},
                        ]},
                 ],title:"公司介绍"},
                  {list:[
                    {addrs:[
                        {addr:'一、我们的使命'},
                        {addr:'二、我们的愿景'},
                        {addr:'三、我们的企业精神'},
                        {addr:'四、我们的市场理念'},
                        {addr:'五、我们的质量理念'},
                      ]},

                 ],title:"公司文化"},
                 {list:[
                    {addrs:[
                        {addr:' 古语有云："以史为鉴，可知兴替"。我们在预测未来之前最 好先回顾一下历史。最近几年管理理论界发生了翻天覆地的变化理解个人以及团队的运作模式已成为研究的中心任务。现 代管理如今越来越重视团队这一概念。管理专家建议重新构建组织，以利于团队工作；董事们正在向公司的管理人员阐述团队工作的重要性；高 级管理人员勉励其下属在部门内部要搞好团队工作。我们有理由相信，21世纪的管理理论研究也必然围绕着团队展开。正是 在这种情况下，彩钢工业才决定引进团队角色。'},
                      ]},

                    {imgs:[
                      {img:"../static/img/about3.jpg"}
                      ]}
                 ],title:"管理团队"},
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
                this.active=e.target.type
            }
        },
        components:{
          mini,
          Footer,
          Content,
          Nav,
         place

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
.text_q{
    text-align: center;
    .qq{

        .ww{
          width:100%;
          float: left;
          text-align: center;
          .qw{
             text-align: center;
             width: 95%;
            //  img{
            //      display:inline-block;
            //      width:90%;
            //      height: 150px;
            //      border:solid 1px #fff;
             }
            //  img:hover{
            //      display:inline-block;
            //      width:90%;
            //      height: 150px;
            //      transition: all 1s;
            //      border:solid 3px #0f0;
            //  }
          }
         .ee{
             font-size:1.4em;
             color:#000;
             font-weight: bold;
         }
        }
    }
    img{
                  display:inline-block;
              width:90%;
                  height: auto;
                  margin-top:10px;
                //   border:solid 1px #fff;
             }

</style>
