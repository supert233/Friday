<template>
	<!--头部-->
	<div class="p_all">
		<!--头部消息框-->
		<div class="k_massage">
			<!--消息内容-->
			<div class="k_msgCon">
				<!--选择城市-->
				<div class="K_fromCity">
					所在城市 :
					<span>北京朝阳区</span>
				</div>
				<!--登录信息-->
				<ul class="k_msgOn">
					<li>
						您好 ,
						<!--后台传入的登录名-->
						<div class="login">17701269859</div>
						<span>退出</span>
					</li>
					<li>
						<span>我的订单</span>
					</li>
					<li>
						<span>我的消息</span>
					</li>
					<li>
						<span>我是商家</span>
					</li>
					<li>
						<!--小图标-->
						
						400-800-8820
					</li>
				</ul>
			</div>
		</div>
		<!--头部logo-->
		<div class="k_logo">
			<img src="../pages/index/assets/logo.png" alt="" />
			<div>
				<span>我的购物车</span>&nbsp;&nbsp;&nbsp; > &nbsp;&nbsp;&nbsp;
				<span>确认订单信息</span>&nbsp;&nbsp;&nbsp; > &nbsp;&nbsp;&nbsp;
				<span>订单提交成功</span>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style>
	body,div,img,input,ul,li,span,img{
		margin:0;
		padding:0;
	}
	ul,li{
		list-style: none;
		display: inline-block;
	}
	.p_all{
		border-bottom: 1px solid #e4e4e4;
	}
	.k_massage{
		width: 100%;
		height: 36px;
		background-color: #eeeeee;
	}
	.k_massage .k_msgCon{
		width: 1280px;
		height: 36px;
		margin: 0 auto;
	}
	.k_msgCon .K_fromCity{
		font-size: 14px;
		color: #6f6f6f;
		line-height: 36px;
		float: left;
	}
	.k_msgCon .k_msgOn{
		font-size: 14px;
		color: #6f6f6f;
		line-height: 36px;
		float: right;
	}
	.k_msgOn .login{
		color: #4b943d;
		display: inline-block;
	}
	.k_msgOn span{
		border-right: 1px solid #6f6f6f;
		padding-right: 14px;
		padding-left: 14px;
	}
	.k_msgOn li:last-child{
		padding-left: 14px;
	}
	.k_logo{
		width: 1280px;
		margin: 0 auto;
		margin-top: 24px;
		padding-bottom: 36px;
		
	}
	.k_logo div{
		float: right;
		margin-top: 40px;
	}
</style>