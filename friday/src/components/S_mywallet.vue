<template>
	<div class="	s_mywal">
		<div class="s_mywal_he"><span>账户余额:<span>¥{{mymoney}}</span></span></div>
		<!--充值-->
		<div class="s_wal_mas">
			<!--充值金额-->
			<div class="s_walRec" >
				<span>请选择充值金额:</span>
				<div @click="chose(item)" v-for="item in mone" :class="{s_recMon:chMon == item}">{{item}}</div>
				<!--<div @click="chose($event)" :class="{'s_recMon':chMon}">500元</div>
				<div @click="chose($event)" :class="{'s_recMon':chMon}">1000元</div>
				<div @click="chose($event)" :class="{'s_recMon':chMon}">2000元</div>-->
			</div>
			<!--充值有礼-->
			<div class="s_recGift">
				<span>充值有礼</span>
				<div><img src="../pages/index/assets/recgift.png"/></div>
				<div><img src="../pages/index/assets/recgift.png"/></div>
			</div>
			<button>立即充值</button>
		</div>
	</div>
</template>

<script>
	export default{
		name:"s_mywallet",
		data(){
			return{
				recMon500:500,
				recMon1000:1000,
				recMon2000:2000,
				chMon:'',
				mone:["500元","1000元","2000元"]
			}
		},
		computed:{
			mymoney () {
	        return this.$store.state.mymoney
	      },
		},
		methods:{
//			chose:function(e){
//				var _this=e.target;
//				_this.style.backgroundColor="#f4fff2";
//				_this.style.borderColor="#64a130";
//
//			}
			chose:function(item){
				this.chMon=item
			}
			
		}
	}
</script>

<style scoped>
	.s_mywal{
		border: 1px solid #e7e7e7;
	}
	.s_mywal .s_mywal_he{
		height: 56px;
		width: 100%;
		border-bottom:  1px solid #e7e7e7 ;
		font-size: 18px;
		line-height: 56px;
		/*margin-bottom: 40px;*/
	}
	.s_mywal .s_mywal_he span{
		margin-left: 20px;
		color: #333333;
	}
	.s_mywal .s_mywal_he span span{
		color: #F08200;
	}
	/*我的钱包充值*/
	.s_mywal .s_wal_mas{
		padding: 0 30px;
		height: 571px;
		color: #3c3c3c;
		font-size: 18px;
	}
	.s_wal_mas .s_walRec{
		
		padding-top: 40px;
		/*margin-top: 40px;*/
		margin-bottom: 38px;
	}
	.s_wal_mas .s_walRec span{
		display: block;
		margin-bottom: 20px;
	}
	.s_wal_mas .s_walRec div{
		display: inline-block;
		width: 112px;
		height: 32px;
		border: 1px solid #d4d4d4;
		text-align: center;
		line-height: 32px;
		margin-right: 34px;
	}
	.s_wal_mas .s_walRec div:hover{
		border-color: #64a130;
		background-color: #f4fff2;
		cursor: pointer;
	}
	.s_recMon{
		border-color: #64a130;
		
		background-color: #f4fff2;
	}
	/*充值有礼*/
	.s_recGift{
		width: 1081px;
		height: 260px;
	}
	.s_recGift span{
		color: #f18a11;
		display: block;
		margin-bottom: 20px;
	}
	.s_recGift div{
		width: 356px;
		height: 190px;
		border: 1px solid #eaeaea;
		margin-right: 40px;
		/*margin-bottom: 40px;*/
		float: left;
	}
	.s_mywal .s_wal_mas button{
		width: 150px;
		height: 50px;
		outline: none;
		border: 0 solid;
		color: white;
		background-color: #F08200;
		border-radius: 3px;
		font-size: 18px;
		float: left;
	}
	.s_mywal .s_wal_mas button:hover{
		cursor: pointer;
	}
</style>