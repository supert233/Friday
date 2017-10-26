<template>
	<div class="s_massageReturn">
		<div class="s_maReturn_h"><span>意见反馈</span></div>
		<div class="s_maReturn_all">
			<!--意见反馈输入框-->
			<textarea name=""  placeholder="为了更好的用户体验,请写出您对本网站的意见"></textarea>
			<button class="s_masDel">取消</button><button class="s_masUp">提交</button>
		</div>
	</div>
</template>

<script>
	export default{
		name:"s_massageReturn"
	}
</script>

<style scoped>
	.s_massageReturn{
		border: 1px solid #e7e7e7;
	}
	.s_massageReturn .s_maReturn_h{
		height: 56px;
		width: 100%;
		border-bottom:  1px solid #e7e7e7 ;
		font-size: 18px;
		line-height: 56px;
		/*margin-bottom: 40px;*/
	}
	.s_massageReturn .s_maReturn_h span{
		margin-left: 20px;
		color: #333333;
	}
	/*意见反馈具体内容*/
	.s_maReturn_all{
		padding: 40px 40px 0;
		height: 531px;
	}
	.s_maReturn_all textarea{
		width: 1000px;
		height: 372px;
		outline: none;
		resize: none;
		border: 1px solid #d9d9d9;
		padding: 20px;
		margin-bottom: 20px;
	}
	.s_maReturn_all button{
		width: 150px;
		height: 50px;
		color: white;
		border: 0 solid;
		outline: none;
		border-radius: 4px ;
		font-size: 20px;
	}
	.s_maReturn_all .s_masDel{
		margin-left: 310px;
	}
	.s_maReturn_all .s_masUp{
		margin-left: 100px;
		background-color: #F08200;
	}
</style>