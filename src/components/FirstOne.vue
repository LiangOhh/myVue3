<template>
    <div class="one">
      {{ name }}----{{ age }}
      <button @click="btn">点我加一岁</button>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    name: 'FirstOne',
    data() {
        return{
            name:'椋',
            age:18
        }
    },
    methods:{
        btn(){
            this.age++
        }
    }
  }
  
  </script>
  
  <style scoped>
  .one {
    margin-top: 10px;
    background-color: #dddddd;
    box-shadow: 0 0 10px;
    border-radius: 20px;
    padding: 20px;
  }
  </style>
  