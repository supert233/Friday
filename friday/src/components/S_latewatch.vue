<template>
	<div class="s_latewatch">
		<div class="s_latw_he"><span>最近浏览</span></div>
		<div class="s_latwCon">
			<div class="s_latwThing">
				<img src="../pages/index/assets/collect.png" class="commPhoto"/>
				<span class="commName">新西兰佳沛黄金奇异果</span>
				<span class="commRes">此物只应天上有,人间难得几回闻</span>
				<div>
					<span class="nowMoney">¥{{nowMoney}}</span><span class="oldMoney">¥{{oldMoney}}</span>
					<img src="../pages/index/assets/littgou.png"/>
				</div>
				<div class="delect" @click="deleat($event)">
					<img src="../pages/index/assets/deleat.png"/>
				</div>
			</div>
			
			<div class="s_latwThing">
				<img src="../pages/index/assets/collect.png" class="commPhoto"/>
				<span class="commName">新西兰佳沛黄金奇异果</span>
				<span class="commRes">此物只应天上有,人间难得几回闻</span>
				<div>
					<span class="nowMoney">¥{{nowMoney}}</span><span class="oldMoney">¥{{oldMoney}}</span>
					<img src="../pages/index/assets/littgou.png"/>
				</div>
				<div class="delect" @click="deleat($event)">
					<img src="../pages/index/assets/deleat.png"/>
				</div>
			</div>
			<div class="s_latwThing">
				<img src="../pages/index/assets/collect.png" class="commPhoto"/>
				<span class="commName">新西兰佳沛黄金奇异果</span>
				<span class="commRes">此物只应天上有,人间难得几回闻</span>
				<div>
					<span class="nowMoney">¥{{nowMoney}}</span><span class="oldMoney">¥{{oldMoney}}</span>
					<img src="../pages/index/assets/littgou.png"/>
				</div>
				<div class="delect" @click="deleat($event)">
					<img src="../pages/index/assets/deleat.png"/>
				</div>
			</div>
			<div class="s_latwThing">
				<img src="../pages/index/assets/collect.png" class="commPhoto"/>
				<span class="commName">新西兰佳沛黄金奇异果</span>
				<span class="commRes">此物只应天上有,人间难得几回闻</span>
				<div>
					<span class="nowMoney">¥{{nowMoney}}</span><span class="oldMoney">¥{{oldMoney}}</span>
					<img src="../pages/index/assets/littgou.png"/>
				</div>
				<div class="delect" @click="deleat($event)">
					<img src="../pages/index/assets/deleat.png"/>
				</div>
			</div>
			<div class="s_latwThing">
				<img src="../pages/index/assets/collect.png" class="commPhoto"/>
				<span class="commName">新西兰佳沛黄金奇异果</span>
				<span class="commRes">此物只应天上有,人间难得几回闻</span>
				<div>
					<span class="nowMoney">¥{{nowMoney}}</span><span class="oldMoney">¥{{oldMoney}}</span>
					<img src="../pages/index/assets/littgou.png"/>
				</div>
				<div class="delect" @click="deleat($event)">
					<img src="../pages/index/assets/deleat.png"/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"s_latewatch",
		data(){
			return{
				nowMoney:28.80,
				oldMoney:40.00
			}
		},
		methods:{
				deleat:function(e){
					var allcomm = document.getElementsByClassName("s_latwCon")[0];
					
					var _this = e.target.parentNode.parentNode;
					
					allcomm.removeChild(_this);
				}
			}
	}
</script>

<style scoped>
	.s_latewatch{
		border: 1px solid #e7e7e7;
	}
	/*头部*/
	.s_latewatch .s_latw_he{
		height: 56px;
		width: 100%;
		border-bottom:  1px solid #e7e7e7 ;
		font-size: 18px;
		line-height: 56px;
	}
	.s_latewatch .s_latw_he span{
		margin-left: 20px;
		color: #333333;
	}
	/*浏览具体内容*/
	.s_latewatch .s_latwCon{
		width: 1000px;
		padding: 20px 0 0 40px;	
		/*display: flex;*/	
	}
	.s_latwCon:after{
		   content: "";
            display: block;
            clear: both;

	}
	.s_latewatch .s_latwCon .s_latwThing{
		width: 250px;
		height: 376px;
		padding: 40px 20px 0 20px;
		border: 1px solid #ececec;
		margin-bottom: 40px;
		margin-right: 38px;
		float: left;
		position: relative;
	}
	.s_latwCon .s_latwThing span{
		display: inline-block;
		font-size: 14px;
		color: #666666;
	}
	/*商品图片*/
	.commPhoto{
		margin-bottom: 20px;
	}
	/*商品名字*/
	.s_latewatch .s_latwCon .s_latwThing .commName{
		font-size: 16px;
		color: black;
		line-height: 20px;
		margin-bottom: 5px;
	}
	.s_latwCon .s_latwThing .commRes{
		line-height: 20px;
		margin-bottom: 2px;
		
	}
	.s_latwCon .s_latwThing div .nowMoney{
		font-size: 20px;
		color: #ff5757;
		display: inline-block;
		margin-right: 16px;
		margin-bottom: 20px;
	}
	.s_latwCon .s_latwThing .oldMoney{
		text-decoration: line-through;
	}
	.s_latwCon .s_latwThing div img{
		float: right;
	}
	/*删除图标*/
	.delect{
		position: absolute;
		right: 10px;
		top: 10px;
	}
</style>