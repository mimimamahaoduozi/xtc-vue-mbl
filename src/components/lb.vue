<template>
<div class="carousel-wrap" id="carousel">
    <!-- // 轮播图列表 -->
<wc-swiper :duration="900" :interval="2500" class="swiper">
   <wc-slide v-for="(list,index) in slideList" :key="index">
       <img :src="list.image" :alt="图片加载中" class="uimg">
   </wc-slide>
</wc-swiper>

</div>
</template>

<script>
export default {
    name:'Content',
    data(){
         return{
               slideList: [
        {
            "clickUrl": "#",
            // 在js中请求静态资源，需用require引入
            "image": require('../assets/img/banner01.jpg')
        },
        {
            "clickUrl": "#",
            "image":  require('../assets/img/banner02.jpg')
        },
        {
            "clickUrl": "#",
           "image":  require('../assets/img/banner03.jpg')
        },
         {
            "clickUrl": "#",
           "image":  require('../assets/img/banner04.jpg')
        }
    ],
    currentIndex: 0,
    timer: ''
                }
            }}
</script>

<style scoped>
.carousel-wrap{
    margin:0px;
    padding:0px;
    height:150px;
    width:100%;
}
    .swiper{
        height:150px;
        width:100%;
    }
    .uimg{
        width:100%;
        height:150px;
    }
</style>
