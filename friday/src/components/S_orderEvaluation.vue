<template>
	<div class="s_orderevaluation">
		<div class="s_orevaHe"><span>订单评价</span></div>
		<div class="s_orevaBod">
			<!--商品评价-->
			<div class="s_orevaComm">
				<div class="s_orevaComm_le">
					<img src="../pages/index/assets/ordercomm.png"/>
					<span>珍享 南非进口红心葡萄柚 西柚柚子</span>
				</div>
				<div class="s_orevaComm_ri">
					<div class="s_commOrd">
						<span>商品评分</span>
						<div class="allStar">
							<div class="star" @mouseenter="chosstar()"></div>
							<div class="star"  @mouseenter="chosstar()"></div>
							<div class="star"  @mouseenter="chosstar()"></div>
							<div class="star"  @mouseenter="chosstar()"></div>
							<div class="star"  @mouseenter="chosstar()"></div>
						</div>
					</div>
					<div class="s_orderWord">
						<span>评价商品</span>
						<textarea name="" placeholder="请对商品进行评价,为了不占用您的时间,评论最多50字即可"></textarea>
					</div>
					<div class="s_comPhoto">
						<span>晒图片</span>
						<div class="upcomPhoto">
							<img src="../pages/index/assets/upphoto.png"/>
							<img src="../pages/index/assets/upphoto.png"/>
							<img src="../pages/index/assets/upphoto.png"/>
							<img src="../pages/index/assets/upphoto.png"/>
						</div>
					</div>
				</div>
			</div>
			<!--中间分割线-->
			<div class="lines"></div>
		
			
			<!--最后总体评价-->
			<div class="s_allEvaluation">
				<div class="starEvaluation">
					<span>服务态度</span>
					<div class="allStar">
							
							<div class="star2" @mouseenter="chosstar2()"></div>
							<div class="star2"  @mouseenter="chosstar2()"></div>
							<div class="star2"  @mouseenter="chosstar2()"></div>
							<div class="star2"  @mouseenter="chosstar2()"></div>
							<div class="star2"  @mouseenter="chosstar2()"></div>
							
						</div>
					<span>描述相符</span>
					<div class="allStar">
							
							<div class="star3" @mouseenter="chosstar3()"></div>
							<div class="star3"  @mouseenter="chosstar3()"></div>
							<div class="star3"  @mouseenter="chosstar3()"></div>
							<div class="star3"  @mouseenter="chosstar3()"></div>
							<div class="star3"  @mouseenter="chosstar3()"></div>
							
						</div>
				</div>
				<button>提交评价</button>
			</div>
		</div>
	</div>
</template>

<script>
	import avatar from '../pages/index/assets/star_red.png'
	import avatarGray from '../pages/index/assets/star_red.png'
	export default{
		name:"s_orderevaluation",
		data(){
			return{
				avatar: avatar,
				avatarGray:avatarGray
			}
		},
		methods:{
			chosstar:function(){
				var stars = document.getElementsByClassName("star");
				for (var i = 0; i < stars.length; i++) {
					stars[i].index=i;
				};
				for (var i = 0; i < stars.length; i++) {
					stars[i].onclick=function(){
						for (var i = 0; i < this.index+1; i++) {
						//stars[i].innerHTML = "<img src='"+avatar+"'/>";
						stars[i].style.backgroundImage="url("+avatar+")"
						}
					}
				}
			},
			chosstar2:function(){
				var stars = document.getElementsByClassName("star2");
				for (var i = 0; i < stars.length; i++) {
					stars[i].index=i;
				};
				for (var i = 0; i < stars.length; i++) {
					stars[i].onclick=function(){
						for (var i = 0; i < this.index+1; i++) {
						//stars[i].innerHTML = "<img src='"+avatar+"'/>";
						stars[i].style.backgroundImage="url("+avatar+")"
						}
					}
				}
			},
			chosstar3:function(){
				var stars = document.getElementsByClassName("star3");
				for (var i = 0; i < stars.length; i++) {
					stars[i].index=i;
				};
				for (var i = 0; i < stars.length; i++) {
					stars[i].onclick=function(){
						for (var i = 0; i < this.index+1; i++) {
						//stars[i].innerHTML = "<img src='"+avatar+"'/>";
						stars[i].style.backgroundImage="url("+avatar+")"
						}
					}
				}
			}
		}
	}
</script>

<style scoped>
	.s_orderevaluation{
		border: 1px solid #e7e7e7;
		margin-bottom: 40px;
	}
	/*头部*/
	.s_orderevaluation .s_orevaHe{
		height: 56px;
		width: 100%;
		border-bottom:  1px solid #e7e7e7 ;
		font-size: 18px;
		line-height: 56px;
	}
	.s_orderevaluation .s_orevaHe span{
		margin-left: 20px;
		color: #333333;
	}
	/*订单评价具体内容*/
	.s_orevaBod{
		padding: 20px 0 0 0;
	}
	.s_orevaBod .s_orevaComm{
		width: 1044px;
		padding: 0 20px;
		/*height: 296px;*/
		/*border-bottom: 1px dashed #dedede;*/
	}
	/*左边的图片*/
	.s_orevaComm .s_orevaComm_le{
		width: 260px;
		height: 340px;
		display: inline-block;
	}
	.s_orevaComm_le img{
		margin-bottom: 10px;
	}
	.s_orevaComm_le span{
		color:#666666 ;
	}
	/*右边的评价*/
	.s_orevaComm .s_orevaComm_ri{
		width: 681px;
		display: inline-block;
		float: right;
	}
	.s_orevaComm .s_orevaComm_ri span{
		color: #666666;
		margin-right: 20px;
	}
	/*评价的星星*/
	.s_commOrd{
		margin-bottom: 30px;
	}
	.s_commOrd .allStar{
		display: inline-block;
	}
	/*输入评论*/
	.s_orderWord{
		width: 681px;
		height: 142px;
		margin-bottom: 30px;
	}
	.s_orderWord textarea{
		resize: none;
		outline: none;
		width: 570px;
		height: 114px;
		border: 1px solid #dedede;
		display: inline-block;
		float: right;
		padding: 10px;
		
	}
	/*上传图片*/
	.s_comPhoto{
		
	}
	.s_comPhoto .upcomPhoto{
		margin-left: 88px;
	}
	/*中间分割线*/
	.lines{
		width: 1041px;
		border-bottom: 1px dashed #dedede;
		
		margin: 0 20px 40px 20px;
		
	}
	/*最后的总体评价*/
	.s_allEvaluation{
		width: 100%;
		height: 220px;
		border-top: 1px solid #e9e9e9;
		text-align: center;
	
	}
	.s_allEvaluation button {
		width: 150px;
		height: 50px;
		outline: none;
		border: 0 solid;
		border-radius: 4px;
		color: white;
		font-size: 18px;
		background-color: #F08200;
	}
	/*星星评价*/
	.s_allEvaluation .starEvaluation{
		margin: 50px 0 60px 0;
		height: 20px;
	}
	.starEvaluation .allStar{
		display: inline-block;
		margin-left: 20px;
		
		
	}
	.starEvaluation span{
		display: inline-block;
		
		height: 20px;
		color: #666666;
		margin-left: 60px;
		line-height: 18px;
	}
	/*星星*/
	.allStar div{
		width: 20px;
		height: 20px;
		display: inline-block;
		background-image: url(../pages/index/assets/star_gray.png) ; 
	}
	.allStar div:hover{
		background-image: url(../pages/index/assets/star_red.png);
	}
	</style>