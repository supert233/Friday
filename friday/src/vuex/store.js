import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 定义状态
  state: {
    author: '',
    twoweb:'',
    oneweb:''
  },
  mutations:{
  	newAuthor(state,msg){
  		state.author=msg
  	},
  	oneAuthor(state,msg){
  		state.oneweb=msg
  	},
  	twoAuthor(state,msg){
  		state.twoweb=msg
  	}
  	
  }
})

export default store