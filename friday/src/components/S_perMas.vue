<template>
	<div class="s_permas">
		<div class="s_perm_he"><span>个人资料</span></div>
		<div class="s_perSon">
			<div class="userPho">
				<span>当前头像 : </span>
				<img src="../pages/index/assets/用户头像.png"/>
			</div>
			<div class="perName"><span>昵称 : </span><input type="" name="" id="" value=""  v-model="turena"/></div>
			<div class="perSex">
				<span>性别 : </span>
				<input type="radio" name="sex" id="man" /> <label for="man">男</label>
				<input type="radio" name="sex" id="women"/> <label for="women">女</label>
			</div>
			<div class="perBath">
				<span>生日 : </span>
				<select id="form_dob_year" name="dob_year">
				    <!--<option value="-">-</option>-->
				    <option value="2017">2017</option>
				    <option value="2016">2016</option>
				    <option value="2015">2015</option>
				    <option value="2014">2014</option>
				    <option value="2013">2013</option>
				    <option value="2012">2012</option>
				    <option value="2011">2011</option>
				    <option value="2010">2010</option>
				    <option value="2009">2009</option>
				    <option value="2008">2008</option>
				    <option value="2007">2007</option>
				    <option value="2006">2006</option>
				    <option value="2005">2005</option>
				    <option value="2004">2004</option>
				    <option value="2003">2003</option>
				    <option value="2002">2002</option>
				    <option value="2001">2001</option>
				    <option value="2000">2000</option>
				    <option value="1999">1999</option>
				    <option value="1998">1998</option>
				    <option value="1997">1997</option>
				    <option value="1996">1996</option>
				    <option value="1995">1995</option>
				    <option value="1994">1994</option>
				    <option value="1993" selected="selected">1993</option>
				    <option value="1992">1992</option>
				    <option value="1991">1991</option>
				    <option value="1990">1990</option>
				    <option value="1989">1989</option>
				    <option value="1988">1988</option>
				    <option value="1987">1987</option>
				    <option value="1986">1986</option>
				    <option value="1985">1985</option>
				    <option value="1984">1984</option>
				    <option value="1983">1983</option>
				    <option value="1982">1982</option>
				    <option value="1981">1981</option>
				    <option value="1980">1980</option>
				    <option value="1979">1979</option>
				    <option value="1978">1978</option>
				    <option value="1977">1977</option>
				    <option value="1976">1976</option>
				    <option value="1975">1975</option>
				    <option value="1974">1974</option>
				    <option value="1973">1973</option>
				    <option value="1972">1972</option>
				    <option value="1971">1971</option>
				    <option value="1970">1970</option>
				    <option value="1969">1969</option>
				    <option value="1968">1968</option>
				    <option value="1967">1967</option>
				    <option value="1966">1966</option>
				    <option value="1965">1965</option>
				    <option value="1964">1964</option>
				    <option value="1963">1963</option>
				    <option value="1962">1962</option>
				    <option value="1961">1961</option>
				    <option value="1960">1960</option>
				    <option value="1959">1959</option>
				</select>
				年
				<select id="form_dob_month" name="dob_month">  
				    <option value="01">1</option>
				    <option value="02">2</option>
				    <option value="03">3</option>
				    <option value="04">4</option>
				    <option value="05">5</option>
				    <option value="06">6</option>
				    <option value="07">7</option>
				    <option value="08">8</option>
				    <option value="09">9</option>
				    <option value="10" selected="selected">10</option>
				    <option value="11">11</option>
				    <option value="12">12</option>
				</select>
				月
				 <select id="form_dob_day" name="dob_day">
				    <option value="-">-</option>
				    <option value="01">1</option>
				    <option value="02">2</option>
				    <option value="03">3</option>
				    <option value="04">4</option>
				    <option value="05">5</option>
				    <option value="06">6</option>
				    <option value="07">7</option>
				    <option value="08">8</option>
				    <option value="09">9</option>
				    <option value="10" selected="selected">10</option>
				    <option value="11">11</option>
				    <option value="12">12</option>
				    <option value="13">13</option>
				    <option value="14">14</option>
				    <option value="15">15</option>
				    <option value="16">16</option>
				    <option value="17">17</option>
				    <option value="18">18</option>
				    <option value="19">19</option>
				    <option value="20">20</option>
				    <option value="21">21</option>
				    <option value="22">22</option>
				    <option value="23">23</option>
				    <option value="24">24</option>
				    <option value="25">25</option>
				    <option value="26">26</option>
				    <option value="27">27</option>
				    <option value="28">28</option>
				    <option value="29">29</option>
				    <option value="30">30</option>
				    <option value="31">31</option>
				</select>
				日
			</div>
			<div class="perPhone">
				<span>手机 : </span> 
				<input type="number" name="" id="" value=""  v-model="chanphone"/>
				<router-link to="/s_changePhone"><span class="chaPhone">更换手机</span></router-link>
			</div>
			<button @click="changeMas">确认提交</button>
			
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				turena:"",
				chanphone:"",
				sex:""
			}
		},
		methods:{
			changeMas:function(){
				this.$store.commit('truename',this.turena);
				var userid = localStorage.getItem("userid");
				var man = document.getElementsByName("sex")[0];
				var women = document.getElementsByName("sex")[1];
				var year = document.getElementsByTagName("select")[0].value;
				var month = document.getElementsByTagName("select")[1].value;
				var day = document.getElementsByTagName("select")[2].value;
				
				var barth = year+month+day;
				console.log(barth);
				if (man.checked) {
					this.sex="男"
				}else if(women.checked){
					this.sex="女"
				}else{
					this.sex=""
				}

				this.$http.post('/api/user/changeuser',{
						userid:userid,
						username:this.turena,
						sex:this.sex,
						birthday:barth,
						
						
						},{emulateJSON:true}).then(function(res){
							console.log(res.body.err)
							var keys = res.body.err
							if(keys==1){
								localStorage.setItem("truename",this.turena);
							}else{
								alert("修改失败")
							}
							
						})
				
				
				
			}
			
		},
		computed:{
			truename () {
	        return this.$store.state.truename
	      },
	      userphone () {
	        return this.$store.state.userphone
	      },
		},
		mounted(){
			this.turena = this.$store.state.truename
			this.chanphone = this.$store.state.userphone
		}
	}
</script>

<style scoped>
	.s_permas{
		border: 1px solid #e7e7e7;
	}
	a{
		text-decoration: none;
	}
	/*头部标题*/
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
		height: 531px;
	}
	.userPho{
		height: 80px;
		margin-bottom: 10px;
		
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
		height: 36px;
		font-size: 18px;
		line-height: 36px;
		margin-bottom: 20px;
	}
	.perName input,.perPhone input{
		width: 170px;
		height: 32px;
		border: 1px solid #d3d3d3;
		background-color: #f4f4f4;
		line-height: 32px;
		text-indent: 24px;
		outline: none;
		font-size: 16px;
		color: #666666;
	}
	.perPhone .chaPhone{
		margin-left: 20px;
		color: #4B943D;
	}
	/*生日选择框*/
	.perBath select{
		width: 88px;
		height: 34px;
		border:1px solid #d3d3d3 ;
		/*appearance:none;*/
		appearance: none;
		font-size: 16px;
		padding-left: 24px;
		outline: none;
		
	}
	.perBath select:nth-child(2),.perBath select:nth-child(3){
		/*margin-left: 20px;*/
	}
	/*按钮*/
	.s_perSon button{
		width: 150px;
		height: 50px;
		border: 0 solid;
		outline: none;
		color: white;
		background-color: #f08200;
		border-radius: 3px;
		margin-left: 36px;
		font-size: 20px;
	}
</style>