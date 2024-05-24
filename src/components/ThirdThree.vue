<template>
    <div class="one">
        {{ name }}----{{ age }}---{{ myage }}
        <button @click="addAge">点我加年龄</button>
        <button @click="changeName">点我变梁朝伟</button>
    </div>
</template>
<!-- 导入插件 vite-plugin-vue-setup-extend 进行name命名 -->
<script setup lang="ts" name="pluginThree">
// 使用ref设置基本类型数据的响应式
import {ref} from 'vue'
let name = ref('椋ohh')
let age:number = 20
let myage =ref()
function addAge() {
    age++
    console.log(age)
    console.log(myage)
    // ref修饰的值需要.value
    myage.value=age
}
function changeName(){
    console.log(name)
    name.value='梁朝伟'
}
</script>

<style scoped>.one {
    margin-top: 10px;
    background-color: #dddddd;
    box-shadow: 0 0 10px;
    border-radius: 20px;
    padding: 20px;
  }</style>