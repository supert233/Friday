<template>
	<div class="s_upaddress">
		<div class="s_upad_he"><span>添加新地址</span></div>
		<div class="s_upad_bod">
			<div class="s_adname">
				<span style="color:red">* </span><span>收货人姓名 : </span><input type="text" name="" id="" value=""  v-model="sname"/>
			</div>
			<div class="s_adCity">
				<span style="color:red">* </span><span>所在地区 : </span><v-distpicker province="河南省" city="郑州市" area="中原区"></v-distpicker>
				
			</div>
			<div class="s_adTown">
				<span style="color:red">* </span><span>详细地址 : </span><input type="text" name="" id="" value="" v-model="badress"/>
			</div>
			<div class="s_adPhone">
				<span style="color:red">* </span><span>联系电话 : </span>
				<input type="tel" name="" id="" value=""  class="adPhone_move" v-model="sphone"/>
				<span>或固定电话:</span>
				<input type="tel" name="" id="" value="" class="adTelphone_fir" v-model="lphongf"/> - 
				<input type="tel" name="" id="" value="" class="adTelphone_sen" v-model="lphongl"/>
			</div>
			<div class="s_addresChos">
				<div class="letBox"></div>
				<label @change="chIndex()">
				 	<input type="checkbox" name="addres"  class="addresIndex"/>   设置为常用地址
				</label>
			</div>
			<button @click="resBtn" class="resBtn">保存</button>
		</div>
		
		
	</div>
</template>

<script>
	import VDistpicker from 'v-distpicker'
	export default{
		name:"s_upaddress",
		data(){
			return{
				cityInfo: '',
				sname:"",
				badress:"",
				sphone:"",
				lphongf:"",
				lphongl:""
			}
		},
		components: {
	     VDistpicker
	    },
		methods:{
			chIndex:function(){
				var addresIndex = document.getElementsByClassName("addresIndex")[0];
				var letBox = document.getElementsByClassName("letBox")[0];
				if (addresIndex.checked == true) {
					letBox.style.backgroundColor="dodgerblue";
				}else{
					letBox.style.backgroundColor="white";
				}
			},
			resBtn:function(){
				var a = document.getElementsByTagName("select")[0];
				if (this.sname=="") {
					alert("收货姓名不能为空")
				}else if(this.badress==""){
					alert("badress不能为空")
				}else if(this.lphongf=="" &&this.lphongl=="" &&this.sphone==""){
					alert("电话不能为空")
				}else{
					alert("进行下一项")
				}
				console.log(a.value);
			}
			
		}
		
	}
</script>

<style scoped>
	.s_upaddress{
		border: 1px solid #e7e7e7;
	}
	.s_upaddress .s_upad_he {
		height: 56px;
		width: 100%;
		border-bottom:  1px solid #e7e7e7 ;
		font-size: 18px;
		line-height: 56px;
		margin-bottom: 20px;
	}
	.s_upaddress .s_upad_he span{
		margin-left: 20px;
		color: #333333;
	}
	/*新增具体的输入选项*/
	.s_upad_bod{
		padding-left: 30px;
		height: 551px;
	}
	.s_upad_bod div{
		height: 36px;
		margin-bottom: 20px;
	}
	.s_upad_bod input{
		border: 1px solid #D3D3D3;
		outline: none;
		height: 32px;
		font-size: 16px;
		margin-left: 20px;
	}
	.s_adCity,.s_adTown,.s_adPhone{
		margin-left: 16px;
	}
	.s_adname input{
		width: 330px;
	}
	.s_adTown input{
		width: 470px;
	}
	.s_adPhone span{
		font-size: 16px;
	}
	.s_upad_bod .s_adPhone .adPhone_move{
		width: 150px;
		margin-right: 10px;
	}
	.s_upad_bod .s_adPhone .adTelphone_fir{
		width: 46px;
		margin:0 10px;
	}
	.s_upad_bod .s_adPhone .adTelphone_sen{
		width: 124px;
		margin:0 10px;
	}
	/*选择默认*/
	.s_upad_bod .s_addresChos{
		margin-left: 100px;
		display: block;
		height: 32px;
		font-size: 16px;
		line-height: 32px;
		margin-right: 10px;
		margin-bottom: 40px;
	}
	
	/*改变单选框样式*/
	.s_addresChos input{
		float: left;
		margin-right: 10px;
		opacity: 0;
	}
	.s_addresChos{
		position: relative;
	}
	.s_addresChos .letBox{
		width: 16px;
		height: 16px;
		border: 2px solid #D3D3D3;
		border-radius: 50%;
		position: absolute;
		top: 6px;
		left: 20px;
		
		
	}
	.s_addresChos .addresIndex{
		outline: none;
		border-radius: 50%;
	}
	/*城市三级联动*/
	.address{
		height: 32px;
		display: inline-block;
		margin-left: 20px;
	}
	.address select{
		outline: none;
		appearance: none;
		width: 138px;
		height: 32px;
		
	}
	/*按钮*/
	.resBtn {
		width: 150px;
		height: 50px;
		color: white;
		font-size: 20px;
		background-color: #F08200;
		border-radius: 3px;
		margin-left: 120px;
		outline: none;
		border: 0 solid;
	}
	
</style>