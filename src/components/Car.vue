<template>
    <div class="one">
        这是汽车组件
        {{ car.brand }}---{{ car.price }}
        <button @click="btn">点我加钱</button>
        <button @click="btn2">点我换车</button>
        <div>
            {{ room.floor }}---{{ room.color }}---{{ room.price }}
            <button @click="btn1">点我加钱</button>
            <button @click="btn3">点我换房间颜色</button>
        </div>
        <div>
            <!-- <button>点我进行toRefs</button> -->
            {{ brand }}---{{ price }}
        </div>
    </div>
</template>

<script setup name="Car" lang="ts">
// reactive 只能设置对象类型的响应式
import { reactive, ref, toRefs } from 'vue';
let car = reactive({
    brand: 'bmw',
    price: 1299
})

let room = ref({
    floor: '2f',
    color: 'blue',
    price: 100
})

let { brand, price } = toRefs(car)
function btn() {
    car.price += 100
    console.log(car.price)
    console.log(car)
}
function btn1() {
    // console.log(room.value.price)
    // 使用ref记得.value来获取数据
    room.value.price += 10
}
function btn2() {
    console.log('换车成功!')
    // 浅拷贝,没有的属性加上.同名属性替换
    Object.assign(car, {
        brand: 'tsla',
        price: 2999
    })
}
function btn3() {
    room.value.color = 'yellow'
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