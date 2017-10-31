<template>
  <div id="app">
  	<kheader></kheader>
  	<router-view></router-view>
  	<!--<uhomes></uhomes>-->
  	<zFooter></zFooter>
  </div>
</template>

<script>
//	import Users from "../.././components/s_users"
//	import Uhomes from "../.././components/Uhomes"
	import Kheader from "../.././components/k_header"
	import zFooter from "../.././components/z_footer"
	
export default {
  name: 'apps',
 components:{
//	  	Users,
//	  	Uhomes,
	  	Kheader,
	  	zFooter
	  	
	  }
}
</script>

<style scoped>
body,div,span,p,ul,li,img,input,button,textarea{
	margin: 0;
	padding: 0;
}
img{
	vertical-align: top;
	font-size: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}

</style>
