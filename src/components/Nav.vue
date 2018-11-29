<template>
  <el-row class="tac">
    <el-col :span="24" class="nav">
      <span>榆林市鑫天赐</span>
      <el-dropdown trigger="click">
      <span class="el-dropdown-link">
       <i class="el-icon-arrow-down el-icon-menu"></i>
      </span>
        <el-dropdown-menu slot="dropdown"style="left:0px;">
          <el-dropdown-item><router-link to="/">首页</router-link></el-dropdown-item>
          <el-dropdown-item><router-link to="/about">关于我们</router-link></el-dropdown-item>
          <el-dropdown-item><router-link to="/news">新闻中心</router-link></el-dropdown-item>
          <el-dropdown-item><router-link to="/product">产品展示</router-link></el-dropdown-item>
          <el-dropdown-item><router-link to="/success">成功案例</router-link></el-dropdown-item>
          <el-dropdown-item><router-link to="/contact">联系我们</router-link></el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
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
    background:url("http://www.tianciganggou.com/product/img/newred.jpg");
    z-index: 1000;
    color: #fff;
  }
  .nav>span{
    width:100%;
    display: inline-block;
    line-height: 50px;
    text-align: center;
    font-size:1.5em;
    font-weight: bold;

  }
  .el-dropdown{
    position: absolute;
    right:0px;
    color: #fff;
    width:100%;
    z-index:100;
  }


  .el-dropdown>span{
    position: absolute;
    right:0px;
    top:-50px;
    width:50px;
    font-size: 40px;
  }
  .el-dropdown-link{
    position: absolute;
    right:0px;
    top:-50px;
    width:100%;
    z-index:100;
  }
  .el-dropdown-menu{
    width:94%;
    margin-right:5px;
    padding-right:-50px;
    background-color:rgba(265,265,265,1);
    border: 0px solid #ebeef5;
  }




  a{
    background:url("http://www.tianciganggou.com/product/img/newred.jpg");
    width:100%;
    border-bottom:1px solid #fff;
    color:#fff;
    line-height:49px;
    text-align: center;
  }
</style>
