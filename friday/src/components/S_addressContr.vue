<template>
	<div class="s_addresscon">
		<div class="s_address_he">
			<span>地址管理</span>
			<router-link to="/s_upaddress"><button>添加新地址</button></router-link>
		</div>
		<div class="s_addres_bod">
			<div v-if="addres_nu" class="s_addr_null">
				<img src="../pages/index/assets/ritaddress.png"/>
				<span>暂无收货地址,请点击</span>
				<router-link to="/s_upaddress"><button>添加新地址</button></router-link>
			</div>
			<div v-if="addres_has" class="s_addr_has">
				<div class="s_addr_tit">
					<span>收货人</span>
					<span>所在区域</span>
					<span>街道地址</span>
					<span>联系电话</span>
					<span>备注</span>
					<span>操作</span>
				</div>
				<div class="s_addr_mas">
					<span>苏某人</span>
					<span>河南省 郑州市 高新区</span>
					<span>莲花街55号威科姆园区B座</span>
					<span>12345678930</span>
					<span>无</span>
					<span><span>修改</span> | <span>删除</span></span>
				</div>
				<div class="s_addr_mas">
					<span>苏某人</span>
					<span>河南省 郑州市 高新区</span>
					<span>莲花街55号威科姆园区B座</span>
					<span>12345678930</span>
					<span>无</span>
					<span><span>设置为默认地址</span> | <span>修改</span> | <span>删除</span></span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"s_addresscon",
		data(){
			return{
				addres_nu:false,
				addres_has:true
			}
		}
	}
</script>

<style scoped>
	.s_addresscon {
		border: 1px solid #e7e7e7;
	}
	/*标题*/
	.s_addresscon .s_address_he {
		height: 56px;
		width: 100%;
		border-bottom:  1px solid #e7e7e7 ;
		font-size: 18px;
		line-height: 56px;
		margin-bottom: 20px;
	}
	.s_addresscon .s_address_he span {
		margin-left: 20px;
		color: #333333;
	}
	.s_addresscon .s_address_he button,.s_addr_null button{
		width: 90px;
		height: 30px;
		outline: none;
		border: 0 solid;
		color: white;
		background-color: #498e3d;
		border-radius: 4px;
		float: right;
		margin-right: 20px;
		margin-top: 15px;
	}
	/*具体地址情况*/
	.s_addres_bod {
		height: 551px;
		position: relative;
	}
	/*没有地址*/
	.s_addres_bod .s_addr_null{
		width: 334px;
		height: 32px;
		/*margin: 361px 256px 0 0;*/
		position: absolute;
		top: 40%;
		left: 30%;
		
	}
	.s_addres_bod .s_addr_null img{
		display: inline-block;
		float: left;
		margin-right: 20px;
	}
	.s_addres_bod .s_addr_null span{
		font-size: 20px;
		color: #999999;
		line-height: 32px;
	}
	.s_addr_null button{
		margin: 0;
	}
	/*有具体地址*/
	.s_addr_has {
		width: 1044px;
		border-top:1px solid #E9E9E9  ;
		border-left: 1px solid #E9E9E9;
		border-right: 1px solid #E9E9E9;
		
		margin-left: 20px;
		
	}
	.s_addr_has div{
		width: 1044px;
		display: flex;
		text-align: center;
		justify-content: space-around;
		align-content: space-between;
		/*margin-left: 20px;*/
	}
	.s_addr_has .s_addr_tit{
		height: 46px;
		line-height: 46px;
		background-color: #f2f2f2;
	}
	.s_addr_tit span:last-child{
		width: 150px;
		display: inline-block;
	}
	.s_addr_tit span:nth-child(4){
		width: 80px;
		margin-left: 30px;
	}
	.s_addr_tit span:nth-child(3){
		width: 80px;
		margin-left: 50px;
	}
	.s_addr_mas{
		height: 52px;
		line-height: 52px;
		border-bottom:1px solid #E9E9E9 ;
		color:#7a7a7a;
		
	}
	.s_addr_mas span:last-child{
		width: 220px;
	}
	.s_addr_mas span span:nth-last-child(2),.s_addr_mas span span:nth-last-child(1){
		color: #4B943D;
	}
	.s_addr_mas span span:nth-last-child(3){
		color: #f08a10;
	}
</style>