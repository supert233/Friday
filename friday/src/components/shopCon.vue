<template>
	<div>
		<!--空购物车-->
		<div class="p_noshop">
			<div>
				<img src="../pages/shopping/assets/goshop.png" alt="" />
				<span>您的购物车是空的</span>
				<a href="index.html"><button>去首页看看</button></a>
			</div>
		</div>
		<!--有东西的购物车-->
		
	</div>
</template>

<script>
</script>

<style>
	div{
		margin: 0;
		padding: 0;
	}
	.p_noshop{
		width: 1280px;
		height:416px;
		margin: 0 auto;
		/*后面删除*/
		/*display:none;*/
	}
	.p_noshop div{
		width: 324px;
		margin: 180px auto 0;
	}
	.p_noshop img{
		float:left;
	}
	.p_noshop span{
		float: right;
		font-size: 20px;
		color: #666666;
		display: inline-block;
		margin-top: 24px;
		margin-right: 4px;
		margin-bottom: 15px;
	}
	.p_noshop button{
		float: right;
		width: 170px;
		height: 44px;
		background-color: #ec6a17;
		color: white;
		font-size: 18px;
		border: 0 solid;
		outline: none;
		border-radius: 4px;
	}
</style>