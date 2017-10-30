<template>
	<div class="z_addshoppingcar">		
		<div class="z_shoppingBox">
			<span class="z_shoppingWeight">请选择产品规格</span>
			<div class="z_shoppingCont">
				<h2>现价: ¥ {{curPrice}}</h2>
				<p class="weight">请选择规格: 
					<span @click="lightWeight()" :class="{'bgColor':bgbol1}">500g</span>
					<span @click="middleWeight()" :class="{'bgColor':bgbol2}">1000g</span>
					<span @click="veryWeight()" :class="{'bgColor':bgbol3}">2000g</span>
				</p>
				<div class="z_num">
					<span>数量 : </span>
					<div class="change">
						<span class="down" @click="inputMinus()">-</span>
						<input type="text" readonly="readonly" class="inputNum" placeholder="1" />
						<span class="up" @click="inputAdd()">+</span>
					</div>
					<span>件</span>
				</div>
				<button class="z_shoppingcar">添加到购物车</button>
			</div>
			
		</div>
	</div>
</template>

<script>
	export default {
		name:"z_addshoppingcar",
  		data(){
  			return{
  				curPrice:20,
  				bgbol1:false,
				bgbol2:false,
				bgbol3:false
  			}
  		},
  		methods:{
  			//数量增加的方法
  			inputAdd:function(){
  				var inputNum=document.getElementsByClassName("inputNum")[0];
//				console.log(inputNum.value);
//				inputNum.value=Math.floor(inputNum.value)+1;
				inputNum.value++;
				
  			},
  			//数量减少的方法
  			inputMinus:function(){
  				var inputNum=document.getElementsByClassName("inputNum")[0];
//				console.log(inputNum.value);
				if(inputNum.value <= 1) {
             		inputNum.value = 1;
           		}else{
//         			inputNum.value=Math.floor(inputNum.value)-1;
					inputNum.value--;
				}
  			},
  		//选择不同的规格
			lightWeight:function(){
				this.curPrice=20;
				this.bgbol1=!this.bgbol1;
				this.bgbol2=false;
				this.bgbol3=false;
			},
			middleWeight:function(){
				this.curPrice=30;
				this.bgbol2=!this.bgbol2;
				this.bgbol1=false;
				this.bgbol3=false;
			},
			veryWeight:function(){
				this.curPrice=40;
				this.bgbol3=!this.bgbol3;
				this.bgbol1=false;
				this.bgbol2=false;
			}
  		}
  	}
</script>

<style>
	/*改变规格背景颜色*/
	.bgColor{
		background-color:green;
	}
	.z_shoppingBox {
		position: relative;
		border: 5px solid #e2e2e2;
		width: 676px;
		height: 400px;
		background-color: white;
	}
	.z_shoppingBox .z_shoppingWeight {
		display: block;
		line-height: 68px;
		color: #498e3d;
		padding-left: 50px;
		border-bottom: 1px solid #e2e2e2;
	}
	.z_shoppingBox .z_shoppingCont{
		padding-left: 50px;
	}
	.z_shoppingCont h2{
		color:red;
		margin-top:32px;
	}
	.z_shoppingCont .weight {
		margin-top:32px;
		margin-bottom: 32px;
		font-size:18px;
	}
	.z_shoppingCont .weight span{
		display:inline-block;
		width:75px;
		line-height:28px;
		border:1px solid #d4d4d4;
		margin-left:25px;
		text-align: center;
		/*css鼠标手势*/
		cursor: pointer;
	}
	.z_shoppingCont .z_num{
		/*弹性布局*/
		display: flex;
		line-height:35px;
		margin-bottom: 30px;
		font-size: 18px;
	}
	.z_shoppingCont .z_num .change{
		margin-left:10px;
		margin-right: 10px;
		/*display: flex;*/
		
	}
	/*两个span和input中间因换行出现空格,分别浮动清除空格*/
	.z_shoppingCont .change span{
		display: inline-block;
		width:30px;
		line-height:34px;
		background-color:#f2f2f2;
		text-align: center;
		font-weight: 600;	
		border:1px solid #999;
		font-size: 25px;
		/*清除*/
		float: left;
		/*css鼠标手势*/
		cursor: pointer;
		
	}
	.z_shoppingCont .z_num .change input{
		text-align: center;
		font-size: 18px;
		width:70px;
		line-height:34px;
		border:1px solid #999;
		outline: none;
		/*清除*/
		float: left;
	}
	.z_shoppingcar{
		display: block;
		outline: none;
		border:none;
		background-color: #f08200;
		border-radius: 5px;
		width:200px;
		height:40px;
		color:white;
		font-size: 18px;
		margin-top:40px;
		
		
	}
	
		
</style>