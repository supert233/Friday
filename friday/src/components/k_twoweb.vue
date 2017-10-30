<template>
	<div>
		<!--分类-->
		<div class="p_sort">
			您的当前位置 :
			<span>首页 > </span>
			<span>{{oneweb}}</span>
			<span> > {{twoweb}}</span>
		</div>
		<!--一级分类-->
		<div class="p_fir">
			<span>一级分类 : </span>
			<ul>
				<li>全部</li>
				<li>新鲜水果</li>
				<li>生猛海鲜</li>
				<li>肉类家禽</li>
				<li>蛋奶素食</li>
			</ul>
		</div>
		<!--二级分类-->
		<div class="p_fir">
			<span>二级分类 : </span>
			<ul>
				<li>全部</li>
				<li v-for="item in allweb">{{item}}</li>				
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
			<ul>
				<li>
					<img src="../pages/index/assets/sort1.jpg" alt="" />
					<img src="../pages/index/assets/shopping.png" alt="" class="p_shop" />
				</li>
				<li>
					<img src="../pages/index/assets/sort2.jpg" alt="" />
					<img src="../pages/index/assets/shopping.png" alt="" class="p_shop" />
				</li>
				<li>
					<img src="../pages/index/assets/sort3.jpg" alt="" />
					<img src="../pages/index/assets/shopping.png" alt="" class="p_shop" />
				</li>
				<li>
					<img src="../pages/index/assets/sort4.jpg" alt="" />
					<img src="../pages/index/assets/shopping.png" alt="" class="p_shop" />
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
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
			}
			
		},
		
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
		margin: 0 auto;
	}
	
	.p_content ul {
		display: flex;
		justify-content: space-between;
	}
	
	.p_content ul li {
		position: relative;
	}
	
	.p_content .p_shop {
		position: absolute;
		bottom: 24px;
		right: 20px;
		z-index: 10;
	}
</style>