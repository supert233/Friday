<template>
	<!--换绑手机号-->
	<div class="s_changephone">
		<div class="s_chanph_he"><span>换绑手机</span></div>
		<div class="s_changeBody">
			<div v-if="changety1" class="s_changeTy1">
				<img src="../pages/index/assets/changphone1.png" class="s_changeHp"/>
				<input type="text" name="" id="" value="" />
				<div class="s_change_ver">
					<input type="text" name="" id="" value=""  placeholder="验证码" class="verInp"/>
					<img src="../pages/index/assets/图片验证.png"/>
					<span>看不清换一张</span>
				</div>
				<span v-if="vertyp" class="varMas">您的验证码输入有误,请重新输入!</span>
				<input type="text" name="" id="" value="" placeholder="输入密码验证身份"/>
				<button @click="ver" class="nexBtn">提交验证</button>
			</div>
			<div v-if="changety2" class="s_changeTy1">
				<img src="../pages/index/assets/changphone2.png" class="s_changeHp"/>
				<input type="text" name="" id="" value=""  placeholder="请输入手机号"/>
				<div class="s_change_ver">
					<input type="text" name="" id="" value=""  placeholder="验证码" class="verInp"/>
					<img src="../pages/index/assets/图片验证.png"/>
					<span>看不清换一张</span>
				</div>
				<span v-if="vertyp" class="varMas">您的验证码输入有误,请重新输入!</span>
				<input type="text"  value="" placeholder="手机验证码" class="phoneInp"/>
				<button @click="phoneVer" class="phoneVerbtn">获取验证码</button>
				<button @click="ver2" class="nexBtn">提交验证</button>
			</div>
			<div v-if="changety3" class="s_changeTy1">
				<img src="../pages/index/assets/changphone3.png" class="s_changeHp"/>
				<div class="changeSucc">
					<img src="../pages/index/assets/changsucc.png"/>
					<span>恭喜您修改成功</span>
				</div>
				
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"s_changePhone",
		data(){
			return{
				vertyp:false,
				changety1:true,
				changety2:false,
				changety3:false,
				code:Math.floor(Math.random()*9000)+1000,
			}
		},
		methods:{
			ver:function(){
				var verInp = document.getElementsByClassName("verInp")[0];
				var verTrue = verInp.value.toLocaleLowerCase();
				if (verTrue == "xqcr") {
					this.changety1=false;
					this.changety2=true;
					this.changety3=false
					
				}else{
					this.vertyp=true
					
				}
			},
			ver2:function(){
				//var code = Math.floor(Math.random()*9000)+1000;
				var verInp = document.getElementsByClassName("verInp")[0];
				var verTrue = verInp.value.toLocaleLowerCase();
				var phoneInp = document.getElementsByClassName("phoneInp")[0];
				if (verTrue == "xqcr" || phoneInp.value == code ) {
					this.changety1=false;
					this.changety2=false;
					this.changety3=true
					
					
				}else{
					this.vertyp=true
					
				}
			},
			phoneVer:function(){
				alert("您的验证码是"+this.code+"请保存好您的验证码");
			}
		}
	}
</script>

<style scoped>
	.s_changephone{
		border: 1px solid #e7e7e7;
	}
	/*换绑手机头部*/
	.s_changephone .s_chanph_he{
		height: 56px;
		width: 100%;
		border-bottom:  1px solid #e7e7e7 ;
		font-size: 18px;
		line-height: 56px;
	}
	.s_changephone .s_chanph_he span{
		margin-left: 20px;
		color: #333333;
	}
	.s_changeBody{
		height: 531px;
		padding: 40px 40px 0 ;
	}
	.s_changeBody .s_changeTy1{
		width: 712px;
		height: 364px;
		
	}
	/*头部三步的图片*/
	.s_changeHp{
		margin-bottom: 40px;
	}
	.s_changeTy1 input{
		outline: none;
		border: 1px solid #d3d3d3;
		height: 42px;
		width: 304px;
		text-indent: 10px;
		background-color: #f9f9f9;
		margin-bottom: 30px;
		display: block;
	}
	/*验证码*/
	.s_change_ver{
		height: 44px;
		margin-bottom: 30px;
	}
	.s_change_ver input{
		width: 112px;
		display: inline-block;
		margin-right: 20px;
		float: left;
	}
	.s_change_ver img{
		display: inline-block;
		float: left;
		margin-right: 10px;
		margin-top: 6px;
	}
	.s_change_ver span{
		color:#F08200 ;
		line-height: 44px;
	}
	/*提示信息*/
	.varMas{
		font-size: 12px;
		color: red;
	}
	
	.nexBtn {
		width: 150px;
		height: 50px;
		color: white;
		border-radius: 3px;
		background-color: #F08200;
		font-size: 20px;
		margin-top: 10px;
		outline: none;
		border: 0 solid;
		float: left;
	}
	/*获取手机验证码*/
	.phoneVerbtn{
		width: 100px;
		height: 32px;
		color: white;
		background-color: #498e3d;
		font-size: 12px;
		outline: none;
		border: 0 solid;
		position: relative;
		left: 50px;
		top: -68px;
	}
	/*修改电话第三部*/
	.changeSucc{
		height: 42px;
		margin: 100px 0 0 260px;
	}
	.changeSucc img {
		float: left;
		margin-right: 20px;
	}
	.changeSucc span{
		font-size: 24px;
		color: #ec6a17;
		line-height: 42px;
	}
</style>