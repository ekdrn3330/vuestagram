<template>

  <div class="header">
    <ul class="header-button-left">
      <li @click="step--" v-if="step != 0">이전</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step == 1" @click="step++">다음</li>
      <li v-if="step == 2" @click="publish">발행</li>
    </ul>
    <img @click="step = 0" src="./assets/logo.png" class="logo" />
  </div>

  <!-- <p>{{내이름}} {{age}} {{likes}}</p>

  <h4>안녕 {{ $store.state.name }}</h4>
  <button @click="$store.commit('이름변경')">이름변경</button>
  <h4>나이 : {{ $store.state.age }}</h4>
  <button @click="나이변경(10)">나이증가</button>

  <p>{{ $store.state.more }}</p>
  <button @click="$store.dispatch('getData')">더보기버튼</button> -->

  <Container :누른필터="누른필터"  :게시물="게시물" :step="step" :이미지="이미지" @write="작성한글 = $event" />

  <div class="moreBtnBox" v-if="step == 0"><button @click="more" class="moreBtn">더보기</button></div>

  <div class="footer">
    <ul class="footer-button-plus" v-if="step == 0">
      <input @change="upload" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
 </div>

</template>

<script>
import Container from './components/Container';
import postingData from './assets/postingData.js';
import axios from 'axios';
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'App',
  data(){
    return {
      게시물 : postingData,
      더보기 : 0,
      step : 3,
      이미지 : '',
      누른필터 : '',
      카운터 : 0,
    }
  },

  mounted() {
    this.emitter.on('필터버튼', (a)=>{
      console.log(a);
      this.누른필터 = a;
    });
  },

  components: {
    Container,
  },

  computed: { //return 필요
    // name() {
    //   return this.$store.state.name;
    // },
    ...mapState(['name', 'age', 'likes']),
    ...mapState({ 내이름 : 'name' }),
  },

  methods: {
    ...mapMutations([ 'setMore', '나이변경']),
    more(){
      axios.get(`https://codingapple1.github.io/vue/more${this.더보기}.json`)
      .then( 결과 => {
        this.게시물.push(결과.data);
        this.더보기 ++;
      })
    },
    upload(e){
      let 파일 = e.target.files;
      console.log(파일[0]);
      let url = URL.createObjectURL(파일[0]);
      console.log(url);
      this.이미지 = url;
      this.step++;
    },
    publish(){
      var 내게시물 = {
      name: "Kim JinHyeok",
      userImage: "https://placeimg.com/100/100/arch",
      postImage: this.이미지,
      likes: 36,
      date: "May 15",
      liked: false,
      content: this.작성한글,
      filter: this.누른필터
    };
      this.게시물.unshift(내게시물);
      this.step = 0;
    }
  }
}
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
  cursor:pointer;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.moreBtnBox {
  width:100%;
  text-align:center;
}
.moreBtnBox .moreBtn {
  background:green;
  color:#fff;
  border:0;
  font-weight:bold;
  padding:10px 20px;
  border-radius:5px;
  cursor:pointer;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
