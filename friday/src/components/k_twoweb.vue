<template>
	<div>
		<!--分类-->
		<div class="p_sort">
			您的当前位置 :
			<span>首页 > </span>
			<span>{{onewebs}}</span>
			<span> > {{twowebs}}</span>
		</div>
		<!--一级分类-->
		<div class="p_fir">
			<span>一级分类 : </span>
			<ul>
				<li>全部</li>
				<li @click="classData($event)" :class="{'green':bol1}">新鲜水果</li>
				<li @click="classData($event)" :class="{'green':bol2}">生猛海鲜</li>
				<li @click="classData($event)" :class="{'green':bol3}">肉类家禽</li>
				<li @click="classData($event)" :class="{'green':bol4}">蛋奶素食</li>
			</ul>
		</div>
		<!--二级分类-->
		<div class="p_fir">
			<span>二级分类 : </span>
			<ul>
				<li :class="{'green':bol5}">全部</li>
				<li v-for="item in allwebs">{{item}}</li>				
			</ul>
		</div>
		<div class="k_select">
			排序 :
			<!--销量-->
			<div>销量</div>
			<select name="">
				<option value="">价格</option>
				<option value="">从低到高</option>
				<option value="">从高到低</option>
			</select>
			<div>评分最高</div>
		</div>
		<div class="p_content">
			<ul class="v_binBan">
				<li v-for="item in arrs3">
					<router-link to="/Zdetail"><img class="imgs2" :src="item.comphoto" alt="" /></router-link>
					<span class="v_bin1">{{item.comname}}</span>
					<span class="v_bin2">此物只应天上有,人间哪的几回闻</span>
					<div class="v_bin3">
						<span>¥{{item.comprice}}.00</span>
						<span>¥40.00</span>
					</div>
					<router-link to="/zaddshop"><img @click="k_show()" class="v_bin4" src="../pages/index/assets/littgou.png" alt="" /></router-link>
				</li>
				
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				twowebs:'',
				onewebs:'',
				allwebs:[],
				arrs1:[],
				arrs2:[],
				arrs3:[],
				bol1:false,
				bol2:false,
				bol3:false,
				bol4:false,
				bol5:false,
				arr1:["时令水果","进口水果","沙拉拼盘","水果礼盒"],
				arr2:["绿叶菜","茄果类","根茎类","菌菇类","蔬菜沙拉","蔬菜礼蓝"],
				arr3:["牛肉","羊肉","鸡鸭肉","淡水鱼"],
				arr4:["海鲜礼盒","生猛海鲜","鱼、虾","蟹、贝"],
				arrs:[]
			}
		},
		methods:{
			classData:function(e){
				var a = e.target.innerText;
				//console.log(this.arrs1);
				var s = this.arrs1;				
				for (var i = 0; i < s.length; i++) {
//					console.log(s[i])
					if (a == s[i].comtype) {					
						this.arrs2.push(s[i]);
					}
				}
				this.arrs3 = this.arrs2;
				this.arrs2 = [];
				this.onewebs = a;
				this.twowebs = "全部";
				
				//一级分类的点击事件
				switch (a){
					case "新鲜水果":
						this.bol1=true;
						this.bol2=false;
						this.bol3=false;
						this.bol4=false;
						this.bol5=true;
						this.allwebs=this.arr1;
						break;
					case "生猛海鲜":
						this.bol1=false;
						this.bol2=true;
						this.bol3=false;
						this.bol4=false;
						this.bol5=true;
						this.allwebs=this.arr2;
						break;
					case "肉类家禽":
						this.bol1=false;
						this.bol2=false;
						this.bol3=true;
						this.bol4=false;
						this.bol5=true;
						this.allwebs=this.arr3;
						break;
					case "蛋奶素食":
						this.bol1=false;
						this.bol2=false;
						this.bol3=false;
						this.bol4=true;
						this.bol5=true;
						this.allwebs=this.arr4;
						break;
					default:
						break;
				}
			},
			
			
			
		},
		computed:{
			twoweb(){
				return this.$store.state.twoweb
			},
			oneweb(){
				return this.$store.state.oneweb 
			},
			allweb(){
				return this.$store.state.allweb
			},			
		},
		mounted(){
			this.twowebs = this.$store.state.twoweb;
			this.onewebs = this.$store.state.oneweb;
			this.allwebs = this.$store.state.allweb;
//			console.log(this.twowebs);
			this.$http.post('api/user/indexCons',{}, {emulateJSON: true}).then(function(res){
				var allData = res.body;
//				console.log(allData)
				this.arrs1 = allData;
				for(var i = 0; i < allData.length; i++){	
					
					if(this.onewebs == allData[i].comtype){
						
						this.arrs3.push(allData[i]);
						console.log(this.arrs3);
					switch (this.onewebs){
					case "新鲜水果":
						this.bol1=true;
						this.bol2=false;
						this.bol3=false;
						this.bol4=false;
						this.bol5=true;
						this.allwebs=this.arr1;
						break;
					case "生猛海鲜":
						this.bol1=false;
						this.bol2=true;
						this.bol3=false;
						this.bol4=false;
						this.bol5=true;
						this.allwebs=this.arr2;
						break;
					case "肉类家禽":
						this.bol1=false;
						this.bol2=false;
						this.bol3=true;
						this.bol4=false;
						this.bol5=true;
						this.allwebs=this.arr3;
						break;
					case "蛋奶素食":
						this.bol1=false;
						this.bol2=false;
						this.bol3=false;
						this.bol4=true;
						this.bol5=true;
						this.allwebs=this.arr4;
						break;
					default:
						break;
				}
					}
				}
			});
			
		}
		
	}
	
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}
	
	ul,
	li {
		list-style: none;
		display: inline-block;
	}
	
	.p_sort {
		width: 1260px;
		padding-left: 20px;
		line-height: 54px;
		background-color: #f4f4f4;
		margin: 20px auto 0;
		color: #666666;
	}
	
	.p_fir {
		width: 1280px;
		height: 56px;
		margin: 0 auto;
		color: #666666;
		border-bottom: 1px solid #e7e7e7;
	}
	
	.p_fir li {
		padding: 5px 10px;
		margin-top: 16px;
		margin-left: 26px;
	}
	
	.p_fir li:hover {
		background-color: #498e3d;
		color: white;
	}
	
	.k_select {
		width: 1280px;
		height: 66px;
		margin: 0 auto;
	}
	
	.k_select div {
		display: inline-block;
		/*				float: right;*/
		border: 1px solid #e7e7e7;
		color: #404040;
		padding: 2px 15px;
		margin-left: 40px;
		margin-top: 20px;
	}
	
	.k_select select {
		/*float: right;*/
		border: 1px solid #e7e7e7;
		color: green;
		height: 30px;
		margin-left: 40px;
		margin-top: 20px;
	}
	
	.p_content {
		width: 1280px;
		margin: 0 auto 40px;
	}
	
	.p_content ul {
		display: flex;
		justify-content: space-between;
	}
	
	.p_content ul li {
		width: 304px;
		height: 432px;
		border: 1px solid #ececec;
		position: relative;
	}
	
	.p_content .p_shop {
		position: absolute;
		bottom: 24px;
		right: 20px;
		z-index: 10;
	}
	.v_binBan .v_bin1{
	color: #333333;
	font-size: 18px;
	display: block;
	margin-left: 20px;
}
.v_binBan .v_bin2{
	color: #666666;
	font-size: 14px;
	display: block;
	margin-left: 20px;
	margin-top: 8px;
}
.v_binBan .v_bin3{
	margin-left: 20px;
	margin-top: 20px;
}
.v_bin3 span:nth-child(1){
	color: #ff5757;
	font-size: 20px;
}
.v_bin3 span:nth-child(2){
	color: #666666;
	font-size: 14px;
	margin-left: 16px;
	text-decoration: line-through;
}
.v_binBan .v_bin4{
	position: absolute;
	right: 20px;
	bottom: 24px;
}

.green{
	background-color: #498e3d;
	color: white;
}

.imgs2{
	width: 302px;
	height: 304px;
}
</style>