import { ref, reactive } from "vue"

let num = ref(1)
let num2 = reactive({
    a: 1, b: 2
})
let num3 = ref({
    a: 1, b: 2
})
let num4 = ref([
    { a: 1, n: 2 },
    { a: 3, b: 4 }]
)
let num5 = reactive([
    { a: 1, n: 2 },
    { a: 3, b: 4 }]
)
export default function () {

    function addNumber() {
        setTimeout(() => {
            num.value++
        }, 1000);
        // num.value++
        console.log(num)
    }

    function addNumber2() {
        /* 
        错误示例
        直接赋值等价于重新设置了一个地址 
        num2 = { a: 3, b: 4 }
        */

        //  修改属性方式
        num2.a++
        num2.b += 2
        console.log(num2)
    }
    function showDiv() {
        console.log('这是num3', num3)
        console.log('这是num4', num4)
        console.log('这是num5', num5)
    }
    return { num, num2, num3, num4, num5, addNumber, addNumber2, showDiv }
}