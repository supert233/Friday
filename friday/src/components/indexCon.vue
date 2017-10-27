<template>
	<div class="v_all">
		<slider></slider>
		<div class="v_content">
			<div class="v_hot">
				<img src="../pages/index/assets/hot1.png" alt="" />
				<img src="../pages/index/assets/hot2.png" alt="" />
				<img src="../pages/index/assets/hot3.png" alt="" />
				<img src="../pages/index/assets/hot4.png" alt="" />
			</div>
			<!--第一行-->
			<div class="v_time">
				<div class="v_leftTime">
					<img src="../pages/index/assets/time.png" alt="" />
					<span class="leftTiem1">礼拜五</span>
					<span class="leftTime2">Firiday</span>
				</div>
				<div class="v_rightTime">
					<span class="v_begin">距离开始</span>
					<!--开始时间-->
					<div><span>{{days}}</span>天</div>
					<div>{{hour}}</div> : <div>{{minute}}</div> : <div>{{sec}}</div>
					<span class="v_more">更多 > </span>
				</div>
			</div>
			<!--开始时间下面的轮播图-->
			<div class="v_binBan">
				<router-link to="/zaddshop"><img src="../pages/index/assets/special.png" alt="" /></router-link>
				<img src="../pages/index/assets/special2.png" alt="" />
				<img src="../pages/index/assets/special3.png" alt="" />
				<img src="../pages/index/assets/special4.png" alt="" />
			</div>
			<!--第二行-->
			<div class="v_time">
				<div class="v_leftTime">
					<img src="../pages/index/assets/time.png" alt="" />
					<span class="leftTiem1">新鲜水果</span>
					<span class="leftTime2">采自新疆优质水果生产基地 , 品质一流</span>
				</div>
				<div class="v_rightTime">
					<span class="v_more">更多 > </span>
				</div>
			</div>
			<!--开始时间下面的轮播图-->
			<div class="v_binBan">
				<img src="../pages/index/assets/special5.jpg" alt="" />
				<img src="../pages/index/assets/special6.jpg" alt="" />
				<img src="../pages/index/assets/special7.jpg" alt="" />
				<img src="../pages/index/assets/special8.jpg" alt="" />
			</div>
			
			<!--第三行-->
			<div class="v_time">
				<div class="v_leftTime">
					<img src="../pages/index/assets/time.png" alt="" />
					<span class="leftTiem1">水产海鲜</span>
					<span class="leftTime2">国内外新鲜到港的鱼虾蟹贝 , 我们全都有</span>
				</div>
				<div class="v_rightTime">
					<span class="v_more">更多 > </span>
				</div>
			</div>
			<!--开始时间下面的轮播图-->
			<div class="v_binBan">
				<img src="../pages/index/assets/special9.jpg" alt="" />
				<img src="../pages/index/assets/special10.jpg" alt="" />
				<img src="../pages/index/assets/special11.jpg" alt="" />
				<img src="../pages/index/assets/special12.jpg" alt="" />
			</div>
			
			<!--第四行-->
			<div class="v_time">
				<div class="v_leftTime">
					<img src="../pages/index/assets/time.png" alt="" />
					<span class="leftTiem1">肉类禽蛋</span>
					<span class="leftTime2">采自新疆优质水果生产基地 , 品质一流</span>
				</div>
				<div class="v_rightTime">
					<span class="v_more">更多 > </span>
				</div>
			</div>
			<!--开始时间下面的轮播图-->
			<div class="v_binBan">
				<img src="../pages/index/assets/special5.jpg" alt="" />
				<img src="../pages/index/assets/special6.jpg" alt="" />
				<img src="../pages/index/assets/special7.jpg" alt="" />
				<img src="../pages/index/assets/special8.jpg" alt="" />
			</div>
			
			<!--第五行-->
			<div class="v_time">
				<div class="v_leftTime">
					<img src="../pages/index/assets/time.png" alt="" />
					<span class="leftTiem1">蛋奶速食</span>
					<span class="leftTime2">国内外新鲜到港的鱼虾蟹贝 , 我们全都有</span>
				</div>
				<div class="v_rightTime">
					<span class="v_more">更多 > </span>
				</div>
			</div>
			<!--开始时间下面的轮播图-->
			<div class="v_binBan v_foots">
				<img src="../pages/index/assets/special9.jpg" alt="" />
				<img src="../pages/index/assets/special10.jpg" alt="" />
				<img src="../pages/index/assets/special11.jpg" alt="" />
				<img src="../pages/index/assets/special12.jpg" alt="" />
			</div>
			
		</div>
		<!--规格框-->
		<div>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	import slider from './swiper'// 引入slider组件
	export default{
		name:"vall",
		 components:{
		 	slider
		 },
		data (){
			return {
				days:"0",
				hour:"0",
				minute:"0",
				sec:"0",
			}
		},
		methods:{
			times:function (){
				var times = new Date();	
				var hour = 24 - times.getHours();
				if ( hour < 10) {
					this.hour = "0" + hour;
				} else{
					this.hour = 24 - times.getHours();
				}
				var minute = 59 - times.getMinutes();
				if (minute < 10) {
					this.minute = "0" + minute;
				} else{
					this.minute = minute;
				}
				var sec = 59 - times.getSeconds();
				if (sec < 10) {
					this.sec = "0" + sec;
				} else{
					this.sec = sec;
				}
				var Day = times.getDay();
				if (Day == 6) {
					this.days = 6;
				}else{
					this.days = 5 - Day;
				}
			},
		},
		mounted(){
			setTimeout(this.times,0);
			setInterval(this.times,1000);
		}
	}
	
</script>

<style scoped>
body,div,img,input,ul,li,span,img{
	margin:0;
	padding:0;
}
.v_content{
	width: 1280px;
	margin: 0 auto;
}
.v_hot{
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-top: 20px;
}
.v_time{
	width: 100%;
	height: 100px;
	margin-top: 20px;
	background-color: #ebffe8;
	border-bottom: 1px solid #498e3d;
}
.v_leftTime{
	height: 100px;
	margin-left: 30px;
	padding-top: 30px;
	/*font-size: 24px;*/
	float: left;
}
.v_leftTime img{
	float: left;
}
.leftTiem1{
	margin-left: 18px;
	line-height: 46px;
	font-size: 24px;
	color: #549648;
}
.leftTime2{
	margin-left: 10px;
	font-size: 20px;
	color: #999999;
}
.v_rightTime{
	float: right;
	margin-right: 30px;
	line-height: 100px;
}
.v_rightTime div{
	width: 60px;
	height: 40px;
	background-color: #f08200;
	text-align: center;
	line-height: 43px;
	border-radius: 4px;
	color: white;
	display: inline-block;
}

.v_begin{
	color: #498e3d;
	font-size: 22px;
	margin-right: 12px;
}
.v_more{
	font-size: 18px;
	color: #6f706f;
	margin-left: 22px;
}
.v_binBan{
	width: 100%;
	margin-top: 20px;
	margin-bottom: 20px;
	font-size: 0;
	display: flex;
	justify-content: space-between;
}
.v_binBan img{
	width: 305px;
	height: 433px;
}
.v_foots{
	margin-bottom: 40px;
}
</style>