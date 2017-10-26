<template>
	<div class="s_jifenDetail">
		<div class="s_ordetailHe">
			<span>订单编号 : {{orderNum}}</span>
			<span>订单状态 : <span>{{orderType}}</span></span>
			<button class="odelBtn">取消订单</button><button>立即兑换</button>
		</div>
		<div class="s_orderrailBod">
			<ul>
				<li><span>支付方式</span><span>支付宝</span></li>
				<li><span>支付流水号</span><span></span></li>
				<li><span>下单时间</span><span></span></li>
				<li><span>支付时间</span><span></span></li>
				<li><span>发货时间</span><span></span></li>
				<li><span>收货时间</span><span></span></li>
				<li><span>取消时间</span><span></span></li>
				<li><span>申请退款时间</span><span></span></li>
				<li><span>退款原因</span><span></span></li>
				<li><span>退款时间</span><span></span></li>
				<li><span>订单备注</span><span></span></li>
			</ul>
			<h4>收货人信息</h4>
			<ul>
				<li><span>收货人姓名</span><span>苏某人</span></li>
				<li><span>地址</span><span></span></li>
				<li><span>联系方式</span><span>手机:12345678960/固话</span></li>
			</ul>
			<h4>发票信息</h4>
			<ul>
				<li><span>发票抬头</span><span></span></li>
				<li><span>发票内容</span><span></span></li>
			</ul>
			<h4>物流信息</h4>
			<ul>
				<li><span>联系人 :</span> <span>小哥张</span></li>
				<li><span>联系方式</span><span>126344668</span></li>
			</ul>
			<h4>卖家信息</h4>
			<ul>
				<li><span>店铺名称</span><span>爱爱水果店</span></li>
				<li><span>真实姓名</span><span></span></li>
				<li><span>联系电话</span><span>231565489</span></li>
			</ul>
			<div class="s_orderCommons">
				<div class="s_orCommhe">
					<span>爱爱水果店</span>
					<span>规格</span>
					<span>单价</span>
					<span>数量</span>
					<span>积分</span>
				</div>
				<div class="s_orCommBod">
					<img src="../pages/index/assets/apple.png" alt="" />
						<span>云南邵通丑苹果</span>
						<span>8个装</span>
						<span>¥569</span>
						<span>1</span>
						<span>50积分</span>
				</div>
			</div>
			<div class="payMoney">实付金额 : <span>{{orderMoney}}积分</span></div>
			<button class="delOrder">取消订单</button><button class="payNow">立即兑换</button>
		</div>
	</div>
</template>

<script>
	export default{
		name:"s_jifenDetail",
		data(){
			return{
				orderNum:"1321564651561",
				orderType:"待兑换",
				orderMoney:500
			}
		}
	}
</script>

<style scoped>
	.s_jifenDetail{
		border: 1px solid #e7e7e7;
		margin-bottom: 40px;
	}
	/*头部*/
	.s_jifenDetail .s_ordetailHe{
		height: 56px;
		width: 100%;
		border-bottom:  1px solid #e7e7e7 ;
		font-size: 18px;
		line-height: 56px;
		
	}
	.s_jifenDetail .s_ordetailHe span{
		margin-left: 20px;
		color: #333333;
	}
	.s_jifenDetail .s_ordetailHe span span{
		color: #f39b33;
		margin: 0;
	}
	.s_jifenDetail .s_ordetailHe span:nth-child(2){
		margin-left: 150px;
	}
	.s_ordetailHe button{
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
	.s_jifenDetail .s_ordetailHe .odelBtn{
		background-color: #999999;
	}
	/*小分项*/
	h4{
		color: #498E3D;
		 font-weight:normal;
		 margin-bottom: 20px;
	}
	/*订单详情具体情况*/
	.s_orderrailBod{
		padding: 20px 20px 40px 20px; 
	}
	.s_orderrailBod ul{
		list-style: none;
		padding: 20px;
		background-color: #F9F9F9;
		border:  1px  solid #e9e9e9;
		color: #666666;
		margin-bottom: 20px;
	}
	.s_orderrailBod ul li{
		margin-bottom: 5px;
	}
	.s_orderrailBod ul li span:nth-child(1){
		width: 100px;
		display: inline-block;
	}
	.s_orderrailBod ul li span:nth-child(2){
		margin-left: 20px;
	}
	/*商品的信息*/
	.s_orderCommons {
		border: 1px solid #e9e9e9;
	}
	.s_orderCommons .s_orCommhe{
		
		background-color: #F2F2F2;
		height: 46px;
		padding-left: 20px;
		
	}
	.s_orderCommons .s_orCommhe span{
		display: inline-block;
		line-height: 46px;
		width: 100px;
		margin-right: 80px;
		text-align: center;
	}
	.s_orderCommons .s_orCommhe span:nth-child(1){
		margin-left: 40px;
	}
	.s_orderCommons .s_orCommhe span:nth-child(2){
		margin-left: 50px;
	}
	.s_orCommBod {
		/*width: 697px;*/
		height: 120px;
		border-right: 1px solid #e9e9e9;
		display: flex;
		align-items: center;
		font-size: 14px;
	}
	.s_orCommBod img{
		width: 78px;
		height: 78px;
		border: 1px solid #dedede;
		margin: 0 20px;
	}
	.s_orCommBod span{
		width: 100px;
		display: inline-block;
		color: #666666;
		margin-right: 80px;
		text-align: center;
	}
	/*金额*/
	.payMoney{
		margin: 30px 0 30px 890px;
		
	}
	.payMoney span{
		font-size: 20px;
		color: #FF5757;
	}
	/*按钮*/
	.s_orderrailBod button{
		width: 150px;
		height: 50px;
		color: white;
		border-radius: 4px;
		font-size: 18px;
		outline: none;
		border: 0 solid;
	}
	.s_orderrailBod .delOrder{
		margin-left: 700px;
	}
	.s_orderrailBod .payNow{
		margin-left: 40px;
		background-color: #F08200;
	}
</style>