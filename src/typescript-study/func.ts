interface funcLady {
  name: string
  age: number
}
//接口定义范型时需要使用extends关键字
function testFunc1<T extends funcLady>(data: T[]): T[] {
  console.log(data[0].name)
  return data
}
testFunc1<funcLady>([{name: 'poloo', age: 19}])


//也可以直接使用接口
function testFunc(two: funcLady[]): funcLady[] {
  console.log(two[0].age)
  return two
}
// testFunc([{name: 'poloo', age: 19}])


//基本类型可直接传递
function testFunc2<T>(arg: T) {
  console.log(arg)
}
// testFunc2<string>('3')


// 使用范型的接口来定义函数的形状
interface CreateArrayFunc<T> {
  (length: number, value: T): T[]
}
let createArr: CreateArrayFunc<any>
createArr = function<T> (length: number, value: T): T[] {
  let result: T[] = []
  for (let i = 0; i< length; i++) {
    result[i] = value
  }
  return result
}
createArr(3,'x')