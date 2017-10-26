<template>
	<div class="s_changPass">
		<div class="s_chPass_h"><span>修改密码</span></div>
		<div class="s_changeCon">
			<input type="text" />
			<input type="text" placeholder="请输入密码 (6-20位号码字符)"/>
			<input type="text" placeholder="请再次输入密码确认"/>
			<div class="s_verCode">
				<input type="" name="" id="" value="" placeholder="验证码" v-model="vecoInput"/>
				<img src="../pages/index/assets/图片验证.png"/>
				<span>看不清换一张</span>
				<span v-if="verCod" class="verCode">请输入正确的验证码</span>
			</div>
			
			<div class="s_phoneCode">
				<input type="" name="" id="" value=""  placeholder="手机验证码"  v-model="phcoInput"/>
				<!--{{phcoInput}}-->
				<button @click="getVer">获取验证码</button>
				<span v-if="phoneCode" class="phoneCode">请输入正确的手机验证码</span>
			</div>
			<button class="s_upChang" @click="upChange">提交修改</button>
			
		</div>
		<div class="succChange" v-if="succChang">
			<img src="../pages/index/assets/changsucc.png"/>
			<span>恭喜您修改成功</span>
		</div>
	</div>
</template>

<script>
	export default{
		name:"s_changPass",
		data(){
			return{
				verCod:false,
				phoneCode:false,
				succChang:false,
				phcoInput:"",
				vecoInput:"",
				code:Math.floor(Math.random()*9000)+1000,
			}
		},
		methods:{
			upChange:function(){
				var verPhone= this.vecoInput;
				if(verPhone=="xqcr"){
					this.verCod=false;
					if (this.phcoInput == this.code) {
						this.phoneCode=false;
						this.succChang=true
					}else{
						this.phoneCode=true;
					}
				}else{
					this.verCod=true
				}
			},
			getVer:function(){
				alert("您的验证码是"+this.code+"请保存好您的验证码");
			}
		}
	}
</script>

<style scoped>
	.s_changPass{
		border: 1px solid #e7e7e7;
		position: relative;
	}
	.s_changPass .s_chPass_h{
		height: 56px;
		width: 100%;
		border-bottom:  1px solid #e7e7e7 ;
		font-size: 18px;
		line-height: 56px;
	}
	.s_changPass .s_chPass_h span{
		margin-left: 20px;
		color: #333333;
	}
	/*改变密码内容*/
	.s_changPass .s_changeCon{
		padding: 40px 0 0 40px;
		height: 531px;
		
	}
	.s_changeCon input{
		display: block;
		outline: none;
		width: 306px;
		height: 42px;
		border: 1px solid #d3d3d3;
		background-color: #F9F9F9;
		text-indent: 12px;
		margin-bottom: 30px;
		font-size: 16px;
	}
	/*图片验证码*/
	.s_changeCon .s_verCode{
		width: 450px;
		height: 42px;
		margin-bottom: 30px;
		line-height: 42px;
	}
	.s_changeCon .s_verCode input{
		width: 110px;
		height: 42px;
		display: inline-block;
		float: left;
	}
	.s_changeCon .s_verCode img{
		margin-left: 20px;
		float: left;
		margin-top: 5px;
	}
	.s_changeCon .s_verCode span{
		color: #579b4a;
		font-size: 14px;
		margin-left: 10px;
	}
	/*手机验证码*/
	.s_changeCon .s_phoneCode{
		width: 470px;
		height: 42px;
		position: relative;
		margin-bottom: 40px;
		
	}
	.s_changeCon .s_phoneCode input{
		position: absolute;
		left: 0;
	}
	.s_phoneCode button{
		width: 100px;
		height: 32px;
		outline: none;
		border: 0 solid;
		color: white;
		background-color: #498E3D;
		font-size: 14px;
		position: absolute;
		top: 6px;
		left: 200px;
	}
	.s_changeCon .s_upChang {
		width: 150px;
		height: 50px;
		outline: none;
		border: 0 solid;
		border-radius: 4px ;
		color: white;
		background-color: #F08200;
		font-size: 20px;
	}
	/*右边成功的框*/
	.succChange {
		width: 452px;
		height: 182px;
		background-color: #D9D9D9;
		border-radius: 16px ;
		position: absolute;
		top: 30%;
		right: 10%;
		
	}
	.succChange img{
		float: left;
		margin-left: 116px;
		margin-right: 20px;
		margin-top: 70px;
	}
	.succChange span{
		color: #F08200;
		font-size: 24px;
		display: inline-block;
		line-height: 42px;
		margin-top: 70px;
	}
	/*错误提示信息*/
	.s_changeCon .s_verCode .verCode{
		font-size: 12px;
		color: red;
		float: right;
	}
	/*手机验证码错误信息*/
	.phoneCode{
		font-size: 12px;
		color: red;
		float: right;
	}
</style>