<template>
	<div class="s_users">
		<div class="s_username">
			<div class="user_photo"><img src="../pages/index/assets/用户头像.png"/></div>
			<p class="s_hello"><span>你好,</span><span>24654644</span></p>
			<div class="s_recharge"><router-link to="/"><span>充值有礼>></span></router-link><span class="oColor"><router-link to="/">充值卡兑换>></router-link></span></div>
			<div class="s_wallet"><span>我的钱包</span><span>564654</span></div>
			
			<div class="s_nowint">
				<span>当前积分</span><span>2356</span>
			</div>
			
		</div>
		<div class="new_gift"><img src="../pages/index/assets/福利.png"/></div>
	</div>
</template>

<script>
	export default{
		name:"users",
//		components:{
//	  		Users
//	  	
//	  }
	}
</script>

<style scoped>
.s_username{
	width: 1083px;
	height: 218px;
	background-color: #f4fff2;
	border: 1px solid #e7e7e7;
}
.s_username .user_photo{
	width: 138px;
	height: 138px;
	padding: 40px;
	float: left;
}
.s_username .user_photo img{
	width: 100%;
	height: 100%;
}
.s_username .s_hello	{
	margin-top: 90px;
	float: left;
	color: #666666;
}
.s_username span:nth-child(2n),.oColor a{
	color: #f08200;
}
.s_username .s_recharge span:nth-child(1){
	color: #569b49;
}
.s_nowint,.s_wallet,.s_recharge{
	width:120px;
	height: 70px;
	float: right;
	margin: 80px 70px 0 0;
	
}
.s_nowint span,.s_wallet span,.s_recharge span{
	display: block;
	text-align: center;
	color: #252525;
	font-size: 18px;
}
/*下面的福利*/
.new_gift{
	margin-top: 20px;
	width: 1082px;
	padding: 1px;
	height: 388px;
	border: 1px solid #e7e7e7;
	/*padding: 1px;*/ 
}
.new_gift img{
	width: 100%;
	height: 100%;
	
}
a{
	text-decoration: none;
}
</style>