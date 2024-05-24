<template>
    <div class="one">
        姓:<input type="text" v-model="firstname">
        名:<input type="text" v-model="lastname">
        全名:{{ fullName }}
        <button @click="changeName">点我改名</button>
    </div>
</template>

<script setup lang="ts" name="Mycomputed">
import { setTextRange } from 'typescript';
import { ref, computed } from 'vue';
let firstname = ref('张')
let lastname = ref("三")

/*
    计算属性引入,写成函数,必须要有返回值  
    函数没有缓存
    计算方法有缓存  
*/
// 箭头函数,如此设置为只读
/*
let fullName = computed(() => {
    return firstname.value.slice(0, 1).toUpperCase() + firstname.value.slice(1) + '-' + lastname.value
})
console.log(fullName)
console.log(fullName.value)
function changeName() {
    fullName.value = "wangwu"
}
*/
// 普通函数,可读可写,设置get和set
let fullName = computed({
    get() {
        return firstname.value.slice(0, 1).toUpperCase() + firstname.value.slice(1) + '-' + lastname.value
    },
    set(val) {
        // val为fullName最新的值
        console.log(val)
        const x = val.split('-')
        console.log(x)
        // 结构赋值
        const [str1, str2] = val.split('-')
        console.log(str1, str2)
        firstname.value = str1
        lastname.value = str2
    }

})
function changeName() {
    fullName.value = "wang-wu"
}

</script>

<style lang="scss" scoped>
.one {
    margin-top: 10px;
    background-color: #dddddd;
    box-shadow: 0 0 10px;
    border-radius: 20px;
    padding: 20px;

    input {
        display: block;
    }
}
</style>