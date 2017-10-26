<template>
	<div class="k_local">
		<slider></slider>
		<div class="k_all">
			<div class="K_hot">
				<img src="../pages/index/assets/hot1.png" alt="" />
				<img src="../pages/index/assets/hot2.png" alt="" />
				<img src="../pages/index/assets/hot3.png" alt="" />
				<img src="../pages/index/assets/hot4.png" alt="" />
			</div>
			<!--分类 二级跳转-->
			<div class="k_sort">
				<span>分类:</span>
				<ul>
					<li>全部</li>
					<li>餐饮</li>
					<li>酒店</li>
					<li>休闲</li>
					<li>电影</li>
					<li>汽车装饰</li>
					<li>家政服务</li>
				</ul>
			</div>
			<!--内容选择框-->
			<div class="k_select">
				<!--销量-->
				<div>评分最高</div>
				<select name="">
					<option value="">价格</option>
					<option value="">从低到高</option>
					<option value="">从高到低</option>
				</select>
				<div>销量</div>
			</div>
			<!--内容-->
			<ul class="k_content">
				<li><img src="../pages/index/assets/local1.jpg" alt="" /></li>
				<li><img src="../pages/index/assets/local2.jpg" alt="" /></li>
				<li><img src="../pages/index/assets/local3.jpg" alt="" /></li>
				<li><img src="../pages/index/assets/local4.jpg" alt="" /></li>
			</ul>
			<ul class="k_content">
				<li><img src="../pages/index/assets/local1.jpg" alt="" /></li>
				<li><img src="../pages/index/assets/local2.jpg" alt="" /></li>
				<li><img src="../pages/index/assets/local3.jpg" alt="" /></li>
				<li><img src="../pages/index/assets/local4.jpg" alt="" /></li>
			</ul>
			<ul class="k_content k_marBom">
				<li><img src="../pages/index/assets/local1.jpg" alt="" /></li>
				<li><img src="../pages/index/assets/local2.jpg" alt="" /></li>
				<li><img src="../pages/index/assets/local3.jpg" alt="" /></li>
				<li><img src="../pages/index/assets/local4.jpg" alt="" /></li>
			</ul>
		</div>
	</div>
</template>

<script>
	import slider from './swiper'// 引入slider组件
	export default{
		name:"k_local",
		components:{
			slider
		}
	}
</script>

<style scoped>
body,div,ul,li,img,button{
	margin:0;
	padding:0
}
ul,li{
	list-style: none;
	display:inline-block;
}
.slider-container{
	margin: 0;
	padding: 0;
}
.k_all{
	width: 1280px;
	margin: 0 auto;
}
.k_all .K_hot{
	height: 140px;
	margin-top: 20px;
	display: flex;
	justify-content: space-between;
}
.k_all .k_sort{
	width: 100%;
	height: 40px;
	padding-top: 16px;
	font-size: 16px;
	color: #666666;
	border-bottom: 1px solid #e7e7e7;
}
.k_sort li{
	height: 22px;
	padding: 2px 12px;
}
.k_sort li:hover{
	background-color: #498e3d;
	color: white;
}
.k_select{
	height: 66px;
}
.k_select div{
	display: inline-block;
	float: right;
	border: 1px solid #e7e7e7;
	color: #404040;
	padding: 2px 15px;
	margin-left: 40px;
	margin-top: 20px;
}
.k_select select{
	float: right;
	border: 1px solid #e7e7e7;
	color: green;
	height:30px;
	margin-left: 40px;
	margin-top: 20px;
}
.k_content{
	display: flex;
	justify-content: space-between;
	margin-bottom: 20px;
}
.k_marBom{
	margin-bottom: 40px;
}
.k_content li{
	height: 300px;
}
</style>