<template>
    <div class="one">
        {{ person.id }}--{{ person.name }}--{{ person.age }}
        <hr>

        <div v-for="person in personList" :key="person.id">
            {{ person.id }}--{{ person.name }}--{{ person.age }}
        </div>
        <hr>
        <div v-for="person in persons" :key="person.id">
            {{ person.id }}--{{ person.name }}--{{ person.age }}
        </div>
        <br>
        <hr>
        <br>
        <div>
            <li v-for="item in firstPerson.firstPerson" :key="item.id">
                {{ item.id }}--{{ item.name }}--{{ item.age }}
            </li>
        </div>
    </div>
</template>

<script setup lang="ts">
// @符回到目录最顶层
import { type PersonInter, type Persons } from '@/types'
import { onMounted, withDefaults } from 'vue';

let person: PersonInter = {
    name: '椋',
    id: '666',
    age: 18
}

let personList: Array<PersonInter> = [
    {
        name: '歆',
        id: '676',
        age: 18
    }, {
        name: '弘',
        id: '999',
        age: 80
    }
]

let persons: Persons = [
    {
        name: '歆',
        id: '676',
        age: 18
    }, {
        name: '弘',
        id: '999',
        age: 80
    }
]

// let props_person = defineProps(['person'])

let firstPerson = withDefaults(defineProps < { firstPerson?: Persons } > (), {
    firstPerson: () => [
        {
            name: 'admin',
            id: 'admin',
            age: 1
        }
    ]

}
)
onMounted(() => {
    console.log(firstPerson.firstPerson[0])
})

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