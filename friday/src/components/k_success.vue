<template>
	<div>
		<!--支付详情-->
		<div class="p_detail">
			<img src="../pages/index/assets/image/success1.png" alt="" />
			<span>支付成功</span>
			<div class="p_Button">
				<router-link to="/Z_confirmOrder"><button class="but1">查看订单</button></router-link>
				<a href="index.html"><button class="but2">返回首页</button></a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {

	}
</script>

<style scoped>
	.k_register {
		width: 1280px;
		height: 130px;
		margin: 0 auto;
	}
	
	.k_register img {
		margin-top: 24px;
		float: left;
	}
	
	.p_detail {
		width: 1280px;
		height: 500px;
		margin: 0 auto;
		text-align: center;
	}
	
	.p_detail img {
		margin-top: 150px;
	}
	
	.p_detail span {
		display: block;
		font-size: 30px;
		color: #f08200;
		margin-top: 40px;
	}
	
	.p_Button {
		margin-top: 33px;
	}
	
	.p_Button button {
		width: 170px;
		height: 44px;
		outline: none;
		color: white;
		border: 0 solid;
		border-radius: 5px;
		font-size: 18px;
	}
	
	.p_Button .but1 {
		background-color: #f08200;
		margin-right:30px;
	}
	
	.p_Button .but2 {
		margin-left: 32px;
		background-color: #498e3d;
		margin-left:30px;
	}
</style>