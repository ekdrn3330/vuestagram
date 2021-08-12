import axios from 'axios';
import { createStore } from 'vuex'

const store = createStore({
  state(){
    return {
        name : 'Kim',
        age : 20,
        likes : [50, 40, 30, 20, 10],
        좋아요눌렀니 : false,
        more : {},
    }
  },
  mutations: {
    이름변경(state) {
        state.name = 'park';
    },
    나이변경(state, data) {
        state.age += data;
    },
    좋아요증가(state, data) {
        if(state.좋아요눌렀니 == false) {
            state.likes[data] ++;
            state.좋아요눌렀니 = true;
        } else {
            state.likes[data] --;
            state.좋아요눌렀니 = false;
        }
    },
    setMore(state, data) {
        state.more = data;
    },
  },
  actions : {
    getData(context) {
        axios.get('https://codingapple1.github.io/vue/more0.json').then((a)=>{
            console.log(a.data);
            context.commit('setMore', a.data);
        });
    },
  },
})

export default store