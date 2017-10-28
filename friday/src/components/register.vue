<template>
	<div class="k_header">
		<!--选择城市-->
		<div v-if="cityBol" class="k_city">
				<div class="K_cityBox">
					<span>建议您的收货地址: </span>
					<div class="K_cityVal">河南省郑州市</div>
					<v-distpicker province="河南省" city="郑州市" area="中原区"></v-distpicker>
					<button @click="city2">保存</button>
				</div>
			</div>
		<!--头部消息框-->
		<div class="k_massage">
			<!--消息内容-->
			<div class="k_msgCon">
				<!--选择城市-->
				<div @click="city1()" class="K_fromCity">
					所在城市 :
					<span>{{cityVal}}</span>
				</div>
				<!--登录信息-->
				<ul class="k_msgOn">
					<li>
						您好 ,
						<!--后台传入的登录名-->
						<div class="login">17701269859</div>
						<span>退出</span>
					</li>
					<li>
						<span>我的订单</span>
					</li>
					<li>
						<span>我的消息</span>
					</li>
					<li>
						<span>我是商家</span>
					</li>
					<li>
						<!--小图标-->
						<img src="../pages/join/assets/phone.png" alt="" /> 400-800-8820
					</li>
				</ul>
			</div>
		</div>
		<!--logo-->
		<div class="k_register">
			<img src="../pages/join/assets/logo.png" alt="" />
			<span>{{regCon}}</span>
		</div>
		<!--内容-->
		<div class="k_regCon">
			<!--注册内容-->
			<div class="k_regInp" v-if="regBol">
				<input class="p_regInp" type="text" placeholder="请输入手机号" v-model="username"/>
				<span v-if="truePhone"  style="margin-left:40px; color: red;font-size: 12px; position: absolute;top: 80px;">请输入正确的手机号</span>
				<span v-if="userIn"   style="margin-left:40px; color: red;font-size: 12px; position: absolute;top: 80px;">此用户已存在,请尝试登录</span>
				<input class="p_regInp" type="text" placeholder="请输入密码( 6-20 位号码字符 )"  v-model="password1" @focus="onfous"/>
				<span v-if="truepas"  style="margin-left:40px; color: red;font-size: 12px; position: absolute;top: 160px;">密码不能为空</span>
				<input class="p_regInp" type="text" placeholder="请再次输入密码确认"  v-model="password2"/>
				<span v-if="passNo" style="margin-left:40px; color: red;font-size: 12px;position: absolute;top: 235px;">两次密码不一致</span>
				<div class="p_verify">
					<input class="p_code" type="text" placeholder="验证码" />
					<img src="../pages/join/assets/yanzheng.png" alt="" />
					<span style="font-size: 12px;display: block;height: 42px; line-height: 42px; color: #f08200;">    看不清,换一张</span>
					<span v-if="varcode" class="varcode">请输入正确的验证码</span>
				</div>
				<div class="p_phone">
					<input class="p_regInp" type="text" placeholder="手机验证码" />
					<button>获取验证码</button>
				</div>
				<!--用户协议-->
				<div class="p_user">
					<label >
						<input type="checkbox" name="" id="" value=""  class="agree" checked="checked" @change="agree()"/> 我已阅读并同意《礼拜五用户协议》
					</label>
				</div>
				<button id="p_btn1" @click="add()">注册</button>
				<button id="p_btn2" @click="jump">登录</button>
			</div>

			<!--登录.内容-->
			<div class="k_regInp" v-if="enterBol">
				<input class="p_regInp" type="text" placeholder="请输入手机号" />
				<div class="p_verify">
					<input class="p_code" type="text" placeholder="验证码" />
					<img src="../pages/join/assets/yanzheng.png" alt="" />
					<span style="font-size: 12px;display: block;height: 42px; line-height: 42px;color: #f08200;">    看不清,换一张</span>
				</div>
				<div class="p_phone">
					<input class="p_regInp" type="text" placeholder="手机验证码" />
					<button>获取验证码</button>
				</div>
				<!--用户协议-->
				<div class="p_user">
					<input type="checkbox" name="" id="" value="" /> 自动登录
				</div>
				<button @click="regbol()" class="p_btn3">注册</button>
				<button class="p_btn4" @click="tray">登录</button>
				<div class="p_msg">
					<span>提示 : 未注册用户将直接注册成为礼拜五用户</span>
					<div class="p_join">
						--------------------- 用合作网站登录 -----------------
					</div>
					<!--微信-->
					<div class="p_weixin"></div>
					<!--qq-->
					<div class="p_qq"></div>
				</div>
			</div>
		</div>
		<div class="ontieMas" v-if="notes">
			{{note}}
		</div>
	</div>
</template>

<script>
	import VDistpicker from 'v-distpicker'
	export default{
		components: { VDistpicker },
		name:"register",
		data(){
			return {
				notes:false,
				cityBol:false,
				regBol:false,
				enterBol:true,
				passNo:false,
				truePhone:false,
				truepas:false,
				varcode:false,
				userIn:false,
				note:"asrdasfa",
				username:"",
				password1:"",
				password2:"",
				cityVal:"河南省郑州市",
				regCon:"会员登录"
			}
		},
		methods:{
			tray:function(){
//				this.notes=true;
//				setTimeout(function(){
//					console.log(this.notes);
//								this.notes=false;
//								this.regBol=false;
//								this.enterBol=true;
//				},1000);
			},
			city1:function(){
				this.cityBol = true;
				
			},
			city2:function(){
				//获取value值
				var selects = document.getElementsByTagName("select");
//				console.log(selects[1].value);
				this.cityVal = selects[0].value + selects[1].value;
				this.cityBol = false;
			},
			regbol:function(){
				this.regBol = true;
				this.enterBol = false;
				this.regCon = "会员注册"
			},
			//判断是否是手机号
			onfous:function(){
				var phoneIn = document.getElementsByClassName("p_regInp")[0];
				var phoneIntext=phoneIn.value;
				var reg=/^1[3578][0-9]{9}$/;
				if (reg.test(phoneIntext)) {
					this.truePhone = false;
				}else{
					this.truePhone = true;
				}
				
			},
			//注册存入数据库
//			adduser:function(){
//				this.$http.post('/api/user/addUser',{
//						username:this.username,
//						password:this.password1
//						
//					},{emulateJSON:true}).then(function(res){
//						console.log(res.body)
//					})
//			},
			//存储用户信息,注册按钮
			add:function(){
				var phoneIn = document.getElementsByClassName("p_regInp")[0];
				//图片验证码
				var verInp = document.getElementsByClassName("p_code")[0];
				var verTrue = verInp.value.toLocaleLowerCase();
				var phoneIntext=phoneIn.value;
				var reg=/^1[3578][0-9]{9}$/;
				if (!reg.test(phoneIntext)) {
					this.truePhone = true;
				}else if(  this.password1 ==""  ){
					this.truePhone = false;
					this.passNo=false;
					this.truepas=true;
				}else if(this.password1!=this.password2 ){
					this.passNo=true;
				}else if(verTrue != "xqcr"){
					
					this.passNo=false;
					this.truepas=false;
					this.varcode=true
					
				}else{
					this.varcode=false;
					this.$http.post('/api/user/addUser',{
						username:this.username,
						password:this.password1,
						sex:"",
						birthday:"",
						userphone:this.username,
						mymoney:"",
						myscore:""
						
					},{emulateJSON:true}).then(function(res){
						
						var keys=res.body.err;
						console.log(keys);
						if (keys == 1) {
//							this.notes=true;
//							this.notes=false;
							this.regBol=false;
							this.enterBol=true;
							this.userIn=false

						}else{
							this.userIn=true
						}
					})
						
					
				}
			},
			//验证是否同意条款
			agree:function(){
				var agree = document.getElementsByClassName("agree")[0];
				var pbtn1 = document.getElementById("p_btn1");
				var pbtn2 = document.getElementById("p_btn2");
				var c = agree.checked;
				
				if (!c) {
					pbtn1.disabled=true;
					pbtn2.disabled=true;
					pbtn1.style.backgroundColor="rgba(239,181,112,0.8)"
					pbtn2.style.backgroundColor="rgba(113,150,106,0.8)"
				}else{
					pbtn1.disabled=false;
					pbtn2.disabled=false;
					pbtn1.style.backgroundColor="#f08200"
					pbtn2.style.backgroundColor="#498e3d"
				}
				
			},
			//注册页面的登录按钮
			jump:function(){
				this.regBol=false;
				this.enterBol=true;
			}
		
		},	
	}
</script>

<style>
	body,
	div,
	img,
	input,
	ul,
	li,
	span,
	img {
		margin: 0;
		padding: 0;
	}
	
	ul,
	li {
		list-style: none;
		display: inline-block;
	}
	input{
		outline: none;
		text-indent: 10px;
	}
	button{
		outline: none;
	}
	.k_header {
		width: 100%;
		border-bottom: 1px solid #efeeec;
	}
	
	.k_massage {
		width: 100%;
		height: 36px;
		background-color: #eeeeee;
	}
	
	.k_massage .k_msgCon {
		width: 1280px;
		height: 36px;
		margin: 0 auto;
	}
	
	.k_msgCon .K_fromCity {
		font-size: 14px;
		color: #6f6f6f;
		line-height: 36px;
		float: left;
	}
	
	.k_msgCon .k_msgOn {
		font-size: 14px;
		color: #6f6f6f;
		line-height: 36px;
		float: right;
	}
	
	.k_msgOn .login {
		color: #4b943d;
		display: inline-block;
	}
	
	.k_msgOn span {
		border-right: 1px solid #6f6f6f;
		padding-right: 14px;
		padding-left: 14px;
	}
	
	.k_msgOn li:last-child {
		padding-left: 14px;
	}
	
	.k_msgOn img {
		float: left;
		margin-top: 9px;
		margin-right: 6px;
	}
	
	.k_register {
		width: 1280px;
		height: 130px;
		margin: 0 auto;
	}
	
	.k_register img {
		margin-top: 24px;
		float: left;
	}
	
	.k_register span {
		display: inline-block;
		font-size: 20px;
		line-height: 38px;
		margin-top: 54px;
		margin-left: 60px;
		padding-left: 42px;
		color: #666666;
		border-left: 1px solid #cecece;
	}
	
	.k_regCon {
		width: 1920px;
		height: 500px;
		background: url(../pages/join/assets/k_regBg.jpg) no-repeat;
		background-size: 100% 100%;
	}
	
	.k_regCon .k_regInp {
		width: 388px;
		height: 499px;
		background-color: white;
		margin-left: 1213px;
		border-top: 1px solid #eae9e9;
		border-bottom: 1px solid #eae9e9;
		position: relative;
	}
	
	.k_regCon .p_regInp {
		width: 306px;
		height: 42px;
		margin: 30px 40px 0;
		font-size: 14px;
	}
	
	.k_regCon .p_verify {
		width: 306px;
		height: 42px;
		margin: 30px 40px 0;
	}
	
	.k_regCon .p_verify input {
		width: 110px;
		height: 42px;
		font-size: 14px;
		float: left;
	}
	
	.k_regCon .p_verify img {
		float: left;
		margin-top: 5px;
		margin-left: 20px;
	}
	
	.p_phone {
		position: relative;
	}
	
	.p_phone button {
		position: absolute;
		right: 44px;
		top: 41px;
		width: 100px;
		height: 32px;
		border: 0 solid;
		color: white;
		background-color: #498e3d;
		font-size: 15px;
	}
	
	.p_user {
		width: 306px;
		margin-left: 40px;
		margin-top: 15px;
		margin-bottom: 15px;
		color: #666666;
		font-size: 13px;
	}
	
	#p_btn1,
	#p_btn2,.p_btn3,.p_btn4 {
		width: 134px;
		height: 46px;
		border: 0 solid;
		border-radius: 5px;
		color: white;
		font-size: 18px;
		outline: none;
	}
	
	#p_btn1,.p_btn3{
		margin-left: 40px;
		background-color: #f08200;
	}
	
	#p_btn2,.p_btn4 {
		margin-left: 42px;
		background-color: #498e3d;
	}
	
	.p_msg {
		width: 306px;
		margin: 15px auto 0;
	}
	
	.p_msg span {
		font-size: 14px;
		color: #999999;
	}
	
	.p_msg .p_join {
		font-size: 15px;
		color: #666666;
		margin-top: 15px;
		margin-bottom: 18px;
	}
	
	.p_msg .p_weixin {
		width: 40px;
		height: 40px;
		margin-left: 104px;
		display: inline-block;
		background: url(../pages/join/assets/weixin.png) no-repeat;
	}
	
	.p_msg .p_qq {
		width: 40px;
		height: 40px;
		margin-left: 18px;
		display: inline-block;
		background: url(../pages/join/assets/weixin.png) no-repeat;
		background-position: -58px;
	}
	
	
	/*选择城市*/
	.k_city{
		width: 100%;
		position: fixed;
		top: 0;
		bottom: 0;
		z-index: 1000;
		background-color: rgba(0,0,0,0.5);
	}
	.K_cityBox{
		width: 694px;
		height: 348px;
		margin: 350px auto 0;
		background: url(../pages/index/assets/cityBG.png) no-repeat;
		background-size: 100%;
		text-align: center;
	}
	.K_cityBox span{
		display: inline-block;
		margin-top: 64px;
	}
	.K_cityBox .K_cityVal{
		display: inline-table;
		text-align: center;
		width: 178px;
		border-radius: 5px;
		line-height: 36px;
		color: white;
		background-color: #498e3d;
		margin-left: 20px;
	}
	.address {
		word-spacing: 15px;
		margin-top: 40px;
		margin-bottom: 50px;
	}
	.K_cityBox button{
		width: 152px;
		height: 34px;
		background-color: #f08200;
		border: 0 solid;
		border-radius: 5px;
		outline: none;
		color: white;
		font-size: 20px;
	}
	/*验证*/
	.varcode{
		font-size: 12px;
		color: red;
		position: absolute;
		top: 310px;
		left: 40px;
	}
	/*提示信息*/
	.ontieMas{
		width: 150px;
		height: 60px;
		font-size: 18px;
		color: white;
		background-color: rgba(10,10,10,0.5);
		border-radius: 10px;
		text-align: center;
		line-height: 60px;
		position: absolute;
		top: 40%;
		right: 23%;
	}
</style>