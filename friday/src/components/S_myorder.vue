<template>
	<div class="myorder">
		<div class="s_myo_head"><span>我的订单</span></div>
		<div class="s_myo_bod">
			<ul class="s_myo_chos">
				<li><span @click="change($event)" class="trs">全部</span> <span>|</span></li>
				<li><span @click="change($event)" class="trs">待付款</span><span>|</span></li>
				<li><span @click="change($event)" class="trs">代发货</span><span>|</span></li>
				<li><span @click="change($event)" class="trs">待收货</span><span>|</span></li>
				<li><span @click="change($event)" class="trs">待评价</span><span>|</span></li>
				<li><span @click="change($event)" class="trs">退款/售后</span><span>|</span></li>
				<li><span @click="change($event)" class="trs">已完成/关闭</span></li>
				<li class="order_ret">订单回收站</li>
			</ul>
			
			<div v-if="orn" class="order_n">
				<div class="order_n_con">
					<img src="../pages/index/assets/order_n.png"/>
					<div class="s_return">
						<span>您还没有订单呦 !</span>
						<router-link to="/"><button>去首页看看</button></router-link>
					</div>
				</div>
			</div>
			<div  v-if="orh" class="order_has">
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
						<span><router-link to="/s_orderDetail">查看详情</router-link></span>
						<!--关闭-->
						<button v-if="blOff">删除订单</button>
						<!--待付款-->
						<button v-if="blPay">去支付</button>
						<button v-if="blPay">取消订单</button>
						<!--待发货-->
						<button v-if="bCancel">申请退款</button>
						<!--已发货-->
						<button v-if="bSend">确认收货</button>
						<button v-if="bSend">查看物流</button>
						<!--已收货-->
						<button v-if="bReceive">去评价</button>
						<button v-if="bReceive">交易完成</button>
						<!--退款失败-->
						<button v-if="brepyDown">申请平台介入</button>
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
				orn:true,
				orh:false,
				orderNum:1503124569,
				orderTime:"2017.10.20  13:58:12",
				orderStor:'爱爱水果店',
				orderType:'关闭',
				//九个按钮状态
				blOff:true,
				blPay:false,
				bCancel:false,
				bSend:false,
				bReceive:false,
				brepyDown:false
			}
		},
		methods:{
			change:function(e){
			var _this = e.target;
	 		var  s = _this.innerText;
	 		var trs = document.getElementsByClassName("trs");
	 		for (var i = 0; i < trs.length; i++) {
	 			
	 			if (s == trs[i].innerText) {
	 				 _this.style.color="white";
	 				 _this.style.backgroundColor="#F08200";
	 			}
	 			if(s != trs[i].innerText){
	 				trs[i].style.color="#666666";
	 				trs[i].style.backgroundColor="white";
	 				trs[i].innerText=trs[i].innerText;

	 				
	 			}
	 		}
				
			}
		}
		
	}
</script>

<style scoped>
	div,ul,li,span,p,a{
		margin: 0;
		padding: 0;
	}
	
	.myorder{
		border: 1px solid #e7e7e7;
	}
	.s_myo_head{
		height: 56px;
		width: 100%;
		border-bottom:  1px solid #e7e7e7 ;
		font-size: 18px;
		line-height: 56px;
	}
	.s_myo_head span{
		margin-left: 20px;
		color: #333333;
	}
	.s_myo_bod{
		padding: 0 20px;
		/*width: 90%;*/	
	}
	/*中间的几个选项*/
	.s_myo_bod .s_myo_chos{
		list-style: none;
		/*width: ;*/
		height: 68px;
	}
	.s_myo_bod .s_myo_chos li{
		
		float: left;
		margin: 20px 0;
		
		font-size: 16px;
		line-height: 28px;
		margin-left: 20px;
		color: #666666;
	}
	.s_myo_bod .s_myo_chos li span:nth-child(2n-1){
		display: inline-block;
		padding: 0 10px;
		height: 28px;
		text-align: center;
		line-height: 28px;
		
		
	}
	.s_myo_bod .s_myo_chos li span:nth-child(2n){
		display: inline-block;
		
		margin-left: 20px;
		margin-right: 10px;
		
		line-height: 28px;
		
		float: initial;
	}
	/*订单回收站*/
	.s_myo_bod .s_myo_chos .order_ret{
		float: right;
	}
	.s_myo_bod  .s_myo_chos .order_ret {
		color: #4b943d;
	}
	/*鼠标移入*/
	.s_myo_bod .s_myo_chos li span:nth-child(2n-1):hover{
		background-color: #F08200;
		cursor: pointer;
		color: white;
	}
	.order_ret:hover,.order_n .order_n_con .s_return button:hover{
		cursor: pointer;
	}
	/*没有订单内容*/
	.order_n_con{
		height: 100px;
		margin: 202px 380px;
	}
	
	.order_n .order_n_con .s_return{
		width: 170px;
		height: 100px;
		float: right;
		
	}
	.order_n .order_n_con .s_return span{
		display: block;
		color: #666666;
		font-size: 20px;
		margin-bottom: 28px;
	}
	.order_n .order_n_con .s_return button{
		outline: none;
		border: 0 solid;
		border-radius: 3px;
		width: 170px;
		height: 44px;
		background-color: #F08200;
		color: white;
		font-size: 18px;
	}
	
	/*有订单的情况*/
	.order_has{
		width: 1044px;
		margin-bottom: 20px;
		border: 1px solid #e9e9e9;
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
		/*display: flex;*/
		/*float: left;*/
		width: 1044px;
		align-items: center;
	}
	.h_hasMas:after{
		content: "";
            display: block;
            clear: both;
	}
	.h_orderThing{
		width: 697px;
		height: 120px;
		border-right: 1px solid #e9e9e9;
		display: flex;
		align-items: center;
		font-size: 14px;
		float: left;
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
	.h_hasMas .h_orderMone{
		text-align: center;
		width:208px ;
		float: left;
		border-right: 1px solid #e9e9e9;
		height: 100%;
		padding: 3% 0;
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
		float: right;
		padding-top: 3%;
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