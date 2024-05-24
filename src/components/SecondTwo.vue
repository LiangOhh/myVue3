<template>
    <div class="one">
        {{ name }}---{{ age }}
        <button @click="addAge">点我加年龄</button>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue';
export default {
    name: 'SecondTwo',
    setup() {
        let name: string = 'a'
        let age = ref(18)


        function addAge() {
            age.value++;
            console.log(age)
        }
        return { name, age, addAge }
    }
}
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