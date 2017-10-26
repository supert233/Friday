<!--首页轮播图-->
<template>
  <slider :pages="pages" :sliderinit="sliderinit" class="swiper">
    <!-- slot  -->
  </slider>
</template>
 
<script>
import slider from 'vue-concise-slider'// 引入slider组件
export default {
   data () {
      return {
        //图片列表[arr]
        pages:[
          {
            title: '',
            style:{
             background:'url(http://qiniu.libaiwu.com.cn/goodsimg/1478499585756.jpg)',
            }
          },
          {
           title: '',
           style:{
            background:'url(http://qiniu.libaiwu.com.cn/goodsimg/1478499585756.jpg)'
            }
          }
        ],
        //滑动配置[obj]
        sliderinit: {
          currentPage: 0,//当前页码
          thresholdDistance: 1500,//滑动判定距离
          thresholdTime: 100,//滑动判定时间
          autoplay:2000,//自动滚动[ms]
          loop:true,//循环滚动
          direction:'horizontal',//方向设置
          infinite:1,//无限滚动前后遍历数
          slidesToScroll:1,//每次滑动项数
        }
      }
    },
    components: {
        slider
    }
}
</script>

<style scoped>
	.slider-container{
		margin: 0;
		padding: 0;
	}
	.swiper{
		width: 100%;
		height: 495px;
	}
</style>