<template>
  <div id="app">
  	<!--头部组件-->
  	<shopHeader></shopHeader>
  	<!--替换的组件-->
  	<router-view></router-view>
  	<!--底部组件-->
  	<zFooter></zFooter>
  </div>
</template>

<script>
	import shopHeader from "../.././components/shopHeader";
	import zFooter from "../.././components/z_footer";
	import Z_payMethod from "../.././components/z_payMethod";
export default {
  name: 'apps',
 components:{	
 		shopHeader,
	  	zFooter,
	  	Z_payMethod
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
