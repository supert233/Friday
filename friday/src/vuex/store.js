import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 定义状态
  state: {
    author: '',
    twoweb:'',
    oneweb:'',
    truename:'',
    userid:'',
    myscore:'',
    mymoney:'',
    userphone:'',
    allweb:'',

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
  	},

  	truename(state,msg){
  		state.truename=msg
  	},
  	userid(state,msg){
  		state.userid=msg
  	},
  	myscore(state,msg){
  		state.myscore=msg
  	},
  	mymoney(state,msg){
  		state.mymoney=msg
  	},
  	userphone(state,msg){
  		state.userphone=msg
  	},

  	allAuthor(state,msg){
  		state.allweb=msg
  	}

  	
  }
})

export default store