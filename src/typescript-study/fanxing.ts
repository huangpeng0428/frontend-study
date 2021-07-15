//函数中的范型

//可以传递2个范型到方法中
function join<T, P>(one: T, two: P): T {
  return one
}
const a = join<number, string>(1, '2')
console.log(a)

//范型在数组中的应用
function myFun<T>(params: Array<T>) {
  console.log(params)
}

myFun<string>(['123','456'])


//范型在类中的使用

interface baseData {
  name: string
}

class selectData <T extends baseData> {
  girl: Array<T>
  constructor(private x: Array<T>) {
    this.girl = x
  }
  getData(index: number) {
    return this.girl[index].name
  }
}

const select = new selectData([{name: 'xiaohong'}])
console.log(select.getData(0))

