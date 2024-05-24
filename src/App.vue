<template>
  <div class="my">
    <!-- <div>
      <h1 ref="myAppRef">hello world</h1>
      <button @click="btn">获取ref</button>
    </div>
    这是我的第一个vue3项目
    <FirstOne></FirstOne>
    第二个组件
    <SecondTwo></SecondTwo>
    第三个组件
    <ThirdThree></ThirdThree>
    汽车组件
    <Car></Car>
    计算属性
    <Mycomputed></Mycomputed>
    监视属性
    <Mywatch></Mywatch>
    标签属性
    <Myref ref="comRef"></Myref>
    <Person :firstPerson="myperson"></Person> -->

    <div>
      {{ num }}
      <button @click="addNumber">button</button>
      <br>
      <hr>
      {{ num2 }}
      <button @click="addNumber2">button</button>
      <br>
      <hr>
      <button @click="showDiv">button</button>

    </div>
  </div>
</template>


<script lang="ts" setup name="App">
import FirstOne from './components/FirstOne.vue'
import SecondTwo from './components/SecondTwo.vue'
import ThirdThree from './components/ThirdThree.vue'
import Car from './components/Car.vue'
import Mycomputed from './components/Mycomputed.vue'
import Mywatch from './components/Mywatch.vue'
import Myref from './components/Myref.vue'
import Person from './components/Person.vue'
import { ref, reactive, onMounted } from 'vue'
import { type PersonInter, type Persons } from '@/types'
import useBase from './hooks/useBase'
const { num, num2, num3, num4, addNumber, addNumber2, showDiv } = useBase()
let myAppRef = ref()
let comRef = ref()
async function btn() {
  //  let myAppRef = await ref()
  console.log(myAppRef.value)
  console.log(comRef)

}

let person: PersonInter = {
  name: 'ohh',
  id: '123',
  age: 18
}
let myperson = reactive<Persons>([{
  name: 'ohh',
  id: '123',
  age: 18
}])
onMounted(async () => {
  console.log('mounted')
  await console.log(num)
  // await addNumber()
})
</script>

<style scoped>
.my {
  margin-top: 10px;
  background-color: #ddd;
  box-shadow: 0 0 10px;
  border-radius: 20px;
  padding: 20px;
}
</style>
