<template>
  <div class="place">
    您当前所在位置：<router-link to="/">首页--</router-link><slot></slot>
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
    color: #6b6b6b;
  }
  a{
  display:inline-block;
  }
</style>
