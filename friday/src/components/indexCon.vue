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
				<img src="../pages/index/assets/special.png" alt="" />
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
			<ul class="v_binBan">
				<li v-for="item in arr1">
					<router-link to="/Zdetail"><img src="" alt="" /></router-link>
					<span class="v_bin1">{{item.comname}}</span>
					<span class="v_bin2">果肉绵密 .......</span>
					<div class="v_bin3">
						<span>¥{{item.comprice}}</span>
						<span>¥40.00</span>
					</div>
					<router-link to="/zaddshop"><img @click="k_show()" class="v_bin4" src="../pages/index/assets/littgou.png" alt="" /></router-link>
				</li>				
			</ul>
			
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
			<ul class="v_binBan">
				<li v-for="item in arr2">
					<router-link to="/Zdetail"><img src="" alt="" /></router-link>
					<span class="v_bin1">{{item.comname}}</span>
					<span class="v_bin2">果肉绵密 .......</span>
					<div class="v_bin3">
						<span>¥{{item.comprice}}</span>
						<span>¥40.00</span>
					</div>
					<router-link to="/zaddshop"><img @click="k_show()" class="v_bin4" src="../pages/index/assets/littgou.png" alt="" /></router-link>
				</li>
			</ul>
			
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
			
			<ul class="v_binBan">
				<li v-for="item in arr3">
					<router-link to="/Zdetail"><img src="" alt="" /></router-link>
					<span class="v_bin1">{{item.comname}}</span>
					<span class="v_bin2">果肉绵密 .......</span>
					<div class="v_bin3">
						<span>¥{{item.comprice}}</span>
						<span>¥40.00</span>
					</div>
					<router-link to="/zaddshop"><img @click="k_show()" class="v_bin4" src="../pages/index/assets/littgou.png" alt="" /></router-link>
				</li>
			</ul>
			
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
			
			<ul class="v_binBan v_foots">
				
				<li v-for="item in arr4">
					<router-link to="/Zdetail"><img src="../pages/index/assets/special15.png" alt="" /></router-link>
					<span class="v_bin1">{{item.comname}}</span>
					<span class="v_bin2">果肉绵密 .......</span>
					<div class="v_bin3">
						<span>¥{{item.comprice}}</span>
						<span>¥40.00</span>
					</div>
					<router-link to="/zaddshop"><img @click="k_show()" class="v_bin4" src="../pages/index/assets/littgou.png" alt="" /></router-link>
				</li>
			</ul>
			
		</div>
		<!--规格框 子组件-->
		<!--购物车弹出框的背景-->
		<div @click="hidden()" v-if="hiddenBol" class="k_weight"></div>
		<div class="k_weights" v-if="hiddenBol">
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
				hiddenBol:false,
				arr1:[],
				arr2:[],
				arr3:[],
				arr4:[]
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
			hidden:function(){
				this.hiddenBol=false;
			},
			k_show:function(){
				this.hiddenBol=true;
			}
		},
		mounted(){
			setTimeout(this.times,0);
			setInterval(this.times,1000);
			
			//获取首页数据
			this.$http.post('api/user/indexCons',{}, {emulateJSON: true}).then(function(res){

				var allData = res.body;
				console.log(allData)
				for (var i=0; i< allData.length; i++) {
					
					switch (allData[i].comtype){
						case "水果":
							this.arr1.push(allData[i]);	
							break;
						case "海鲜":
							this.arr2.push(allData[i]);
							break;
						case "速食":
							this.arr3.push(allData[i]);
							break;
						case "禽蛋":
							this.arr4.push(allData[i]);
							
							break;
						default:
							break;
					}
				}
			})
			
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
	display: flex;
	justify-content: space-between;
}
.v_binBan li{
	width: 304px;
	height: 432px;
	border: 1px solid #ececec;
	position: relative;
}
.v_binBan .v_bin1{
	color: #333333;
	font-size: 18px;
	display: block;
	margin-left: 20px;
}
.v_binBan .v_bin2{
	color: #666666;
	font-size: 14px;
	display: block;
	margin-left: 20px;
	margin-top: 8px;
}
.v_binBan .v_bin3{
	margin-left: 20px;
	margin-top: 20px;
}
.v_bin3 span:nth-child(1){
	color: #ff5757;
	font-size: 20px;
}
.v_bin3 span:nth-child(2){
	color: #666666;
	font-size: 14px;
	margin-left: 16px;
	text-decoration: line-through;
}
.v_binBan .v_bin4{
	position: absolute;
	right: 20px;
	bottom: 24px;
}
.v_foots{
	margin-bottom: 40px;
}

/*规格框*/
.k_weight{
	background-color: rgba(0,0,0,0.3);
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 1000;
}
.k_weights{
	position: fixed;
	top: 200px;
	left: 600px;
	z-index: 2000;
}
</style>