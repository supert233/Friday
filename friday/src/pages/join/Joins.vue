<template>
  <div id="app">
  	<!--头部组件-->
  	<!--<kHeaders></kHeaders>-->
  	
  	<!--替换的组件-->
  		<router-view></router-view> 	
  	<!--底部组件-->
  	<zFooter></zFooter>
  </div>
</template>

<script>
//	import kHeaders from "../.././components/k_header";
	import zFooter from "../.././components/z_footer";
	
export default {
  name: 'apps',
 components:{
//	  	kHeaders,
	  	zFooter
	  }
}
</script>

<style scoped>
body,div{
	margin: 0;
	padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}

</style>
