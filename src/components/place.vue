<template>
  <div class="place">
    您当前所在位置：
    <p class="weizhi">
      <router-link to="/">首页--</router-link><slot></slot>
    </p>
  </div>
</template>
<script>
export default {

}
</script>
<style>
  .place{
    text-align: left;
    padding: 5px;
    border: 1px solid #fff;
  }
  .place a:visited{
    color: #0086b3;
  }
  .weizhi{
    color: #999999;
  }
  a,.weizhi{
    display:inline-block;
    font-size: .9em!important;
  }
</style>
