<template>
	<div class="z_foot">
			<!--底部的上部分链接-->
			<div class="z_footTop">
				<ul>
					<a href="protect"><li><img src="../pages/index/assets/z_safe.jpg"/><span>优先保障</span></li></a>
					<li>	<router-link to="/z_wholeControl"><img src="../pages/index/assets/z_control.jpg"/><span>全程监控</span></router-link></li>
					<li><router-link to="/z_fivePre"><img src="../pages/index/assets/z_preference.jpg"/><span>礼拜五特惠</span></router-link></li>
					<li><router-link to="/z_dirSupply"><img src="../pages/index/assets/z_supply.jpg"/><span>基地直供</span></router-link></li>
					<li class="special"><router-link to="/z_onTime"><img src="../pages/index/assets/z_arrive.jpg"/><span>准时送达</span></router-link></li>
				</ul>
			</div>
			<!--底部中间部分-->
			<div class="z_footMid">
				<div class="z_midCont">
					<div class="z_logo">
						<img src="../pages/index/assets/z_logo.png" alt="" class="logeImg"/>
						<p>服务时间 : 08 : -22:00
							<img src="../pages/index/assets/z_phone.png" class="phoneImg"/>
							<span>400-800-8820</span>
						</p>
					</div>
					<!--微信支付-->
					<div class="z_method">
						<img src="../pages/index/assets/z_weixin.png"/>
						<span>礼拜五官方微信</span>
					</div>
					<!--App支付-->
					<div class="z_method">
						<img src="../pages/index/assets/z_app.png"/>
						<span>礼拜五App</span>
					</div>
					<!--链接部分-->
					<ul class="z_about">
						<li class="z_noLink">关于礼拜五</li>
						<!--链接开始-->
						<li class="z_link">新用户注册</li>
						<li class="z_link">在线下单</li>
						<li class="z_link">支付方式</li>
					</ul>
					<ul class="z_explain">
						<li class="z_noLink">配送说明</li>
						<!--链接开始-->
						<li class="z_link">运费说明</li>
						<li class="z_link">配送方式</li>
						<li class="z_link">发展说明</li>
					</ul>
					<ul class="z_server">
						<li class="z_noLink">售后服务</li>
						<!--链接开始-->
						<li class="z_link">退换货说明</li>
						<li class="z_link">服务保障承诺</li>
						<li class="z_link">验货与签收</li>
					</ul>
					<ul class="z_ join">
						<li class="z_noLink">加盟礼拜五</li>
						<!--链接开始-->
						<li class="z_link">加盟条款</li>
						<li class="z_link">公司简介</li>
						<li class="z_link">服务协议</li>
					</ul>
				</div>
			</div>
			<!--底部版权部分-->
			<p class="z_end">版权所有 © 礼拜五 保留所有权利 | 沪ICP备12042163</p>
			<p class="z_color">礼拜五 纵享品质</p>
		</div>
</template>

<script>
	export default {
		name:"z_foot",
//		components:{
//	  		Users
//	  	
//	  }
		data(){
			return{
				
			}
		},
		methods:{
			
		}
	}
</script>

<style>
		*{
			margin:0;
			padding:0;
		}
		a{
			text-decoration: none;
			color: #4e4e4e;
		}
		.z_foot{
			width:100%;
			height:389px;
		}
		/*底部的上部分链接*/
		ul li{
			list-style: none;
		}
		.z_footTop{
			width:100%;	
			border-bottom:1px solid #ddd;
			border-top:1px solid #ddd;
		}
		.z_footTop ul{
			/*background-color: red;*/
			width:1280px;
			display: flex;
			justify-content: center;
			margin:0 auto;
			margin-top:22px;
			margin-bottom: 22px;
		}
		.z_footTop ul li{
			display: flex;
			justify-content: center;
			width:230px;
			/*height:30px;*/
			border-right:1px solid #ddd;
			padding:4px 10px;
			line-height: 30px;
			font-size: 23px;
			font-weight: 100px;
		}
		/*最后一个li无右边框*/
		.z_footTop .special{
			border-right:1px solid rgba(255,255,255,0);
		}
		.z_footTop ul li img{
			width:25px;
			height:25px;
			margin-top:2px;
			margin-right:14px;	
		}
		/*底部中间部分*/
		.z_footMid{
			width:100%;
			border-bottom: 1px solid #ddd;
		}
		.z_footMid .z_midCont{
			width:1280px;
			margin:0 auto;
			/*background-color: pink;*/
			display: flex;
			justify-content: center;
		}
		.z_method{
			margin-top:19px;
			margin-bottom:19px;
		}
		.z_method span{
			display: block;
			/*background-color: green;*/
			text-align: center;
			margin-top:4px;
			font-size:12px;
			color:#8c8c8c;
		}
		.z_logo,.z_method{
			margin-right:40px;
		}
		.z_logo{
			margin-top:30px;
		}
		.z_logo .logoImg{
			width:374px;
			height:67px;
		}
		.z_logo p{
			display: flex;
			justify-content:left;
			margin-top:38px;
			font-size: 16px;
			/*background-color: pink;*/
		}
		.z_logo .phoneImg{
			width:20px;
			line-height: 8px;
			/*height:16px;*/
			margin-left:20px;
			margin-right:5px;
			
		}
		.z_logo span{
			color:#f18a10;
		}
		.z_midCont .z_noLink{
			font-size:16px;
			font-weight: 500;
		}
		.z_midCont .z_link{
			font-size:14px;
			color:#8c8c8c;
		}
		.z_midCont ul{
			margin-right:45px;
			margin-top:18px;	
		}
		.z_midCont ul li{
			margin-top:10px;
		}
		/*最底下部分*/
		.z_end{
			text-align: center;
			margin-top:18px;
			margin-bottom: 8px;
			font-size: 14px;
			color:#b3b3b3;
		}
		.z_color{
			text-align: center;
			color:#f18a10;
			font-size: 14px;
		}
</style>