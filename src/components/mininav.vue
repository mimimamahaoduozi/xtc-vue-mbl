<template>
    <div class="mininavbox">
      <ul class="mininavcon">
        <li
          v-for="(item,index) of items"
          :key="index"
          :type="index"
          @click="toggle(index)" :class="{active:index==active}"
        >
          {{item.title}}
        </li>
      </ul>
    </div>
</template>


<script>
    //传入items数组；

    /*
    *
    * 调用此组件使用以下方法可以获取到点击的li的索引
    * */
    // change(e){
    //   console.log(e.target.key);
    // }
    export default {
      name: "mininav",
      data(){
        return{
          active:0,
          x:0
        }
      },
      props:{
          items:Object
      },
      methods:{
        toggle(index){
          this.active=index;
        }
      }
    }
</script>

<style scoped>
  .mininavbox{
    width: 100%;
    overflow: hidden;
    /*box-shadow: 0px 5px 5px -5px black, 0px -5px 5px -5px black;*/
    border-top: solid 1px #ccc;
    border-bottom: solid 1px #ccc;
  }
  .mininavcon{
    padding: 5px 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: middle;
    -ms-flex-align: middle;
    align-items: middle;
    overflow: auto;
  }
  .mininavcon>li{
    text-align: center;
    font-size: 16px;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    padding: 10px;
    border-radius: 10px;
    color: #0086b3;
  }
  .mininavcon>li.active{
    color: #c12f17;
    background: url("http://www.tianciganggou.com/product/img/cebg.jpg");
  }
</style>
