<template>
	<div class="z_detail">
		<p class="z_curLocal">你当前的位置是:
			<a href="">首页</a><span> ></span>
			<a href="">全部商品</a><span> ></span>
			<a href="">新鲜水果</a><span> ></span>
			<a href="">时令水果</a><span> ></span>
			<a href="">新疆哈密瓜</a>
		</p>
		<div class="z_content">
			<div class="z_leftImg">
				<!--大图-->
				<div @mouseenter="showMask()" @mouseleave="hideMask()" class="z_bigImg">
					<img src="../pages/index/assets/bigImg.jpg" id="z_smallImg"/>
					<!--背景蒙板-->
					<div class="z_mask"></div>
				</div>
				<!--放大的图片-->
				<div class="z_showImg">
					<img src="../pages/index/assets/bigImg.jpg" width="916px" id="z_showImg" />
				</div>
				<!--小图轮播-->
				<div class="z_smallImg" @mouseenter="tabImg()">
					<img src="../pages/index/assets/left.png" alt="" class="noBorder" />
					<img src="../pages/index/assets/smallImg0.png" class="border" />
					<img src="../pages/index/assets/smallImg1.jpg" alt="" class="border" />
					<img src="../pages/index/assets/smallImg2.jpg" alt="" class="border" />
					<img src="../pages/index/assets/smallImg3.jpg" alt="" class="border" />
					<img src="../pages/index/assets/smallImg4.jpg" alt="" class="border" />
					<img src="../pages/index/assets/right.png" class="noBorder" />
				</div>
			</div>
			<div class="z_rightInfor">
				<p class="z_title">新疆哈密瓜1500kg</p>
				<div class="z_label">
					<span>全国</span>
					<span class="z_color">礼拜五</span>
					<span>次日达</span>
					<span>自营</span>
				</div>
				<div class="z_rightMid">
					<div class="midRight">
						<img src="../pages/index/assets/midImg.png" />
						<div>资深买家</div>
					</div>
					<!--简介-->
					<p>热卖了,热卖了!!!哈密瓜有“瓜中之王”的美称，不但香甜，而且富有营养价值。其中铁的含量比鸡肉多两三倍，比牛奶高17倍。而产自新疆吐鲁番的哈密瓜，由于当地气候干旱、光热丰富、日照时间长、雪水灌溉等自然条件，口感脆甜爽口，在市面上很受欢迎。</p>
				</div>
				<!--价钱-->
				<h2>现价: ¥ {{curPrice}}</h2>
				<p class="weight">请选择规格: <span @click="lightWeight()" :class="{'bgColor':bgbol1}">500g</span><span @click="middleWeight()" :class="{'bgColor':bgbol2}">1000g</span><span @click="veryWeight()" :class="{'bgColor':bgbol3}">2000g</span></p>
				<div class="z_num">
					<span>数量 : </span>
					<div class="change">
						<span class="down" @click="inputMinus()">-</span>
						<input type="text" readonly="readonly" class="inputNum" placeholder="1" />
						<span class="up" @click="inputAdd()">+</span>
					</div>
					<span>件</span>
					<div class="shopping">加入购物车</div>
					<div class="pay">
						<a href="">立即购买</a>
					</div>
				</div>
				<div class="z_like">
					<div class="z_collect">
						<img src="../pages/index/assets/红星星.png" v-if="!bols" />
						<img src="../pages/index/assets/白星星.png" v-if="bols" />
						<span @click="comCollect()" class="collectS">{{collectCont}}</span>
					</div>
					<div class="z_share">
						分享到 :
						<a href="http://s.share.baidu.com/?click=1&url=http%3A%2F%2Fwww.libaiwu.com.cn%2Fgoods%2Fdetail%3Fid%3D460&uid=0&to=tqq&type=text&pic=&title=%E7%A4%BC%E6%8B%9C%E4%BA%94+%7C+%E5%B1%B1%E7%BE%8A%E5%A5%B6%E7%9A%82+Caprina+Goat+Milk+Soap+%EF%BC%88110g%EF%BC%89&key=&desc=&comment=&relateUid=&searchPic=0&sign=on&l=1bsshden21bsshdfmm1bsshqf1r&linkid=j8zp1477aln&firstime=1508491325372"><img src="../pages/index/assets/4.png" /></a>
						<a href="http://url.cn/553lmjx"><img src="../pages/index/assets/1.png" /></a>
						<a href="http://url.cn/51OtOKP"><img src="../pages/index/assets/3.png" /></a>
						<a href="http://url.cn/5GKPwl8"><img src="../pages/index/assets/5.png" /></a>
						<a href="http://url.cn/597UzYo"><img src="../pages/index/assets/2.png" alt="" /></a>
					</div>
				</div>
			</div>
		</div>
		<!--详情和评价-->
		<div class="z_show">
			<div class="z_menu">
				<span @click="show1()" :class="{'bord':bol}">商品详情</span>
				<span @click="show2()" :class="{'bord':boleen}">商品评价</span>
			</div>
			<div class="z_menuCont">
				<!--商品评价-->
				<div v-if="boleen" class="z_total">
					<!--每一条-->
					<div class="z_first">
						<div class="z_left">
							<!--评价人-->
							<img src="../pages/index/assets/personImg.png" class="perImg" />
							<p class="method">黑夜中最亮的星</p>
						</div>
						<div class="z_light">
							<!--星级评价-->
							<div>
								<img src="../pages/index/assets/红星星.png" />
								<img src="../pages/index/assets/红星星.png" />
								<img src="../pages/index/assets/红星星.png" />
								<img src="../pages/index/assets/红星星.png" />
								<img src="../pages/index/assets/白星星.png" />
							</div>

							<!--语言评价-->
							<p>不错,瓜大皮薄,吃着比较甜,下次还会购买</p>
							<!--附加图片-->
							<div class="z_addImg">
								<img src="../pages/index/assets/introImg2.jpg" alt="" />
								<img src="../pages/index/assets/introImg4.jpg" alt="" />
								<img src="../pages/index/assets/introImg3.jpg" alt="" />
								<img src="../pages/index/assets/intro5.jpg" alt="" />
							</div>

						</div>
					</div>
					<!--第二条-->
					<div class="z_first">
						<!--评价人-->
						<div class="z_left">
							<img src="../pages/index/assets/personImg.png" class="perImg" />
							<p class="method">黑夜中最亮的星</p>
						</div>
						<div class="z_light">
							<!--星级评价-->
							<div>
								<img src="../pages/index/assets/红星星.png" />
								<img src="../pages/index/assets/红星星.png" />
								<img src="../pages/index/assets/红星星.png" />
								<img src="../pages/index/assets/红星星.png" />
								<img src="../pages/index/assets/白星星.png" />
							</div>

							<!--语言评价-->
							<p>不错,瓜大皮薄,吃着比较甜,下次还会购买</p>
							<!--附加图片-->
							<div class="z_addImg">
								<img src="../pages/index/assets/introImg2.jpg" alt="" />
								<img src="../pages/index/assets/introImg4.jpg" alt="" />
								<img src="../pages/index/assets/introImg3.jpg" alt="" />
								<img src="../pages/index/assets/intro5.jpg" alt="" />
							</div>
						</div>
					</div>
				</div>
				<!--商品详情-->
				<div v-if="bol" class="z_total1">
					<div class="one">
						<span>哈密瓜简介:</span>
						<p>哈密瓜的品种资源很丰富。按成熟期不同，分早熟、中熟和晚熟品种</p>
						<p>早、中熟的称为夏瓜，晚熟的称为冬瓜。早熟的品种主要有黄旦子、纳西甘、一包糖、包孜可口奇、石甜401等，其特点是皮薄肉细，香味浓郁。。</p>
						<p>中熟品种主要有红心脆多汁、肉厚细腻、清香爽口而博得人们喜爱。晚熟品种主要有黑眉毛密极干、青麻皮密极干、炮台红、青皮红肉、青皮冬瓜、黄皮白肉可口奇等。“黑眉毛”、“青麻皮”的特点是瓜肉呈淡青色，储藏后肉质由脆硬，逐渐变得绵软多汁、甜爽而又醇香</p>
						<img src="../pages/index/assets/商品详情.png" />
					</div>
					<div class="one">
						<span>哈密瓜简介:</span>
						<p>哈密瓜的品种资源很丰富。按成熟期不同，分早熟、中熟和晚熟品种</p>
						<p>早、中熟的称为夏瓜，晚熟的称为冬瓜。早熟的品种主要有黄旦子、纳西甘、一包糖、包孜可口奇、石甜401等，其特点是皮薄肉细，香味浓郁。。</p>
						<p>中熟品种主要有红心脆多汁、肉厚细腻、清香爽口而博得人们喜爱。晚熟品种主要有黑眉毛密极干、青麻皮密极干、炮台红、青皮红肉、青皮冬瓜、黄皮白肉可口奇等。“黑眉毛”、“青麻皮”的特点是瓜肉呈淡青色，储藏后肉质由脆硬，逐渐变得绵软多汁、甜爽而又醇香</p>
						<img src="../pages/index/assets/商品详情.png" />
					</div>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "z_detail",
		data() {
			return {
				bol: true,
				boleen: false,
				curPrice: 20,
				collectCont: "收藏此商品",
				//收藏:
				bols: true,
				bgbol1: false,
				bgbol2: false,
				bgbol3: false
			}
		},
		methods: {
			//放大镜
			showMask: function() {
				var zMask = document.getElementsByClassName("z_mask")[0];
				var bigImg = document.getElementsByClassName("z_bigImg")[0];
				var zContent = document.getElementsByClassName("z_content")[0];
				var showImg = document.getElementsByClassName("z_showImg")[0];
				var showImage = document.getElementById("z_showImg");
				zMask.style.display = "block";
				showImg.style.display = "block";
				bigImg.onmousemove = function(event) {
					var even = event || window.event;
					//设置鼠标距离浏览器左和上边缘的位置
					var x = event.pageX;
					var y = event.pageY;
					//获取大图与浏览器左和上边缘的位置
					var leftX = zContent.offsetLeft;
					var topY = zContent.offsetTop;
					//获取 蒙板的宽和高0
					var width = zMask.clientWidth;
					var height = zMask.clientHeight;
					//背景蒙板跟随
					var left = (x - leftX - width / 2);
					var top = (y - topY - width / 2);

					//设置 水平 和 垂直的 极限值
					//水平
					if(left <= 0) {
						left = 0;
					} else if(left >= bigImg.clientWidth - width) {
						left = bigImg.clientWidth - width;
					}
					//垂直
					if(top <= 0) {
						top = 0;
					} else if(top >= bigImg.clientHeight - height) {
						top = bigImg.clientHeight - height;
					}
					//赋值给蒙版
					zMask.style.left = left + "px";
					zMask.style.top = top + "px";

					// 调整大图的 left 和 top
					//计算比例系数
					var scaleX = (showImage.clientWidth - showImg.clientWidth) / (bigImg.clientWidth - width);
					var scaleY = (showImage.clientHeight - showImg.clientHeight) / (bigImg.clientHeight - height);
					// 赋值 给大图的 left 和 top
					showImage.style.left = -left * scaleX + "px";
					showImage.style.top = -top * scaleY + "px";

				}

			},
			hideMask: function() {
				var zMask = document.getElementsByClassName("z_mask")[0];
				var showImg = document.getElementsByClassName("z_showImg")[0];
				zMask.style.display = "none";
				showImg.style.display = "none";
			},
			tabImg: function() {
				var tabImg = document.querySelectorAll(".z_smallImg img");
				var smallImg = document.getElementById("z_smallImg");
				var showImage = document.getElementById("z_showImg");
				for(var i = 1; i < tabImg.length-1; i++) {
					tabImg[i].onmouseenter = function() {
						//更改小图和大图的素材
						smallImg.src = this.src;
						showImage.src = this.src;
					}
				}
			},

			show1: function() {
				this.bol = true,
					this.boleen = false
			},
			show2: function() {
				this.bol = false,
					this.boleen = true
			},
			//数量增加的方法
			inputAdd: function() {
				var inputNum = document.getElementsByClassName("inputNum")[0];
				//				console.log(inputNum.value);
				//				inputNum.value=Math.floor(inputNum.value)+1;
				inputNum.value++;

			},
			//数量减少的方法
			inputMinus: function() {
				var inputNum = document.getElementsByClassName("inputNum")[0];
				//				console.log(inputNum.value);
				if(inputNum.value <= 1) {
					inputNum.value = 1;
				} else {
					//         			inputNum.value=Math.floor(inputNum.value)-1;
					inputNum.value--;
				}
			},
			//选择不同的规格
			lightWeight: function() {
				this.curPrice = 20;
				this.bgbol1 = !this.bgbol1;
				this.bgbol2 = false;
				this.bgbol3 = false;
			},
			middleWeight: function() {
				this.curPrice = 30;
				this.bgbol2 = !this.bgbol2;
				this.bgbol1 = false;
				this.bgbol3 = false;
			},
			veryWeight: function() {
				this.curPrice = 40;
				this.bgbol3 = !this.bgbol3;
				this.bgbol1 = false;
				this.bgbol2 = false;
			},
			comCollect: function() {
				this.bols = !this.bols;
				var collectS = document.getElementsByClassName("collectS");
				if(!this.bols) {
					collectS.text = "已收藏";
					this.collectCont = collectS.text;
				} else {
					collectS.text = "收藏此商品";
					this.collectCont = collectS.text;
				}
			}
		}

	}
</script>
<!--scoped 本样式只在该组件中使用,以免与其他样式产出冲突-->
<style scoped>
	/*改变规格背景颜色*/
	
	.bgColor {
		background-color: green;
	}
	/*详情部分*/
	
	body,
	div,
	img,
	a,
	p,
	span,
	h2,
	input {
		margin: 0;
		padding: 0;
	}
	
	.z_detail {
		width: 1280px;
		margin: 0 auto;
		/*background-color: pink;*/
	}
	
	.z_content {
		position: relative;
	}
	/*所有的a标签去下划线*/
	
	.z_curLocal a {
		text-decoration: none;
	}
	
	.z_curLocal {
		color: #6f6f6f;
		font-size: 15px;
		line-height: 54px;
		background-color: #f4f4f4;
		margin-top: 20px;
		margin-bottom: 18px;
		padding-left: 20px;
	}
	
	.z_curLocal a {
		color: #6f6f6f;
		font-size: 15px;
	}
	
	.z_leftImg {
		width: 500px;
	}
	
	.z_bigImg {
		width: 458px;
		height: 458px;
		border: 1px solid #e4e4e4;
	}
	
	.z_bigImg img {
		width: 100%;
		height: 100%;
	}
	
	.z_smallImg {
		margin-top: 22px;
		/*清除图片中间的空隙*/
		font-size: 0;
		display: flex;
		/*默认是主轴左对齐*/
		/*justify-content:left;*/
		align-items: center;
	}
	
	.z_smallImg img {
		margin-right: 12px;
	}
	
	.z_smallImg .border {
		width: 68px;
		height: 68px;
		border: 1px solid #e4e4e4;
	}
	
	.z_smallImg .noBorder {
		width: 20px;
		height: 30px;
	}
	/*右侧部分*/
	
	.z_rightInfor {
		position: absolute;
		top: 18px;
		left: 518px;
	}
	
	.z_rightInfor .z_title {
		margin-bottom: 20px;
	}
	
	.z_label {
		margin-bottom: 20px;
	}
	
	.z_label span {
		display: inline-block;
		width: 45px;
		line-height: 25px;
		background-color: green;
		color: white;
		font-size: 12px;
		text-align: center;
	}
	
	.z_label .z_color {
		background-color: #f08200;
	}
	
	.z_rightMid {
		width: 762px;
		border-top: 1px solid #ededed;
		border-bottom: 1px solid #ededed;
		padding-top: 12px;
		padding-bottom: 10px;
		position: relative;
	}
	
	.z_rightMid img {
		width: 120px;
		height: 120px;
		/*background-color: cornflowerblue;*/
	}
	
	.z_rightMid .midRight {
		width: 120px;
	}
	
	.z_rightMid .midRight div {
		width: 120px;
		line-height: 30px;
		background-color: #ffe313;
		text-align: center;
		border-radius: 20px;
	}
	
	.z_rightMid p {
		position: absolute;
		top: 32px;
		left: 152px;
		font-size: 16px;
		color: #666;
	}
	
	.z_rightInfor h2 {
		color: red;
		margin-top: 16px;
	}
	
	.z_rightInfor .weight {
		margin-top: 16px;
		margin-bottom: 16px;
	}
	
	.z_rightInfor .weight span {
		display: inline-block;
		width: 70px;
		line-height: 20px;
		border: 1px solid #d4d4d4;
		margin-left: 15px;
		text-align: center;
		/*css鼠标手势*/
		cursor: pointer;
	}
	
	.z_rightInfor .z_num {
		/*弹性布局*/
		display: flex;
		line-height: 35px;
		margin-bottom: 30px;
	}
	
	.z_num .change {
		margin-left: 10px;
		margin-right: 10px;
		/*display: flex;*/
	}
	/*两个span和input中间因换行出现空格,分别浮动清除空格*/
	
	.z_num .change span {
		display: inline-block;
		width: 30px;
		line-height: 28px;
		background-color: #f2f2f2;
		text-align: center;
		font-weight: 600;
		border: 1px solid #999;
		font-size: 25px;
		/*清除空格*/
		float: left;
		/*css鼠标手势*/
		cursor: pointer;
	}
	
	.z_num .change input {
		text-align: center;
		font-size: 18px;
		width: 70px;
		line-height: 28px;
		border: 1px solid #999;
		outline: none;
		/*清除空格*/
		float: left;
	}
	
	.z_num .shopping {
		width: 120px;
		line-height: 35px;
		color: white;
		background-color: #f08200;
		border-radius: 10px;
		text-align: center;
		margin-left: 25px;
		margin-right: 16px;
		/*css鼠标手势*/
		cursor: pointer;
	}
	
	.z_num .pay a {
		text-decoration: none;
		color: white;
		line-height: 35px;
	}
	
	.z_num .pay {
		width: 120px;
		background-color: #f08200;
		border-radius: 10px;
		text-align: center;
		/*css鼠标手势*/
		cursor: pointer;
	}
	
	.z_like {
		font-size: 14px;
		text-align: center;
		display: flex;
		height: 20px;
	}
	
	.z_like .z_collect {
		width: 120px;
		margin-right: 14px;
		display: flex;
	}
	/*商品收藏*/
	
	.z_collect span {
		/*css鼠标手势*/
		cursor: pointer;
	}
	
	.z_collect img {
		width: 20px;
		margin-right: 6px;
	}
	
	.z_like .z_share {
		display: flex;
	}
	
	.z_share img {
		width: 20px;
		margin: 0 3px;
	}
	/*详情和评价*/
	
	.z_show {
		width: 1280px;
		border: 1px solid #e4e4e4;
		/*background-color: lightpink;*/
		margin-top: 40px;
		margin-bottom: 40px;
	}
	
	.z_menu {
		background-color: #f4f4f4;
		/*border-top:1px solid # #e4e4e4;*/
		height: 48px;
	}
	
	.z_menu span {
		display: inline-block;
		width: 125px;
		line-height: 46px;
		border-left: 1px solid #e4e4e4;
		border-right: 1px solid #e4e4e4;
		text-align: center;
		float: left;
		/*css鼠标手势*/
		cursor: pointer;
	}
	
	.z_menuCont {
		width: 100%;
	}
	/*商品评价*/
	
	.z_total {
		margin: 20px;
		/*display: none;*/
	}
	
	.z_first {
		border-bottom: 1px solid #e9e9e9;
		padding-top: 16px;
		padding-bottom: 20px;
		/*overflow: hidden;*/
	}
	
	.z_first .z_left {
		float: left;
		text-align: center;
	}
	
	.z_first .z_light {
		margin-top: 10px;
		margin-left: 30px;
		float: left;
	}
	/*清浮动*/
	
	.z_first:after {
		content: "";
		display: block;
		clear: both;
	}
	
	.z_addImg img {
		width: 80px;
		height: 80px;
	}
	/*商品详情*/
	
	.z_total1 {
		margin-top: 20px;
		margin-left: 20px;
		/*display: none;*/
	}
	
	.z_total1 span {
		color: #f08200;
		font-size: 18px;
		font-weight: 600;
	}
	
	.z_total1 p {
		margin-top: 6px;
		margin-bottom: 6px;
	}
	
	.z_total1 img {
		margin-left: 20px;
	}
	
	.one {
		margin-bottom: 20px;
	}
	/*切换时的边框样式*/
	
	.bord {
		background-color: white;
		border-top: 2px solid green;
		border-bottom: 0 solid white;
		color: green;
	}
	/*放大镜样式*/
	
	.z_mask {
		width: 140px;
		height: 140px;
		background-color: red;
		opacity: 0.4;
		position: absolute;
		display: none;
	}
	
	.z_leftImg .z_showImg {
		width: 300px;
		height: 300px;
		overflow: hidden;
		position: absolute;
		top: 0;
		left: 465px;
		z-index: 1000;
		display: none;
	}
	
	.z_showImg #z_showImg {
		position: absolute;
	}
</style>