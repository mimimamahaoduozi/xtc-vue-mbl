<template>
<div class="carousel-wrap" id="carousel">
    <!-- // 轮播图列表 -->
    <transition-group tag="ul" class='slide-ul' name="list">
      <li v-for="(list,index) in slideList" :key="index" v-show="index===currentIndex" @mouseenter="stop" @mouseleave="go">
        <a :href="list.clickUrl" >
          <img :src="list.image" :alt="图片加载中" class="uimg">
        </a>
      </li>
    </transition-group>
   
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
            },  
    methods:{  
 created() {
    //在DOM加载完成后，下个tick中开始轮播
    this.$nextTick(() => {
        this.timer = setInterval(() => {
            this.autoPlay()
        }, 4000)
    })
},
go() {
    this.timer = setInterval(() => {
        this.autoPlay()
    }, 4000)
},
stop() {
    clearInterval(this.timer)
    this.timer = null
},
change(index) {
    this.currentIndex = index
},
autoPlay() {
    this.currentIndex++
    if (this.currentIndex > this.slideList.length - 1) {
        this.currentIndex = 0
    }
}
}}
</script>

<style>
.list-enter-to {
  transition: all 1s ease;
  transform: translateX(0);
}

.list-leave-active {
  transition: all 1s ease;
  transform: translateX(-100%)
}

.list-enter {
  transform: translateX(100%)
}

.list-leave {
  transform: translateX(0)
}
.carousel-wrap {
  position: relative;
  height: 453px;
  width: 100%;
  overflow: hidden;
  margin-top:-15px;
  /* // 删除 */
  /* background-color: #fff; */
}

.slide-ul {
    list-style-type:none;
    margin:-40px;
  width: 100%;
 
}
 .slide-ul>li {
    position: absolute;
    width: 100%;
    height:10%;
    
  }
.uimg {
      width: 100%;
      height:10%;
    }
</style>