<template>
	<div class="k_inte">
		<slider></slider>
		<div class="p_content">
		<!--第一行-->
			<ul>
				<li>
					<img src="../pages/index/assets/init1.jpg" alt="" />
					<router-link to="/z_score"><button class="p_convert">立即兑换</button></router-link>
				</li>
				<li>
					<img src="../pages/index/assets/init2.jpg" alt="" />
					<button class="p_convert">立即兑换</button>
				</li>
				<li>
					<img src="../pages/index/assets/init3.jpg" alt="" />
					<button class="p_convert">立即兑换</button>
				</li>
				<li>
					<img src="../pages/index/assets/init4.jpg" alt="" />
					<button class="p_convert">立即兑换</button>
				</li>
			</ul>
			<!--第二行-->
			<ul>
				<li>
					<img src="../pages/index/assets/init1.jpg" alt="" />
					<button class="p_convert">立即兑换</button>
				</li>
				<li>
					<img src="../pages/index/assets/init2.jpg" alt="" />
					<button class="p_convert">立即兑换</button>
				</li>
				<li>
					<img src="../pages/index/assets/init3.jpg" alt="" />
					<button class="p_convert">立即兑换</button>
				</li>
				<li>
					<img src="../pages/index/assets/init4.jpg" alt="" />
					<button class="p_convert">立即兑换</button>
				</li>
			</ul>
			<!--第三行-->
			<ul>
				<li>
					<img src="../pages/index/assets/init1.jpg" alt="" />
					<button class="p_convert">立即兑换</button>
				</li>
				<li>
					<img src="../pages/index/assets/init2.jpg" alt="" />
					<button class="p_convert">立即兑换</button>
				</li>
				<li>
					<img src="../pages/index/assets/init3.jpg" alt="" />
					<button class="p_convert">立即兑换</button>
				</li>
				<li>
					<img src="../pages/index/assets/init4.jpg" alt="" />
					<button class="p_convert">立即兑换</button>
				</li>
			</ul>
			<!--第四行-->
			<ul>
				<li>
					<img src="../pages/index/assets/init1.jpg" alt="" />
					<button class="p_convert">立即兑换</button>
				</li>
				<li>
					<img src="../pages/index/assets/init2.jpg" alt="" />
					<button class="p_convert">立即兑换</button>
				</li>
				<li>
					<img src="../pages/index/assets/init3.jpg" alt="" />
					<button class="p_convert">立即兑换</button>
				</li>
				<li>
					<img src="../pages/index/assets/init4.jpg" alt="" />
					<button class="p_convert">立即兑换</button>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import slider from './swiper2'
	export default{
		name:"k_inte",
		 components:{
		 	slider
		 },
	}
</script>

<style scoped>
	body,div,ul,li,img,button{
		margin:0;
		padding:0
	}
	ul,li{
		list-style: none;
	}
	ul{
		margin-top: 20px;
		display: flex;
		justify-content: space-between;
	}
	li{
		width: 305px;
		height: 479px;
		position: relative;
	}
	.p_convert{
		outline: none;
		width: 150px;
		height: 36px;
		background-color: #f08200;
		border: 0 solid;
		border-radius: 14px;
		color: white;
		font-size: 15px;
		position: absolute;
		left: 76px;
		top: 422px;
	}
	.k_inte{
		width: 100%;
	}
	.k_inte .p_content{
		width: 1280px;
		margin: 0 auto;
		padding-bottom: 40px;
	}
</style>