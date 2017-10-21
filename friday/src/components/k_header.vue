<template>
	<!--页面头部-->
		<div class="k_header">
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
			<!--头部内容-->
			<div class="k_headerCon">
				<img class="k_logo" src="../pages/index/assets/logo.png" alt="" />
				<!--输入框-->
				<div class="k_input">
					<input type="text" placeholder="请输入关键字进行搜索" />
					<button></button>
					<span>热门 : </span>
					<span>奇异果</span>
					<span>牛排</span>
					<span>山竹</span>
					<span>牛油果</span>					
				</div>
				<div class="k_perCen">
					购物车
				</div>
				<router-link to="/users"><div class="k_perCen">
					个人中心
				</div>	</router-link>
				<!--导航条-->
				<ul class="k_nav">
					<li class="k_all"><span>全部分类</span></li>
					<li><span>首页</span></li>
					<li><span>同城</span></li>
					<li><span>礼拜五</span></li>
					<li><span>积分商城</span></li>
					<li><span>导航 +</span></li>
				</ul>
				<!--分类内容-->
				<ul class="k_classes">
					<li>新鲜水果</li>
					<li>生猛海鲜</li>
					<li>肉类家禽</li>
					<li>蛋奶素食</li>
					<li>田园蔬菜</li>
					<li>零食酒水</li>
					<li>粮油杂货</li>
					<li>礼品卡卷</li>
					<li>家具用品</li>
				</ul>
			</div>
		</div>
</template>

<script>
	export default {
		name:"k_header",
//		components:{
//	  		Users
//	  	
//	  }
		
	}

	
	
</script>

<style scoped>
		body,div,img,input,ul,li,span,img{
				margin:0;
				padding:0;
			}
			ul,li{
				list-style: none;
				display: inline-block;
			}
			.k_header{
				width: 100%;
				border-bottom: 1px solid #efeeec;
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
			/*头部内容*/
			.k_headerCon{
				width: 1280px;
				height: 190px;
				margin: 0 auto;
				position: relative;
			}
			.k_headerCon .k_logo{
				margin-top: 24px;
				float: left;
			}
			.k_input{
				width: 498px;
				height: 60px;
				margin-left: 102px;
				margin-top: 50px;
				display: inline-block;
			}
			.k_input input{
				width: 450px;
				height: 36px;
				border: 2px solid #4b943d;
				margin-bottom: 6px;
				outline: none;
				font-size: 14px;
				color: #a0a0a0;
				padding-left: 4px;
			}
			.k_input button{
				width: 40px;
				height: 40px;
				background-color: #4b943d;
				border: 0 solid;
				display: inline-block;
				float:right;				
			}
			.k_input span{
				color: #666;
				margin-right: 26px;
			}
			.k_perCen{
				float: right;
				width: 122px;
				height: 38px;
				border: 1px solid #e5e5e5;
				background-color: #f8f8f6;
				text-align: center;
				line-height: 38px;
				font-size: 13px;
				color: #838383;
				margin-left: 20px;
				margin-top: 50px;
			}
			.k_nav{
				margin-top: 22px;
				height: 50px;								
			}
			.k_nav li{
				/*width: 150px;*/
				height: 50px;
				line-height: 50px;
				text-align: center;
				font-size: 16px;
				color: #696969;
				float: left;
			}
			.k_nav li span{
				padding-left: 51px;
				padding-right: 50px;  
				border-left: 1px solid #e8e8e8;
			}
			.k_nav li:nth-child(1){
				width: 170px;
			}
			.k_nav li:nth-child(1) span{
				border: 0 solid;
			}
			.k_nav li:hover,.k_nav li span:hover{
				background-color: #f08200;
				border-color:#f08200 ;				
			}
			.k_input button{
				outline: none;
			}
			.k_classes{
				position: absolute;
				left: 0;
				top: 190px;
				width: 168px;	
				border: 1px solid #efeeec;
				display: none;
			}
			.k_classes li{
				width: 170px;
				text-align: center;
				height: 54px;
				line-height: 54px;
			}
</style>