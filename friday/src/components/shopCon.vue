<template>
	<div>
		<div class="shoppingImg">
			<img src="../pages/index/assets/image/goshopping.png" alt="" />
			<span>购物车</span>
		</div>
		<!--空购物车-->
		<div class="p_noshop" v-if="shopBol">
			<div>
				<img src="../pages/shopping/assets/goshop.png" alt="" />
				<span>您的购物车是空的</span>
				<a href="index.html"><button>去首页看看</button></a>
			</div>
		</div>
		<!--有东西的购物车-->
			<!--商品信息-->
		<div class="z_commodity" v-if="!shopBol">
			<div class="z_comContent">
				<!--商品信息-->
				<div class="z_comMenu">
					<input type="checkbox" class="inputBox"/><span class="shop">爱果果水果店</span>
					<span>规格</span>
					<span class="price">单价</span>
					<span class="many">数量</span>
					<span class="money">金额</span>
					<span class="delete">操作</span>
				</div>
				<!--具体商品-->
				<div class="z_oneCont">
					<div class="z_left">
						<input type="checkbox" /><img src="../pages/index/assets/introImg4.jpg" alt="" />
						<span class="z_mz">新疆哈密瓜500g</span>
					</div>
					<!--规格-->
					<span class="z_weight">500g</span>
					<!--单价-->
					<span class="z_price">¥20</span>
					<!--数量-->
					<div class="z_num">
						<span class="down" @click="inputMinus()">-</span>
						<input type="text" placeholder="1" readonly class="inputNum"/>
						<span class="up" @click="inputAdd()">+</span>
					</div>
					<!--金额-->
					<span class="z_money">¥20</span>
					<!--操作-->
					<span class="z_delete">删除</span>
					
				</div>
				<div class="z_sum">
					<span>商品金额</span>
					<span class="red">¥20</span>
				</div>
			</div>
			<div class="z_comSum">
				<span class="z_all1 z_all">全选</span><span class="z_all">批量删除</span><span class="comall">商品总计</span><span class="z_needPay">¥20</span><span class="onceShopping">立即购买</span>
			</div>
		</div>
	</div>
</template>

<script>
	export  default{
		data(){
			return{
				shopBol:false,		
			}
		},
		
		methods:{
			//数量增加的方法
  			inputAdd:function(){
  				var inputNum=document.getElementsByClassName("inputNum")[0];
//				console.log(inputNum.value);
				inputNum.value++;
  			},
  			//数量减少的方法
  			inputMinus:function(){
  				var inputNum=document.getElementsByClassName("inputNum")[0];
//				console.log(inputNum.value);
				if(inputNum.value <= 0) {
             		inputNum.value = 0;
           		}else{
					inputNum.value--;
				}
  			},
		}
	}
</script>

<style scoped>
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
	.shoppingImg{
		width:1280px;
		margin:0 auto;
		margin-top:18px;
		margin-bottom: 20px;
	}
	.shoppingImg span{
		margin-left:10px;
	}
	/*商品信息*/
	.z_commodity {
		width: 1280px;
		margin: 10px auto 0;
	}
	/*两次使用*/
	.z_comContent {
		width: 1278px;
		border: 1px solid #e9e9e9;
		margin-top: 20px;
		margin-bottom: 30px;
	}
	.z_comMenu {
		background-color: #f2f2f2;
		line-height: 46px;
	}
	.z_comMenu .inputBox{
		width:14px;
		height: 14px;
		margin-left:20px;
		margin-right:20px;
	
	}
	.z_comMenu .shop {
		margin-right: 300px;
	}
	.z_comMenu .price,
	.many,
	.money,
	.delete {
		margin-left: 144px;
	}
	.z_left {
		/*margin-top: 20px;*/
		margin-left: 25px;
		display: inline-block;
	}
	.z_left input{
		margin-right:10px;
	}
	.z_left .z_mz {
		display: inline-block;
		margin-top: 32px;
	}
	.z_left img {
		vertical-align: top;
		width: 78px;
		height: 78px;
		border: 1px solid #e9e9e9;
	}
	.z_oneCont {
		border-bottom: 1px solid #e9e9e9;
		display: flex;
		/*交叉轴垂直对齐方式*/
		align-items: center;
		/*整体设置外边距*/
		margin-top: 20px;
		padding-bottom: 20px;
	}
	.z_oneCont .z_weight {
		margin-left: 220px;
	}
	.z_oneCont .z_price {
		margin-left: 140px;
	}
	
	.z_oneCont .z_num {
		display: inline-block;
		margin-left: 120px;
	}
	.z_num span {
		display: inline-block;
		width: 26px;
		line-height: 26px;
		background-color: #f2f2f2;
		border: 1px solid #e9e9e9;
		float: left;
		text-align: center;
		font-size: 25px;
	}
	.z_num input {
		width: 46px;
		height: 26px;
		text-align: center;
		font-size: 15px;
		float: left;
		outline: none;
		border: 1px solid #e9e9e9;
	}
	.z_oneCont .z_money {
		margin-left: 120px;
	}
	.z_oneCont .z_delete{
		margin-left: 135px;
		color:#55964a;
		/*css鼠标手势*/
		cursor: pointer;
		
	}
	.z_sum {
		/*display: inline-block;*/
		/*整体div向右偏移20px*/
		margin-right: 20px;
		/*div中的内容右对齐*/
		text-align: right;
		line-height: 60px;
	}
	.z_sum .red {
		color: red;
		margin-left: 10px;
		margin-right: 10px;
		font-size: 18px;
	}
	.z_comSum{
		margin-top:40px;
		margin-bottom: 10px;
	}
	.z_comSum .z_all{
		color:#55964a;
		/*css鼠标手势*/
		cursor: pointer;
		
	}
	.z_comSum .z_all1{
		margin-right: 45px;
		margin-left:24px;
	}
	.z_comSum .z_needPay{
		color:red;
		font-size: 20px;
		margin-left:10px;
		margin-right: 15px;
	}
	.z_comSum .comall{
		margin-left: 840px;
	}
	.z_comSum .onceShopping{
		display: inline-block;
		background-color: #f08200;
		width:150px;
		line-height:50px;
		border:none;
		border-radius: 5px;
		text-align: center;
		color:white;
	}
</style>