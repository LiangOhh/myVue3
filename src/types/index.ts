// 设置人类接口定义标准
export interface PersonInter {
    id: string,
    name: string,
    age: number
}

export type Persons = Array<PersonInter>