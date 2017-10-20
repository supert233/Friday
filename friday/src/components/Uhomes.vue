<template>
  <div id="app">
    <div class="s_uhome">
  		<div class="s_uhome_le">
  			<div class="Person_center"><span>个人中心</span></div>
  			<ul class="s_uhome_le_list">
  				<li>交易管理  <span>></span>   </li>
  				<li class="i_home" @click="show()"><router-link to="/users">我的账户</router-link></li>
  				
  				<li @click="show()"><router-link to="/s_myorder">我的订单</router-link></li>
  				<li @click="show()"><router-link to="/s_myjifen">我的积分</router-link></li>
  				<li @click="show()"><router-link to="/s_jifenorder">积分订单</router-link></li>
  				<li><router-link to="/">我的钱包</router-link></li>
  				<li>会员资料 <span>></span></li>
  				<li><router-link to="/">个人资料</router-link></li>
  				<li><router-link to="/">地址管理</router-link></li>
  				<li><router-link to="/">我的收藏</router-link></li>
  				<li><router-link to="/">最近浏览</router-link></li>
  				<li><router-link to="/">修改密码</router-link></li>
  				<li>站内信 <span>></span></li>
  				<li><router-link to="/">我的消息</router-link></li>
  				<li><router-link to="/">信息反馈</router-link></li>
  			</ul>
  			<!--<a href="text.html">tiao</a>-->
  		</div>
  		<div class="s_uhome_r">
  			<div v-if="bal">
	  			<users></users>
	  		</div>
	  		<router-view></router-view>
  		</div>
    		<!--<users></users>-->
    </div>
    
  </div>
</template>

<script>
	import Users from "./s_users"
	
export default {
  name: 'apps',
 components:{
	  	Users
	 },
	 data(){
	 	return{
	 		bal:true
	 		
	 		
	 	}
	 },
	 methods:{
	 	show:function(){
	 		this.bal=false
	 	}
	 },
//	 mounted:function(){
//	 	
//	 		bal:false
//
//	 	
//	 }
	
}

</script>

<style scoped>
body,div,ul,li{
	margin: 0;
	padding: 0;
}
a{
	text-decoration: none;
	color: #a0a0a0;
}
/*.router-link-active {
    text-decoration: none;
 
}*/
a:hover{
	color: #55964a;
    text-decoration: underline;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.s_uhome{
	width: 1280px;
	margin: 40px auto 0;
	
}
.s_uhome ul{
	list-style: none;
}
.s_uhome .s_uhome_le{
	width: 168px;
	border: 1px solid #e7e7e7;
	float: left;
}
.s_uhome .s_uhome_le .Person_center{
	width: 100%;
	height: 56px;
	
	border-bottom:  1px solid #e7e7e7 ;
	font-size: 18px;
	line-height: 56px;
	color: #666666;
	/*padding-left: 20px;*/
}
.s_uhome_le .Person_center span{
	margin-left: 20px;
}
.s_uhome_le_list{
	margin-left: 20px;
	font-size: 14px;
	margin-bottom: 27px;
	margin-top: 20px;
	color: #999999;
}
.s_uhome_le_list li{
	margin-bottom: 16px;
	line-height: 20px;
}
.s_uhome_le_list span{
	font-size: 12px;
	line-height: 20px;
	float: right;
	margin-right: 46px;
}
.s_uhome_le_list li:nth-child(1),.s_uhome_le_list li:nth-child(7),.s_uhome_le_list li:nth-child(13){
	font-size: 16px;
	color: #666666;
}
.s_uhome_le_list .i_home a{
	color: #55964a;
    text-decoration: underline;
}
/*右边的组件*/
.s_uhome_r{
	width: 1083px;
	/*height: 628px;*/
	/*border: 1px solid #e7e7e7;*/
	/*margin-left:24px ;*/
	float: right;
}

</style>
