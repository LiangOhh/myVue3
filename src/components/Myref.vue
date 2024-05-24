<template>
    <div class="one">
        <h1 ref="first_ref">这是第一条标签</h1>
        <button @click="btn">点我输出h1标签</button>
    </div>
</template>

<script setup lang="ts">
import { ref, defineExpose } from 'vue'
let first_ref = ref()
function btn() {
    console.log(first_ref)
    console.log(first_ref.value);
}
// 暴露ref
defineExpose({ first_ref })
</script>

<style lang="scss" scoped>
.one {
    margin-top: 10px;
    background-color: #dddddd;
    box-shadow: 0 0 10px;
    border-radius: 20px;
    padding: 20px;
}
</style>