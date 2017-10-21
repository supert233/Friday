<template>
	<div class="s_permas">
		<div class="s_perm_he"><span>个人资料</span></div>
		<div class="s_perSon">
			<div class="userPho">
				<span>当前头像 : </span>
				<img src="../pages/index/assets/用户头像.png"/>
			</div>
			<div class="perName"><span>昵称 : </span><input type="" name="" id="" value="" /></div>
			<div class="perSex">
				<span>性别 : </span>
				<input type="radio" name="sex" id="man"/> <label for="man">男</label>
				<input type="radio" name="sex" id="women"/> <label for="women">女</label>
			</div>
			<div class="perBath"><span>生日 : </span></div>
			<div class="perPhone"><span>手机 : </span> <input type="number" name="" id="" value="" /></div>
			<button>确认提交</button>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	.s_permas{
		border: 1px solid #e7e7e7;
	}
	.s_perm_he {
		height: 56px;
		width: 100%;
		border-bottom:  1px solid #e7e7e7 ;
		font-size: 18px;
		line-height: 56px;
	}
	.s_perm_he span{
		margin-left: 20px;
		color: #333333;
	}
	.s_perSon{
		padding: 40px 40px 0;
		font-size: 18px;
	}
	.userPho{
		height: 80px;
		
	}
	.userPho img{
		width: 80px;
		height: 80px;
	}
	.userPho span{
		display: inline-block;
		line-height: 80px;
		float: left;
	}
	.perName,.perSex,.perBath,.perPhone{
		margin-left: 36px;
	}
</style>