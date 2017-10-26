<template>
	<div class="s_mymassage">
		<div class="s_mymaHe"><span>我的消息</span></div>
		<div class="s_mymaCon">
			<div class="s_mymaCon_he">
				<span>标题</span>
				<span>发送时间</span>
				<span>状态</span>
				<span>操作</span>
			</div>
			<div class="s_mymaCon_bod">
				<span>您的货物也发货,请耐心等待</span>
				<span>2017年10月23日 19:26:23</span>
				<span>未查看</span>
				<span><span>查看</span> | <span>删除</span></span>
			</div>
			<div class="s_mymaCon_bod">
				<span>您的货物也发货,请耐心等待</span>
				<span>2017年10月23日 19:26:23</span>
				<span>未查看</span>
				<span><span>查看</span> | <span>删除</span></span>
			</div>
			<div class="s_mymaCon_bod">
				<span>您的货物也发货,请耐心等待</span>
				<span>2017年10月23日 19:26:23</span>
				<span>未查看</span>
				<span><span>查看</span> | <span>删除</span></span>
			</div>
			<div class="s_mymaCon_bod">
				<span>您的货物也发货,请耐心等待</span>
				<span>2017年10月23日 19:26:23</span>
				<span>未查看</span>
				<span><span>查看</span> | <span>删除</span></span>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style scoped>
	.s_mymassage{
		border: 1px solid #e7e7e7;
	}
	/*头部*/
	.s_mymassage .s_mymaHe{
		height: 56px;
		width: 100%;
		border-bottom:  1px solid #e7e7e7 ;
		font-size: 18px;
		line-height: 56px;
	}
	.s_mymassage .s_mymaHe span{
		margin-left: 20px;
		color: #333333;
	}
	/*信息详情*/
	.s_mymassage .s_mymaCon{
		padding: 20px 20px 0;
		height: 551px;
	}
	.s_mymassage .s_mymaCon div{
		width: 1044px;
		display: flex;
		text-align: center;
		justify-content: space-around;
		align-content: space-between;
	}
	/*信息头部标题*/
	.s_mymaCon_he{
		height: 46px;
		line-height: 46px;
		background-color: #f2f2f2;
		border-left:1px solid #E9E9E9 ;
		border-right: 1px solid #E9E9E9;
	}
	.s_mymaCon_he span:nth-child(2){
		width: 160px;
		margin-left: 80px;
	}
	.s_mymaCon_he span:nth-child(1){
		/*width: 185px;*/
		margin-left: 40px;
	}
	/*信息内容*/
	.s_mymaCon .s_mymaCon_bod{
		height: 52px;
		line-height: 52px;
		border-bottom:1px solid #E9E9E9 ;
		border-left:1px solid #E9E9E9 ;
		border-right: 1px solid #E9E9E9;
		color:#666666;
		
	}
	.s_mymaCon .s_mymaCon_bod span span{
		color: #4B943D;
		font-size: 14px;
	}
</style>