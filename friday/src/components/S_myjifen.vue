<template>
	<div class="s_myjifen">
		<div class="s_myj_head"><span>我的积分</span></div>
		<div class="s_myj_mas">
			<span class="s_myj_now">当前积分: <span>{{num}}分</span></span>
			<!--下面的所有订单-->
			<div class="s_myjAll">
				<div class="s_myj_masH">
					<span>积分日期</span>
					<span>变动</span>
					<span>来源</span>
				</div>
				<div class="s_myj_masW">
					<span>2017-10-20 20:37:23</span>
					<span>+100</span>
					<span>消费赠送</span>
				</div>
				<div class="s_myj_masW">
					<span>2017-10-20 20:37:23</span>
					<span>+100</span>
					<span>消费赠送</span>
				</div>
				<div class="s_myj_masW">
					<span>2017-10-20 20:37:23</span>
					<span>+100</span>
					<span>消费赠送</span>
				</div>
				<div class="s_myj_masW">
					<span>2017-10-20 20:37:23</span>
					<span>+100</span>
					<span>消费赠送</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"s_myjifen",
		data(){
			return{
				num:400
			}
		}
	}
</script>

<style scoped>
	.s_myjifen{
		border: 1px solid #e7e7e7;
	}
	.s_myj_head{
		height: 56px;
		width: 100%;
		border-bottom:  1px solid #e7e7e7 ;
		font-size: 18px;
		line-height: 56px;
	}
	.s_myj_head span{
		margin-left: 20px;
		color: #333333;
	}
	.s_myjifen .s_myj_mas{
		padding: 0 20px;
		height: 571px;
	}
	/*当前分数*/
	.s_myj_now{
		width: 1044px;
		height: 56px;
		line-height: 56px;
	}
	.s_myj_now span{
		color: #f08200;
	}
	.s_myj_mas .s_myjAll{
		border-top:1px solid #E9E9E9  ;
		border-left: 1px solid #E9E9E9;
		border-right: 1px solid #E9E9E9;
	}
	.s_myj_mas .s_myjAll div{
		width: 1044px;
		display: flex;
		text-align: center;
		justify-content: space-around;
		align-content: space-between;
	}
	.s_myj_masH{
		height: 46px;
		line-height: 46px;
		background-color: #f2f2f2;
	}
	.s_myj_masW{
		height: 52px;
		line-height: 52px;
		border-bottom:1px solid #E9E9E9 ;
	}
	.s_myj_masW span:nth-child(2){
		margin-left: -50px;
	}
</style>