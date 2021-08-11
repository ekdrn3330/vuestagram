<template>
  <div>
      <Post :인스타데이터="인스타데이터" />
      <Post :인스타데이터="인스타데이터" />
      <Post :인스타데이터="인스타데이터" />
  </div>
</template>

<script>
import Post from './Post';

export default {
    name: 'Container',
    components: {
        Post,
    },
    props: {
        인스타데이터 : Array,
    }
}
</script>

<style>

</style>