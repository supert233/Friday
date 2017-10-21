<template>
  <div id="app">
  	<kheader></kheader>
  	<router-view></router-view>
  	<!--<uhomes></uhomes>-->
  	
  </div>
</template>

<script>
//	import Users from "../.././components/s_users"
//	import Uhomes from "../.././components/Uhomes"
	import Kheader from "../.././components/k_header"
export default {
  name: 'apps',
 components:{
//	  	Users,
//	  	Uhomes,
	  	Kheader
	  	
	  }
}
</script>

<style scoped>
body,div,span,p,ul,li{
	margin: 0;
	padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}

</style>
