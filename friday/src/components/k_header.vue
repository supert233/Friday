<template>
	<!--页面头部-->
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
						<li v-if="nouser"><a href="/join.html">登录</a></li>
						<li v-if="nouser"><a href="/join.html">注册</a></li>
						<li v-if="hasuser">
							您好 ,
							
							<div class="login">{{author}}</div>
							<span @click="deleauser"><a href="/join.html">退出</a></span>
						</li>
						<li>
							<span v-if="hasuser"><router-link to="/s_myorder">我的订单</router-link></span>
							<span v-if="nouser"><a href="/join.html">我的订单</a></span>
						</li>
						<li>
							<span v-if="hasuser"><router-link to="/s_massage">我的消息</router-link></span>
							<span v-if="nouser"><a href="/join.html">我的消息</a></span>
						</li>
						<li>
							<span>我是商家</span>
						</li>
						<li>
							<!--小图标-->
							<img src="../pages/index/assets/phone.png" alt="" />
							400-800-8820
						</li>
					</ul>
				</div>
			</div>
			<!--头部内容-->
			<div class="k_headerCon">
				<a href="index.html"><img class="k_logo" src="../pages/index/assets/logo.png" alt="" /></a>
				<!--输入框-->
				<div class="k_input">
					<input type="text" placeholder="请输入关键字进行搜索" v-model="inputTxt"/>
					<button @click="btn"><img src="../pages/index/assets/search.png" alt="" /></button>
					<span>热门 : </span>
					<span>奇异果</span>
					<span>牛排</span>
					<span>山竹</span>
					<span>牛油果</span>					
				</div>
				<a href="/join.html"><div class="k_perCen" v-if="nouser"><img src="../pages/index/assets/ico2.png" alt="" />购物车</div></a>
				<a href="shopping.html"><div class="k_perCen" v-if="hasuser"><img src="../pages/index/assets/ico2.png" alt="" />购物车</div></a>
				<router-link to="/users"><div class="k_perCen" v-if="hasuser"><img src="../pages/index/assets/ico1.png" alt="" />个人中心</div></router-link>
				<a href="/join.html"><div class="k_perCen" v-if="nouser"><img src="../pages/index/assets/ico1.png" alt="" />个人中心</div></a>
				<!--导航条-->
				<ul class="k_nav">
					<li @mouseleave="hide()" @mouseenter="show()" class="k_all"><span>全部分类</span></li>
					<router-link to="/index.html"><li><span>首页</span></li></router-link>
					<router-link to="/local"><li><span>同城</span></li></router-link>
					<router-link to="/five"><li><span>礼拜五</span></li></router-link>
					<router-link to="/kinte"><li><span>积分商城</span></li></router-link>
					<li><span>导航 +</span></li>
				</ul>
				<!--分类内容-->
				<ul v-if="fir" @mouseleave="hide()" @mouseenter="show1()"  class="k_classes">
					<router-link to="/ktwoweb"><li class="k_sonCla"  @mouseenter="list1($event)"><img src="../pages/index/assets/水果.png" alt="" />新鲜水果
						
					</li></router-link>
					<router-link to="/ktwoweb"><li class="k_sonCla" @mouseenter="list2($event)"><img src="../pages/index/assets/海鲜优选.png" alt="" />生猛海鲜</li></router-link>
					<router-link to="/ktwoweb"><li class="k_sonCla" @mouseenter="list3($event)"><img src="../pages/index/assets/肉.png" alt="" />肉类家禽</li></router-link>
					<router-link to="/ktwoweb"><li class="k_sonCla" @mouseenter="list4($event)"><img src="../pages/index/assets/牛奶.png" alt="" />蛋奶素食</li></router-link>
					<router-link to="/ktwoweb"><li class="k_sonCla" @mouseenter="list5($event)"><img src="../pages/index/assets/蔬菜.png" alt="" />田园蔬菜</li></router-link>
					<router-link to="/ktwoweb"><li class="k_sonCla" @mouseenter="list6($event)"><img src="../pages/index/assets/零食1.png" alt="" />零食酒水</li></router-link>
					<router-link to="/ktwoweb"><li class="k_sonCla" @mouseenter="list7($event)"><img src="../pages/index/assets/粮油.png" alt="" />粮油杂货</li></router-link>
					<router-link to="/ktwoweb"><li class="k_sonCla" @mouseenter="list8($event)"><img src="../pages/index/assets/礼盒.png" alt="" />礼品卡卷</li></router-link>
					<router-link to="/ktwoweb"><li class="k_sonCla" @mouseenter="list9($event)"><img src="../pages/index/assets/家居日用 (1).png" alt="" />家具用品</li></router-link>
				</ul>
				<!--二级内容-->
				<ul v-if="sec" @mouseleave="hide()" @mouseenter="show1()" class="k_twocla">
					<router-link to="/ktwoweb"><li @click="k_list($event)" v-for="item in arrs">{{item}}</li></router-link>
				</ul>
			</div>
		</div>
</template>

<script>
	import VDistpicker from 'v-distpicker'
	export default {
		components: { VDistpicker },
		name:"k_header",
//		components:{
//	  		Users
//	  	
//	  }
		data(){
			return{
				fir:false,
				sec:false,
				cityBol:false,
				hasuser:false,
				nouser:true,
				cityVal:"河南省郑州市",
//				arr:[
//					["时令水果","进口水果","沙拉拼盘","水果礼盒"],
//					["绿叶菜","茄果类","根茎类","菌菇类","蔬菜沙拉","蔬菜礼蓝"],
//					["牛肉","羊肉","鸡鸭肉","淡水鱼"],
//					["海鲜礼盒","生猛海鲜","鱼、虾","蟹、贝"],
//					["优选米面","优选杂粮","粮油调味","其他食材"],
//					["饮料","啤酒","白酒","葡萄酒","咖啡","茶叶","优选干果","休闲零食"],
//					["蛋品","奶制品","烘焙甜点","方便速食"],
//					["礼盒","休闲零食","甜点干果"],
//					["实木沙发","高级壁纸"]
//				],
				arr1:["时令水果","进口水果","沙拉拼盘","水果礼盒"],
				arr2:["绿叶菜","茄果类","根茎类","菌菇类","蔬菜沙拉","蔬菜礼蓝"],
				arr3:["牛肉","羊肉","鸡鸭肉","淡水鱼"],
				arr4:["海鲜礼盒","生猛海鲜","鱼、虾","蟹、贝"],
				arr5:["优选米面","优选杂粮","粮油调味","其他食材"],
				arr6:["饮料","啤酒","白酒","葡萄酒","咖啡","茶叶","优选干果","休闲零食"],
				arr7:["蛋品","奶制品","烘焙甜点","方便速食"],
				arr8:["礼盒","休闲零食","甜点干果"],
				arr9:["实木沙发","高级壁纸"],
				arrs:"",
				inputTxt:"",
				
			}
		},
		computed: {
		      author () {
		        return this.$store.state.author
		      }
		   },
//		 computed: {
//		      author () {
//		        return this.$store.state.author
//		      }
//		   },
		methods:{
			btn:function(){
//				this.$http.post('/api/user/addUser',{username:"第一次",password:561,massage:"",type:"add",},{emulateJSON:true}).then(function(res){
//					console.log(res.body);
//				})
//				this.$http.get('/api/user/addUser',{params:{username:"456",password:561,massage:"",type:"add"}}).then(function(res){
//					console.log(res.body);
//				}) 
			},
			//全部分类 显示隐藏
			show:function(){
				this.fir = true;
				
			},
			show1:function(){
				this.fir = true;
				this.sec = true;
				
				var soncla = document.getElementsByClassName("k_sonCla");

	
			},
			hide:function(){
				this.fir = false;
				this.sec = false;
			},
			city1:function(){
				this.cityBol = true;
			},
			city2:function(){
				//获取value值
				var selects = document.getElementsByTagName("select");

				this.cityVal = selects[0].value + selects[1].value
				this.cityBol = false;
			},
			list1:function(e){
				this.arrs=this.arr1;
				var oneweb = e.target.innerText;
				this.$store.commit('oneAuthor',oneweb)
			},
			list2:function(e){
				this.arrs=this.arr2;
				var oneweb = e.target.innerText;
				this.$store.commit('oneAuthor',oneweb)
			},
			list3:function(e){
				this.arrs=this.arr3;
				var oneweb = e.target.innerText;
				this.$store.commit('oneAuthor',oneweb)
			},
			
			list4:function(e){
				this.arrs=this.arr4;
				var oneweb = e.target.innerText;
				this.$store.commit('oneAuthor',oneweb)
			},
			list5:function(e){
				this.arrs=this.arr5;
				var oneweb = e.target.innerText;
				this.$store.commit('oneAuthor',oneweb)
			},
			list6:function(e){
				this.arrs=this.arr6;
				var oneweb = e.target.innerText;
				this.$store.commit('oneAuthor',oneweb)
			},
			list7:function(e){
				this.arrs=this.arr7;
				var oneweb = e.target.innerText;
				this.$store.commit('oneAuthor',oneweb)
			},
			list8:function(e){
				this.arrs=this.arr8;
				var oneweb = e.target.innerText;
				this.$store.commit('oneAuthor',oneweb)
			},
			list9:function(e){
				this.arrs=this.arr9;
				var oneweb = e.target.innerText;
				this.$store.commit('oneAuthor',oneweb)
			},
			//退出登录
			deleauser:function(){
				localStorage.removeItem('userphone');
			},
			k_list:function(e){
				var e = e.target;
				this.$store.commit('twoAuthor',e.innerText)
			}
			
		},
		mounted(){

			var userphone = localStorage.getItem("userphone");
			console.log(userphone);
			if (userphone == null || userphone =="") {
				this.nouser=true;
				this.hasuser=false;
			}else{
				this.nouser=false;
				this.hasuser=true;
				this.$store.commit('newAuthor',userphone);
			}
			

		}
	}
	
	
</script>

<style scoped>
body,div,img,input,ul,li,span,img{
		margin:0;
		padding:0;
	}
	ul,li{
		list-style: none;
		display: inline-block;
	}
	.k_header{
		width: 100%;
		border-bottom: 1px solid #efeeec;
	}
	.k_massage{
		width: 100%;
		height: 36px;
		background-color: #eeeeee;
	}
	.k_massage .k_msgCon{
		width: 1280px;
		height: 36px;
		margin: 0 auto;
	}
	.k_msgCon .K_fromCity{
		font-size: 14px;
		color: #6f6f6f;
		line-height: 36px;
		float: left;
	}
	.k_msgCon .k_msgOn{
		font-size: 14px;
		color: #6f6f6f;
		line-height: 36px;
		float: right;
	}
	.k_msgOn .login{
		color: #4b943d;
		display: inline-block;
	}
	.k_msgOn span{
		border-right: 1px solid #6f6f6f;
		padding-right: 14px;
		padding-left: 14px;
	}
	.k_msgOn li:last-child{
		padding-left: 14px;
	}
	.k_msgOn img{
		float:left;
		margin-top: 9px;
		margin-right: 6px;
	}
	/*头部内容*/
	.k_headerCon{
		width: 1280px;
		height: 190px;
		margin: 0 auto;
		position: relative;
	}
	.k_headerCon .k_logo{
		margin-top: 24px;
		float: left;
	}
	.k_input{
		width: 498px;
		height: 60px;
		margin-left: 102px;
		margin-top: 50px;
		display: inline-block;
	}
	.k_input input{
		width: 450px;
		height: 36px;
		border: 2px solid #4b943d;
		margin-bottom: 6px;
		outline: none;
		font-size: 14px;
		color: #a0a0a0;
		padding-left: 4px;
	}
	.k_input button{
		width: 40px;
		height: 40px;
		background-color: #4b943d;
		border: 0 solid;
		display: inline-block;
		float:right;				
	}
	.k_input span{
		color: #666;
		margin-right: 26px;
	}
	.k_perCen{
		float: right;
		width: 122px;
		height: 38px;
		border: 1px solid #e5e5e5;
		background-color: #f8f8f6;
		/*text-align: center;*/
		line-height: 38px;
		font-size: 13px;
		color: #838383;
		margin-left: 20px;
		margin-top: 50px;
	}
	.k_perCen img{
		float: left;
		margin-top: 9px;
		margin-right: 10px;
		margin-left: 20px;
	}
	.k_nav{
		margin-top: 22px;
		height: 50px;								
	}
	.k_nav a li,.k_nav a,.k_nav li{
		/*width: 150px;*/
		height: 50px;
		line-height: 50px;
		text-align: center;
		font-size: 16px;
		color: #696969;
		float: left;
	}
	.k_nav li span{
		padding-left: 51px;
		padding-right: 50px;  
		border-left: 1px solid #e8e8e8;
	}
	.k_nav li:nth-child(1){
		width: 170px;
	}
	.k_nav li:nth-child(1) span{
		border: 0 solid;
	}
	.k_nav li:hover,.k_nav li span:hover{
		background-color: #f08200;
		border-color:#f08200 ;				
	}
	.k_input button{
		outline: none;
	}
	.k_classes{
		position: absolute;
		left: 0;
		top: 190px;
		width: 168px;	
		border: 1px solid #efeeec;
		display: block;
		background-color: white;
		z-index: 100;
		border: 1px solid #efeeec;
	}
	.k_classes li{
		width: 168px;
		/*text-align: center;*/
		height: 54px;
		line-height: 54px;
		border-bottom: 1px solid #efeeec;
	}
	.k_classes li img{
		margin-left: 38px;
		margin-right: 10px;
		margin-top: 13px;
		float: left;
	}
	.k_classes li:hover{
		background-color: #ebffe7;
	}
	.k_twocla{
		width: 460px;
		height: 500px;
		background-color: #ebffe7;
		z-index: 100;
		position: absolute;
		top: 190px;
		left: 168px;
		/*display: none;*/
	}	
	/*头部选择后样式*/
	.k_nav .router-link-active{
		background-color: #f08200;
		border-color:#f08200 ;			
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
		appearance:none;
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
	/*解决一级菜单移出,背景色不变回原样*/
	/*.k_classes li .null_white{}*/
	/*二级下拉菜单*/
	.k_twocla li {
		display:block;
		padding-left: 20px;
		padding-top: 10px;
		/*padding-bottom: 10px;*/
		line-height: 27px;
		height: 27px;
	
		background-color: white;
	}
	.k_twocla li:hover{
		background-color: #ebffe7;
	}
	
</style>


