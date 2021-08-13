<template>
  <div>
    <div v-if="step == 0">
        <Post :게시물="게시물[i]" v-for="(a,i) in 게시물" :key="i" :i="i" />
    </div>
      
    <div v-if="step == 1">
        <div class="upload-image" :class="누른필터" :style="`background-image: url(${이미지})`"></div>
        <div class="filters">
            <FilterBox v-for="i in 필터들" :key="i" :이미지="이미지" :필터이름="i" >
                <span class="filter-name" @click="fire">{{ i }}</span>
            </FilterBox>
        </div>
    </div>

    <div v-if="step == 2">
        <div class="upload-image" :class="누른필터" :style="`background-image: url(${이미지})`"></div>
        <div class="write">
            <textarea @input="$emit('write', $event.target.value)" class="write-box">글을 남겨보세요!</textarea>
        </div>
    </div>

    <div v-if="step ==3">
        <MyPage :one="1" />
    </div>

  </div>
</template>

<script>
import Post from './Post';
import FilterBox from './FilterBox';
import filterName from '../assets/filterName.js';
import MyPage from './MyPage';

export default {
    name: 'Container',
    data(){
        return {
            필터들 : filterName,
        }
    },
    components: {
        Post,
        FilterBox,
        MyPage,
    },
    props: {
        게시물 : Array,
        step : Number,
        이미지 : String,
        누른필터 : String,
    }
}
</script>

<style>
.upload-image{
width: 100%;
height: 450px;
background: cornflowerblue;
background-size : cover;
}
.filters{
overflow-x:scroll;
white-space: nowrap;
}
.filter-1 {
width: 100px;
height: 100px;
background-color: cornflowerblue;
margin: 10px 10px 10px auto;
padding: 8px;
display: inline-block;
color : white;
background-size: cover;
}
.filters::-webkit-scrollbar {
height: 5px;
}
.filters::-webkit-scrollbar-track {
background: #f1f1f1; 
}
.filters::-webkit-scrollbar-thumb {
background: #888; 
border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
background: #555; 
}
.write-box {
border: none;
width: 90%;
height: 100px;
padding: 15px;
margin: auto;
display: block;
outline: none;
}
</style>