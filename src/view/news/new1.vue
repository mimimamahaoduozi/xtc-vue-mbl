<template>
  <div>
    <h3 class="newstitle">{{item.title}}</h3>
    <p class="cons">{{item.con}}</p>
  </div>
</template>

<script>
   export default{
      name:"",
      props:{
        items:Object
      }
   }
</script>
<style scoped lang='scss'>
.newstitle{
  font-size: 20px;
  text-align: center;
  color: #f00;
  padding-bottom: 20px;
}
.cons{
  text-indent:2em;
  width: 80%;
  height: auto;
  font-size:1em;
  margin-left: 10%;
}
</style>
