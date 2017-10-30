<template>
	<div class="z_confirmOrder">
		<!--收货人信息1 没有任何地址的情况下-->
		<div class="s_upad_bod z_firstShow">
			<span>收货人信息</span>
			<div class="s_orderCont">
				<div class="s_adname">
					<span style="color:red">* </span><span>收货人姓名 : </span><input type="text" placeholder="  收货人姓名"/>
				</div>
				<div class="s_adCity">
					<span style="color:red">* </span><span>所在地区 : </span>
					<v-distpicker  province="河南省" city="郑州市" area="中原区"></v-distpicker>
	
				</div>
				<div class="s_adTown">
					<span style="color:red">* </span><span>详细地址 : </span><input type="text" placeholder="  用来接收货物的详细地址"/>
				</div>
				<div class="s_adPhone">
					<span style="color:red">* </span><span>联系电话 : </span>
					<input type="tel"  class="adPhone_move" placeholder="  推荐使用手机号"/>
					<span >或固定电话:</span>
					<input type="tel"  class="adTelphone_fir " placeholder="  区号"/> -
					<input type="tel" class="adTelphone_sen " placeholder="  电话号码"/>
				</div>
				<button>确定并设为默认地址</button>
			</div>
		</div>
		<!--收件人信息2 已经存有地址的情况下-->
		<div class="havedInf">
			<span>收货人信息</span>
			<!--添加地址事件按钮-->
			<button @click="increaseAdd()">使用新地址</button>
			<div>
				<input type="radio" name="haveAdd" checked/>王小兵 北京市 昌平区 天通苑明天第一城4号楼101 固定电话010-1234567 <span class="addelete">删除</span><span class="adupdate">修改</span><span class="z_addefault">默认地址</span>
			</div>
			<div>
				<input type="radio" name="haveAdd"/>{{newAdd}}<span class="addelete">删除</span><span class="adupdate">修改</span><span class="addefault">设置为默认地址</span >
			</div>
			<span class="haveDown">展开其他地址  <img src="../pages/index/assets/image/havedown.png" alt="" /></span>
			<span class="haveUp">收起地址 <img src="../pages/index/assets/image/haveup.png" alt="" /></span>
		</div>
		
		<!--弹出框 添加地址-->
		<div class="alertBox">
			<div class="s_upad_bod">
				<span class="s_addAdress" >添加地址</span>
				<div class="s_orderCont">
					<div class="s_adname">
						<span style="color:red">* </span><span>收货人姓名 : </span><input type="text" placeholder="  收货人姓名" class="z_name"/>
					</div>
					<div class="s_adCity">
						<span style="color:red">* </span><span>所在地区 : </span>
						<v-distpicker   class="z_name" province="河南省" city="郑州市" area="中原区"></v-distpicker>
		
					</div>
					<div class="s_adTown">
						<span style="color:red">* </span><span>详细地址 : </span><input type="text" placeholder="  用来接收货物的详细地址"  class="z_name"/>
					</div>
					<div class="s_adPhone">
						<span style="color:red">* </span><span>联系电话 : </span>
						<input type="tel"  class="adPhone_move z_name" v-model='phone' placeholder=" 推荐使用手机号" />
						<span>或固定电话:</span>
						<input type="tel"  class="adTelphone_fir z_name" placeholder="  区号"/> -
						<input type="tel" class="adTelphone_sen z_name" placeholder="  电话号码"/>
					</div>
					<!--添加事件的按钮-->
					<button class="z_addSure" @click="addSure()">保存</button>
					<button class="z_addCancel" @click="addCancel()">取消</button>
				</div>
			</div>
		</div>
		
		<!--商品信息-->
		<div class="z_commodity">
			<span>商品信息</span>
			<div class="z_comContent">
				<!--商品信息-->
				<div class="z_comMenu">
					<span class="shop">爱果果水果店</span>
					<span>规格</span>
					<span class="price">单价</span>
					<span class="many">数量</span>
					<span class="money">金额</span>
				</div>
				<!--具体商品-->
				<div class="z_oneCont">
					<div class="z_left">
						<img src="../pages/index/assets/image/introImg4.jpg" alt="" />
						<span class="z_mz">新疆哈密瓜500g</span>
					</div>
					<!--规格-->
					<span class="z_weight">500g</span>
					<!--单价-->
					<span class="z_price ">¥{{shoppingPrice}}</span>
					<!--数量-->
					<div class="z_num">
						<span class="down" @click="inputMinus()">-</span>
						<!--input手动可以改变,js动态不能随着改变-->
						<input type="text" placeholder="1" readonly class="inputNum" v-model="shoppingNum"/>
						<span class="up" @click="inputAdd()">+</span>
					</div>
					<!--金额-->
					<span class="z_money">¥{{shoppingSum}}</span>
				</div>
				<div class="z_sum">
					<span>运费</span>
					<span class="red">¥0</span>
					<span>商品金额</span>
					<span class="red">¥{{shoppingSum}}</span>
					<span>商品合计</span>
					<span class="red">¥{{shoppingSum}}</span>
				</div>
			</div>
		</div>
		<!--开票信息-->
		<div class="z_ticket">
			<div class="z_tickTop">
				<!--上部分-->
				<span>开票信息</span>
				<!--单选框-->
				<label>	
					<input type="radio" name="kind" />不需要
					<input type="radio" name="kind" />  个人
					<input type="radio" name="kind" />  单位
				</label>
			</div>
			<!--抬头-->
			<div class="z_head">
				<span>发票抬头:</span>
				<input type="text" /><span style="color:#ee7c3d">*</span>
				<span>请填写后认真核对发票信息</span>
			</div>

			<!--添加备注-->
			<div class="z_addRemark">
				<span>添加订单备注</span>
				<input type="text" placeholder="限45个字,请填写有关商品、支付、发票等信息" />
			</div>
			<!--订单内容-->
			<div class="z_comContent">
				<!--商品信息-->
				<div class="z_comMenu">
					<span class="shop">爱果果水果店</span>
					<span>规格</span>
					<span class="price">单价</span>
					<span class="many">数量</span>
					<span class="money">金额</span>
				</div>
				<!--具体商品-->
				<div class="z_oneCont">
					<div class="z_left">
						<img src="../pages/index/assets/image/introImg4.jpg" alt="" />
						<span class="z_mz">新疆哈密瓜500g</span>
					</div>
					<!--规格-->
					<span class="z_weight">500g</span>
					<!--单价-->
					<span class="z_price">¥{{shoppingPrice}}</span>
					<!--数量-->
					<div class="z_num">
						<span class="down">-</span>
						<input type="text" placeholder="1" readonly  v-model="shoppingNum"/>
						<span class="up">+</span>
					</div>
					<!--金额-->
					<span class="z_money">¥{{shoppingSum}}</span>
				</div>
				<div class="z_sum">
					<span>运费</span>
					<span class="red">¥0</span>
					<span>商品金额</span>
					<span class="red">¥{{shoppingSum}}</span>
					<span>商品合计</span>
					<span class="red">¥{{shoppingSum}}</span>
				</div>
			</div>
		</div>
		<div class="z_arriveTime">
			<span class="nextDay">次日达·礼拜五专享</span>
			<div class="time">
				<span class="select">选择送达时间: </span>
				<span class="sureDate">{{curTime}}{{Htext}}</span>
				<img src="../pages/index/assets/image/sureTime.png" alt="" />
				<!--修改时间事件按钮-->
				<span class="clickUpdate" @click="showBtn()">点击修改</span>
			</div>
			<!--修改时间选择框-->
			<div class="timeBox">
				<div class="transBox"></div>
				<table border="0" cellspacing="0" cellpadding="0">
					<tr>
						<td @click="time($event)">10:00-13:00</td>
						<td @click="time($event)">11:00-14:00</td>
						<td @click="time($event)">12:00-15:00</td>
						<td @click="time($event)">13:00-16:00</td>
						<td @click="time($event)">14:00-17:00</td>
					</tr>
					<tr>
						<td @click="time($event)">15:00-18:00</td>
						<td @click="time($event)">16:00-19:00</td>
						<td @click="time($event)">17:00-20:00</td>
						<td @click="time($event)">18:00-21:00</td>
						<td @click="time($event)">19:00-22:00</td>
					</tr>
				</table>
				<div class="butBtn">
					<button class="cacel" @click="updateCacel()">取消</button>
					<button class="define" @click="updateSure()">确定</button>
				</div>
			</div>
		</div>
		<div class="z_payMoney">
			<div class="z_fact">
				<span>实付金额:</span>
				<span class="paid">¥{{shoppingSum}}</span>
			</div>
			<div class="z_getScore">
				<span>订单完成后可获得积分: </span>
				<span class="score">100积分</span>	
			</div>
			<button class="z_subOrder">提交订单</button>
		</div>
	</div>
</template>

<script>
	//城市三级联动
	import VDistpicker from 'v-distpicker'
	export default {
  		components: { VDistpicker },
  		data(){
  			return{
  				curTime:"",
  				Htext:"",
  				clickBtn:"",
  				addArea:"",
  				phone:"",
  				newAdd:"",
  				shoppingNum:'',
  				//商品单价
  				shoppingPrice:"20",
  				//商品总计
  				shoppingSum:"20"
  				
  			}
  		},
  		methods:{
  			//数量增加的方法
  			inputAdd:function(){
  				var inputNum=document.getElementsByClassName("inputNum")[0];
//				console.log(inputNum.value);
//				inputNum.value=Math.floor(inputNum.value)+1;
				inputNum.value++;
				this.shoppingNum=inputNum.value;
//				console.log(this.shoppingNum);
				this.shoppingSum=this.shoppingPrice*this.shoppingNum;
				
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
					this.shoppingNum=inputNum.value;
					this.shoppingSum=this.shoppingPrice*this.shoppingNum;
				}
  			},
  			//修改时间的确认按钮
  			time:function(e){
  				var _this=e.target;
//				console.log(_this);
//				console.log(_this.innerText);
				this.clickBtn=_this.innerText;
  			},
  			updateSure:function(){
  				this.Htext=this.clickBtn;
  			},
  			//获取送达的当前时间
  			getcurTime:function(){
  				var time= new Date();
//				console.log(time.toLocaleString());//获取日期和时间
				this.curTime=time.getFullYear()+"年"+time.getMonth()+"月"+time.getDate()+"日";
				this.Htext=time.getHours()+"时"+time.getMinutes()+"分"+time.getSeconds()+"秒";
				
  			},
  			//修改时间的显示按钮
  			showBtn:function(){
  				var timeBox=document.getElementsByClassName("timeBox")[0];
  				timeBox.style.display="block";
  			},
  			//修改时间的取消按钮
  			updateCacel:function(){
  				var timeBox=document.getElementsByClassName("timeBox")[0];
  				timeBox.style.display="none";
  			},
  			//添加新地址的按钮
  			increaseAdd:function(){
  				var alertBox=document.getElementsByClassName("alertBox")[0];
				alertBox.style.display="block";
  			},
  			//弹出框取消按钮
  			addCancel:function(){
  				var alertBox=document.getElementsByClassName("alertBox")[0];
  				alertBox.style.display="none";
  			},
  			//弹出框的确定按钮
  			addSure:function(){
  				var name=document.getElementsByClassName("z_name");
  				//手机验证:
				var reg=/^1[3578][0-9]{9}$/;
				if(!(reg.test(this.phone))){
//					alert("手机格式不正确");
				}
				
//				console.log(reg.test(this.phone));
//				console.log(reg.test(name[3].value));
				
  				//区号验证
  				var reg1=/^[0-9]{4}$/;
  				var reg2=/^[0-9]{7}$/;
  				if(!reg1.test(name[4].value)){
//					alert("请输入4位区号!");
  				}else{
  					//座机验证:
  					if(!reg2.test(name[5].value)){
//						alert("请输入7位座机号码!");
  					}
  				}
  				var name1=name[0].value;
				var name2=name[1].children[0].value;
				var name3=name[1].children[1].value;
				var name4=name[1].children[2].value;
  				var name5=name[2].value;
  				
  				if(name1==""){
  					alert("收货人不能为空!");
  				}else if(name5==""){
  					alert("收货地址不能为空!");
  				}else if(!(reg.test(this.phone)||(reg1.test(name[4].value)&&reg2.test(name[5].value)))){
					alert("手机格式不正确或座机号码不正确!");
				}else{
					var alertBox=document.getElementsByClassName("alertBox")[0];
  					alertBox.style.display="none";
  					this.newAdd=name1+" "+name2+" "+name3+" "+name4+" "+name5+" "+name[4].value+" -"+name[5].value+" "+this.phone
				}
  			}
  		},
  		//获取当前时间
  		mounted:function(){
  			setTimeout(this.getcurTime,0);
//			console.log(this);
  		}
  		
	}
	
</script>

<style>
	div,
	span,
	img,
	input,
	label,select, {
		padding: 0;
		margin: 0;
	}
	/*送达时间*/
	.z_arriveTime{
		border-top:1px solid #e9e9e9;
		border-bottom:1px solid #e9e9e9;
		width: 1280px;
		/*height: 278px;*/
		margin:0 auto;
		padding-bottom: 10px;
	}
	.z_arriveTime .nextDay{
		display: inline-block;
		color:#498e3d;
		margin-top:20px;
		margin-bottom: 28px;
		font-size: 18px;
	}
	.time{
		display: flex;
	}
	.time .select{
		color:#666;
	}
	.time .sureDate{
		margin-left:20px;
		margin-right: 32px;
	}
	.time .clickUpdate{
		color:#498e3d;
		margin-left:16px;
		/*css鼠标手势*/
		cursor: pointer;
	}
	/*隐藏的时间框*/
	.timeBox{
		margin-top: 6px;
		background-color: #f8fff7;
		border:1px solid #d3d3d3;
		height: 152px;
		width: 546px;
		margin-left:150px;
		margin-top:14px;
		margin-bottom: 10px;
		/*初始时是隐藏的,点击才会显示出来*/
		display: none;	
		position: relative;
	}
	.butBtn{
		margin-top:18px ;
		text-align: center;
	}
	.timeBox button{
		width:90px;
		height:30px;
		color:white;
		font-size: 18px;
		outline: none;
		border:0;
		border-radius: 5px; 
	}
	/*取消按钮*/
	.timeBox .cacel{
		background-color: #999;
		margin-right: 14px;
	}
	/*确定按钮*/
	.timeBox .define{
		background-color: #f08200;
		margin-left: 14px;
	}
	.timeBox .transBox{
		position: absolute;
		top: -8px;
		left:272px;
		width: 12px;
		height:12px;
		/*箭头*/
		border-top:1px solid #e2e5e2;
		border-left: 1px solid #e2e5e2;
		transform: rotate(45deg);
		background-color: #f8fff7;
	}
	.timeBox table{
		margin: 20px auto 0;
	}
	.timeBox table td{
		text-align: center;
		line-height: 30px;
		width: 100px;
		border:1px solid #d3d3d3;
		/*css鼠标手势*/
		cursor: pointer;
	}
	
	/*实付金额部分*/
	.z_payMoney{
		width:1280px;
		height: 228px;
		margin:0 auto;
	}
	.z_fact{
		margin-top:20px;
		margin-bottom: 20px;
		text-align:right;
	}
	.z_fact .paid{
		color:red;
		font-size:22px;
	}
	.z_getScore{
		text-align: right;
	}
	.z_getScore .score{
		color:#f08200;
		margin-left:15px;
	}
	.z_subOrder{
		width:120px;
		height: 50px;
		color:white;
		background-color: #f08200;
		outline: none;
		border:none;
		border-radius: 5px;
		font-size: 18px;
		margin-top:30px;
		float: right;
		margin-bottom: 30px;
	}
	/*有地址的收货人信息*/
	.havedInf{
		width:1278px;
		margin:14px auto 0;
		border-bottom: 1px solid #e9e9e9;
		margin-bottom: 20px;
		padding-bottom: 26px;
	}
	.havedInf .haveDown,.haveUp{
		display: inline-block;
		width: 120px;
		line-height: 30px;
		color:#498e3d;
		/*css鼠标手势*/
		cursor: pointer;
	}
	.havedInf div{
		line-height:36px;
		/*被点中也就是设为默认地址时 加边框*/
		/*border:1px solid #e5e5e5;*/
		background-color: #f4fff2;
		margin-top:20px;
		margin-bottom: 10px;
		font-size: 15px;
	}
	.havedInf .adupdate,.addelete{
		color:#498e3d;
		float: right;
		margin-right: 24px; 
		/*css鼠标手势*/
		cursor: pointer;	
	}	
	.havedInf .addefault{
		color:#f19320;
		float: right;
		margin-right: 24px;	
		/*css鼠标手势*/
		cursor: pointer;
	}
	.havedInf .z_addefault{
		color:#c3c9c3;
		margin-left:12px;
		
	}
	.havedInf input{
		margin-left:16px;
		margin-right: 12px;
	}
	.havedInf button{
		outline: none;
		border:none;
		border-radius: 5px;
		width:110px;
		line-height:30px;
		background-color:#f08200 ;
		float: right;
		color:white;
		font-size: 16px;
		/*css鼠标手势*/
		cursor: pointer;	
	}
	/*没地址的收货人信息*/
	.z_firstShow{
		display: none;
	}
	.s_upad_bod{
		width:1280px;
		margin:0 auto;
		height: 356px;
	}
	.s_upad_bod .s_orderCont{
		border-top:1px solid #e9e9e9;
		border-bottom: 1px solid #e9e9e9;
		margin-top:18px;
		margin-bottom: 18px;
	}
	.s_orderCont .s_adname,.s_adCity,.s_adTown,.s_adPhone{
		height: 36px;
		margin-bottom: 20px;
		margin-top:18px;
	}
	.s_orderCont input{
		border: 1px solid #D3D3D3;
		outline: none;
		line-height: 32px;
		font-size: 14px;
		margin-left: 20px;
	}
	.s_adCity,.s_adTown,.s_adPhone{
		margin-left: 16px;
	}
	.s_adname input{
		width: 330px;
	}
	.s_adTown input{
		width: 490px;
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
	/*按钮*/
	.s_orderCont button{
		outline: none;
		background-color: #f08200;
		border:none;
		width: 180px;
		height: 40px;
		font-size: 16px;
		color: white;
		border-radius: 5px;
		margin-left: 120px;
		margin-bottom: 20px;
	}
	/*城市三级联动*/
	.address{
		height: 32px;
		display: inline-block;
		margin-left: 20px;
	}
	.address select{
		outline: none;
		/*削掉下拉菜单的默认箭头*/
		/*appearance: none;*/
		width: 138px;
		height: 32px;
	}
	
	
	/*添加地址的弹出框样式*/
	.alertBox{
		/*包含在父级内,与其他元素是兄弟关系,需要设置固定定位脱离文档流,把其他兄弟覆盖住,里面的内容也就是弹出框的内容升级层级 为什么不设置绝对定位???*/
		position:fixed;
		top:0;
		bottom: 0;
		left: 0;
		right: 0;
		/*width: 100%;
		height: 100%;*/
		background-color: rgba(0,0,0,0.3);
		z-index: 1000;
		/*初始时是隐藏的,点击才会显示出来*/
		display: none;	
	}
	.alertBox .s_addAdress{
		display: block;
		margin-top:30px;
		margin-left:30px;
		color:#498e3d;
	}
	.alertBox .s_upad_bod{
		width:680px;
		margin:300px auto 0;
		height: 356px;
		border:5px solid #e2e2e2;
		background-color: white;
		padding-bottom: 40px;
		
	}
	.alertBox .s_upad_bod .s_orderCont{
		border-top:1px solid #E2E2E2;
		border-bottom:0px solid #e9e9e9;
		margin-top:18px;
		margin-bottom: 18px;
	}
	.alertBox .s_orderCont .s_adname,.s_adCity,.s_adTown,.s_adPhone{
		height: 36px;
		margin-bottom: 20px;
		margin-top:18px;
	}
	.alertBox .s_orderCont input{
		border: 1px solid #D3D3D3;
		outline: none;
		line-height: 32px;
		font-size: 14px;
		margin-left: 20px;
	}
	.alertBox .s_adCity,.s_adTown,.s_adPhone{
		margin-left: 16px;
	}
	.alertBox .s_adname input{
		width: 330px;
	}
	.alertBox .s_adTown input{
		width: 490px;
	}
	.alertBox .s_adPhone span{
		font-size: 16px;
	}
	.alertBox .s_upad_bod .s_adPhone .adPhone_move{
		width: 150px;
		margin-right: 10px;
	}
	.alertBox .s_upad_bod .s_adPhone .adTelphone_fir{
		width: 46px;
		margin:0 10px;
	}
	.alertBox .s_upad_bod .s_adPhone .adTelphone_sen{
		width: 124px;
		margin:0 10px;
	}
	/*按钮*/
	.alertBox .s_orderCont button{
		outline: none;
		background-color: #f08200;
		border:none;
		width: 180px;
		height: 40px;
		font-size: 16px;
		color: white;
		border-radius: 5px;
		margin-left: 120px;
	}
	/*城市三级联动,address自带的class名*/
	.address{
		height: 32px;
		display: inline-block;
		margin-left: 20px;
	}
	.address select{
		outline: none;
		/*削掉下拉菜单的默认箭头*/
		/*appearance: none;*/
		width: 138px;
		height: 32px;
	}
	
	/*商品信息*/
	.z_commodity {
		width: 1280px;
		margin: 0 auto;
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
	.z_comMenu .shop {
		margin-left: 50px;
		margin-right: 300px;
	}
	.z_comMenu .price,
	.many,
	.money {
		margin-left: 144px;
	}
	.z_left {
		/*margin-top: 20px;*/
		margin-left: 25px;
		display: inline-block;
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
	/*开票信息*/
	.z_ticket {
		width: 1280px;
		margin: 0 auto;
		border-top: 1px solid #e9e9e9;
		border-bottom: 1px solid #e9e9e9;
	}
	/*label是行标签*/
	.z_tickTop label {
		display: block;
	}
	.z_tickTop label input {
		margin-right: 10px;
		margin-left: 40px;
	}
	.z_tickTop label input:nth-child(1) {
		margin-left: 0;
	}
	.z_tickTop {
		height: 102px;
		border-bottom: 1px solid #e9e9e9;
	}
	.z_tickTop span {
		display: block;
		margin-top: 20px;
		margin-bottom: 20px;
	}
	.z_head {
		line-height: 46px;
		border-bottom: 1px solid #e9e9e9;
	}
	.z_head input {
		width: 150px;
		height: 20px;
		margin-right: 15px;
		outline: none;
		border: 1px solid #e9e9e9;
	}
	
	.z_addRemark span {
		display: block;
		margin-top: 20px;
		margin-bottom: 20px;
	}
	.z_addRemark input {
		width: 614px;
		height: 32px;
		outline: none;
		border: 1px solid #e9e9e9;
		margin-bottom: 50px;
		font-size: 14px;
		padding-left: 10px;
	}
</style>