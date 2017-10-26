<template>
	<div class="s_mycollection">
		<div class="s_collH"><span>我的收藏</span></div>
		<div class="s_collCon">
			<div class="s_collThing">
				<img src="../pages/index/assets/collect.png"/>
				<span class="commName">新西兰佳沛黄金奇异果</span>
				<span>此物只应天上有,人间难得几回闻</span>
				<div>
					<span class="nowMoney">¥{{nowMoney}}</span><span class="oldMoney">¥{{oldMoney}}</span>
					<img src="../pages/index/assets/littgou.png"/>
				</div>
				<button class="nulCol">已失效</button>
				<div class="noUse">
					
				</div>
			</div>
			<div class="s_collThing">
				<img src="../pages/index/assets/collect.png"/>
				<span class="commName">新西兰佳沛黄金奇异果</span>
				<span>此物只应天上有,人间难得几回闻</span>
				<div>
					<span class="nowMoney">¥{{nowMoney}}</span><span class="oldMoney">¥{{oldMoney}}</span>
					<img src="../pages/index/assets/littgou.png"/>
				</div>
				<button>取消收藏</button>
			</div>
			<div class="s_collThing">
				<img src="../pages/index/assets/collect.png"/>
				<span class="commName">新西兰佳沛黄金奇异果</span>
				<span>此物只应天上有,人间难得几回闻</span>
				<div>
					<span class="nowMoney">¥{{nowMoney}}</span><span class="oldMoney">¥{{oldMoney}}</span>
					<img src="../pages/index/assets/littgou.png"/>
				</div>
				<button>取消收藏</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"s_mycollection",
		data(){
			return{
				nowMoney:28.80,
				oldMoney:40.00
			}
		}
	}
</script>

<style scoped>
	.s_mycollection{
		border: 1px solid #e7e7e7;
	}
	/*头部*/
	.s_mycollection .s_collH{
		height: 56px;
		width: 100%;
		border-bottom:  1px solid #e7e7e7 ;
		font-size: 18px;
		line-height: 56px;
		
	}
	.s_mycollection .s_collH span{
		margin-left: 20px;
		color: #333333;
	}
	/*收藏具体内容*/
	.s_mycollection .s_collCon{
		width: 1000px;
		padding: 40px 0 0 40px;	
		/*display: flex;	*/
	}
	.s_collCon:after{
		  content: "";
            display: block;
            clear: both;
	}
	/*失效商品*/
	.s_collCon .s_collThing .nulCol{
		background-color: #999999;
	}
	.noUse{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		
		background-color: rgba(255,255,255,0.4);
	}
	.s_mycollection .s_collThing{
		width: 250px;
		height: 436px;
		padding: 40px 20px 0 20px;
		border: 1px solid #ececec;
		margin-bottom: 52px;
		margin-right: 38px;
		float: left;
		position: relative;
		/*display: inline-block;*/
		
	}
	.s_mycollection .s_collThing span{
		display: inline-block;
		font-size: 14px;
		color: #666666;
	}
	/*商品名字*/
	.s_mycollection .s_collThing .commName{
		font-size: 16px;
		color: black;
	}
	.s_mycollection .s_collThing .nowMoney{
		font-size: 20px;
		color: #ff5757;
		display: inline-block;
		margin-right: 16px;
		margin-bottom: 20px;
	}
	.s_mycollection .s_collThing .oldMoney{
		text-decoration: line-through;
	}
	.s_mycollection .s_collThing div img{
		float: right;
	}
	/*按钮*/
	.s_mycollection .s_collThing button{
		outline: none;border: 0 solid;
		border-radius: 18px;
		width: 150px;
		height: 36px;
		color: white;
		background-color: #4B943D;
		margin-left: 56px;
	}
</style>