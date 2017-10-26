<template>
	<div class="s_rechargeCard">
		<div class="s_recardHe">
			<span>充值卡兑换</span>
			<button>查看账单</button>
		</div>
		<div class="s_recardBod">
			<input type="" name="" id="" value="" placeholder="请输入充值卡兑换码进行兑换"/>
			<button>充值</button>
		</div>
	</div>
</template>

<script>
	export default{
		name:"s_rechargeCard",
		
	}
</script>

<style scoped>
	.s_rechargeCard{
		border: 1px solid #e7e7e7;
	}
	/*标题*/
	.s_rechargeCard .s_recardHe{
		height: 56px;
		width: 100%;
		border-bottom:  1px solid #e7e7e7 ;
		font-size: 18px;
		line-height: 56px;
		margin-bottom: 50px;
	}
	.s_rechargeCard .s_recardHe span{
		margin-left: 20px;
		color: #333333;

	}
	.s_rechargeCard .s_recardHe button{
		width: 90px;
		height: 30px;
		outline: none;
		border: 0 solid;
		color: white;
		background-color: #498e3d;
		border-radius: 4px;
		float: right;
		margin-right: 20px;
		margin-top: 15px;
	}
	/*兑换卡部分*/
	.s_rechargeCard .s_recardBod{
		height: 521px;
		padding: 0 30px;
	}
	.s_rechargeCard .s_recardBod input{
		width: 474px;
		height: 52px;
		border: 1px solid #e8e8e8;
		outline: none;
		text-indent: 20px;
		font-size: 18px;
		margin-bottom: 100px;
		display: block;
	}
	.s_rechargeCard .s_recardBod button{
		outline: none;
		border: 0 solid;
		width: 150px;
		height: 50px;
		color: white;
		border-radius: 4px;
		background-color: #F08200;
		font-size: 18px;
	}
</style>