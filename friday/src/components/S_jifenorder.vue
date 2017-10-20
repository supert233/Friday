<template>
	<div class="jifenorder">
		<div class="s_jo_head"><span>积分订单</span></div>
		<div class=""> 
			<div  class="order_has">
					<div class="s_hasHea">
						<span>订单号: {{orderNum}}</span>
						<span>下单日期: {{orderTime}}</span>
						<span>{{orderStor}}</span>
						<span>订单状态: <span>{{orderType}}</span></span>
					</div>
					<div class="h_hasMas">
						<div class="h_orderThing">
							<img src="../pages/index/assets/apple.png" alt="" />
							<span>云南邵通丑苹果</span>
							<span>六个装</span>
							<span>¥35.0 X 1</span>
						</div>
						<div class="h_orderMone">
							<span>店铺合计:¥ 105.0</span><span>(含运费:¥ 8.0)</span>
						</div>
						<div class="h_orderFun">
							<span><router-link to="/">查看详情</router-link></span>
							<!--关闭-->
							<button >删除订单</button>
							
						</div>
						<!---->
					</div>
				</div>
			</div>
	</div>
</template>

<script>
	export default{
		name:"s_myorder",
		data(){
			return{
				orn:false,
				orh:true,
				orderNum:1503124569,
				orderTime:"2017.10.20  13:58:12",
				orderStor:'爱爱水果店',
				orderType:'关闭',
//				//九个按钮状态
//				blOff:true,
//				blPay:false,
//				bCancel:false,
//				bSend:false,
//				bReceive:false,
//				brepyDown:false
			}
		},
		methods:{
			
		}
		
	}
</script>

<style scoped>
	.jifenorder{
		border: 1px solid #e7e7e7;
	}
	.s_jo_head{
		height: 56px;
		width: 100%;
		border-bottom:  1px solid #e7e7e7 ;
		font-size: 18px;
		line-height: 56px;
	}
	.s_jo_head span{
		margin-left: 20px;
		color: #333333;
	}
	/*积分订单详情*/
	.order_has{
		width: 1044px;
		margin-bottom: 20px;
		border: 1px solid #e9e9e9;
			padding: 0 20px;
	}
	.s_hasHea{
		width: 1044px;
		height: 46px;
		background-color: #f2f2f2;
		font-size: 16px;
		color: #333333;
	}
	.s_hasHea span{
		line-height: 46px;
		margin-right: 50px;
	}
	.s_hasHea span:nth-child(3){
		color: #4b943d;
	}
	.s_hasHea span:nth-child(1){
		margin-left: 20px;
	}
	.s_hasHea span:nth-child(4){
		display: inline-block;
		float: right;
	}
	.s_hasHea span span{
		color: #F08200;
		margin: 0;
	}
	/*订单具体信息*/
	.h_hasMas{
		display: flex;
		
		align-items: center;
	}
	.h_orderThing{
		width: 697px;
		height: 120px;
		border-right: 1px solid #e9e9e9;
		display: flex;
		align-items: center;
		font-size: 14px;
	}
	.h_hasMas .h_orderThing img{
		width: 78px;
		height: 78px;
		border: 1px solid #dedede;
		margin: 0 20px;
	}
	.h_orderThing span{
		display: inline-block;
		color: #666666;
		margin-right: 120px;
	}
	.h_orderThing span:nth-child(2){
		color: #999999;
	}
	
	/*店铺合计*/
	.h_orderMone{
		text-align: center;
		width:208px ;
		border-right: 1px solid #e9e9e9;
		height: 100%;
	}
	.h_orderMone span{
		width:208px ;
		display: inline-block;
		margin-bottom: 10px;
		color: #666666;
	}
	/*订单处理*/
	.h_orderFun{
		width: 136px;
		font-size: 14px;
		text-align: center;
	}
	.h_orderFun span{
		display: block;
		color: #666666;
	}
	.h_orderFun span a{
		/*text-decoration: none;*/
		color: #4B943D;
	}
	.h_orderFun button{
		width: 90px;
		height: 30px;
		color: white;
		margin: 10px 20px;
		background-color: #F08200;
		outline: none;
		border: 0 solid;
		border-radius: 3px;
	}
	.h_orderFun button:hover{
		cursor: pointer;
	}
</style>