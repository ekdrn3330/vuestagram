<template>
    <div style="padding : 10px">
        <h4>팔로워</h4>
        <input placeholder="🔍" @input="search($event.target.value)" />
        <div class="post-header" v-for="i in follower" :key="i">
            <div class="profile" :style="`background-image:url(${ i.image })`"></div>
            <span class="profile-name">{{ i.name }}</span>
        </div>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import axios from 'axios';

export default {
    name : 'MyPage',
    props: {
        one : Number,
    },
    setup(){
        let follower = ref([]);
        let followerOriginal = ref([]);

        onMounted(()=>{
            axios.get('/follower.json').then((a)=>{
                follower.value = a.data;
                followerOriginal.value = [...a.data];
            });
        });

        function search(검색어) {
            let newFollower = followerOriginal.value.filter((a)=>{
                return a.name.indexOf(검색어) != -1;
            });
            follower.value = [...newFollower];
        }

        return { follower, search }
    },
    data(){
        return {

        }
    },
}
</script>

<style>

</style>