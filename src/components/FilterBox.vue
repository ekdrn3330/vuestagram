<template>
  <div @click="fire" :class="필터이름 + ' filter-item'" :style="`background-image:url(${이미지})`">
    <slot></slot>
  </div> 
</template>

<script>
export default {
    name: 'FilterBox',
    props: {
        이미지: String,
        필터이름: String,
    },
    methods: {
      fire() {
        this.emitter.emit('필터버튼', this.필터이름);
      }
    }
}
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : white;
  background-size: cover;
  background-position : center;
  cursor: pointer;
}
.filter-name {
  font-weight:bold;
  color:#000;
  text-align:center;
  width:100%;
  display:inline-block;
  background:rgba(255,255,255,.5);
  border-radius:5px;
  padding:5px 0;
}
</style>