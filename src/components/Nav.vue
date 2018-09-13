<template>
<el-row class="tac">
  <el-col :span="24" class="nav">
    <span>榆林市鑫天赐</span>
    <el-menu
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1" id="nav1">

        <el-menu-item-group>
          <!--<template slot="title"></template>-->
          <el-menu-item index="1-1"><router-link to="/">首页</router-link></el-menu-item>
          <el-menu-item index="1-2"><router-link to="/about">关于我们</router-link></el-menu-item>
          <el-menu-item index="1-2"><router-link to="/news">新闻中心</router-link></el-menu-item>
          <el-menu-item index="1-2"><router-link to="/product">产品展示</router-link></el-menu-item>
          <el-menu-item index="1-2"><router-link to="/success">成功案例</router-link></el-menu-item>
          <el-menu-item index="1-2"><router-link to="/contact">联系我们</router-link></el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-col>
</el-row>
</template>
<script>

 export default{
     name:"Nav",
     data(){
         return{

         }
     },
      methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
 }

</script>
<style scoped>
.nav{
    position: relative;
    height:50px;
    background:#e8e9eb;
}
.nav>span{
    width:100%;
    display: inline-block;
    line-height: 50px;
    text-align: center;
    font-size:1.5em;
}
#nav1{
    position: absolute;
    right:0px;
    top:-50px;
    width:100%;
}
.navimg{
    width:10%;
}
img{
    width:10%;
    position: absolute;
    top:-40px;
    right:10px;
    line-height: 50px;
}


a{
      background:rgb(212,31,30);
      width:100%;
    border-bottom:1px solod #fff;
     color:#fff;
     line-height:50px;
     text-align: center;
 }
</style>
