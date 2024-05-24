<template>
    <div class="one">
        正在watch(sum) ref普通数据类型:
        <br>
        {{ sum }}
        <button @click="btn">点我加加</button>
        <hr>
        正在watch(sum) ref对象数据类型:
        <br>
        {{ person.name }}--{{ person.age }}
        <button @click="btn2">+</button>
        <button @click="btn3">改名字</button>
        <button @click="btn4">换一批</button>
        <hr>
        正在watch(sum) reactive对象数据类型:
        <br>
        {{ book.name }}--{{ book.price }}
        <button @click="btn5">+</button>
        <button @click="btn6">改书名</button>
        <button @click="btn7">换一本</button>

        <div class="two">
            当前水温:{{ watch_obj.temp }}
            <button @click="btn8">+</button>
            <br>
            当前水位:{{ watch_obj.heigh }}
            <button @click="btn9">+</button>
        </div>

    </div>
</template>

<script setup lang="ts">
import { ref, watch, reactive, watchEffect } from 'vue'

let sum = ref(0)
function btn() {
    sum.value += 1
}
// 进行监听ref普通数据类型
let stopWatch = watch(sum, (newVal, oldVal) => {
    console.log("发生变化了:", newVal, oldVal)
    // 利用stopWatch停止监视
    // console.log(stopWatch)
    if (newVal >= 10) {
        stopWatch()
    }
})
/* 
    ref对象数据类型,对 age 进行监视
    情况一:  默认watch对象名,只监视对象地址,不监视对象内容 
    情况二:  添加配置对象,开启deep深度监视
*/
let person = ref({
    name: '张三',
    age: 18
})

let book = reactive({
    name: 'moon and six',
    price: 6
})

// 情况一,监视的是对象的地址值,无法检测到内部属性改变
/* watch(person, (newVal, oldVal) => {
    console.log(`${newVal}变化了`)
    console.log(newVal, oldVal)
}) */
// 情况二,加入deep配置对象检测内部属性变化
watch(person, (newVal, oldVal) => {
    // console.log('变化了', newVal)

    console.log(`变化了,${JSON.stringify(newVal)}`)
}, { deep: true })


function btn2() {
    person.value.age++
}
function btn3() {
    person.value.name = "椋"
}
function btn4() {

    person.value = {
        name: '牛牛',
        age: 18
    }
}

function btn5() {
    book.price += 1
}
function btn6() {
    book.name = 'sadness'
}
function btn7() {
    Object.assign(book, {
        name: 'journey in west',
        price: 18
    })
}

// reactive  默认开启深度监视且无法关闭
/* watch(book, (newVal, oldVal) => {
    console.log(newVal, oldVal)
}) */
// 用函数式监视一个数据项  name
watch(() => { return book.name }, (newVal, oldVal) => {
    console.log(newVal, oldVal)
})

let watch_obj = reactive({
    temp: 0,
    heigh: 0
})
function btn8() {
    watch_obj.temp += 10
}
function btn9() {
    watch_obj.heigh += 10
}
watchEffect(() => {
    if (watch_obj.temp > 100 || watch_obj.heigh > 60) {
        console.log("发送网路请求")
    }
})

</script>

<style lang="scss" scoped>
.one {
    margin-top: 10px;
    background-color: #dddddd;
    box-shadow: 0 0 10px;
    border-radius: 20px;
    padding: 20px;

    .two {
        margin-top: 10px;
        background-color: #dddddd;
        box-shadow: 0 0 10px;
        border-radius: 20px;
        padding: 20px;
    }
}
</style>