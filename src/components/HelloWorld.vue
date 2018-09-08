<template>
  <div class="hello">
    <header class="header">
      <h1>{{ msg }}</h1>
    </header>
    <div>
      <img :src="imgLogo" alt="" />
    </div>
  </div>
</template>

<script>
import imgLogo from "@/assets/img/logo.png";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      imgLogo
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
</style>
