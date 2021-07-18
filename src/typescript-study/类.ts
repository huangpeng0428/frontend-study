// es6的class

class Animal {
    public name: any
    constructor(name: string) {
        this.name = name
    }

    sayHi() {
        return `my name is ${this.name}`
    }
}

let an = new Animal('jam')
console.log(an.sayHi())


// 存取器
class Animal1 {
    constructor(name: string) {
      this.name = name;
    }
    get name() {
      return 'Jack';
    }
    set name(value) {
      console.log('setter: ' + value);
    }
  }
  
  let an1 = new Animal1('Kitty'); // setter: Kitty
  an1.name = 'Tom'; // setter: Tom


  //静态方法
  class Animal2 {
      static isAnimal(an2: any) {
        return an2 instanceof Animal2
      }
  }

  let an2 = new Animal2()

  Animal2.isAnimal(an2)


  //typescript 中的类  (public private protected)

  class AnimalTs {
      public name: string
      public constructor(nameargs: string) {
          this.name = nameargs
      }
  }

  let anTs = new AnimalTs('jackTs')
  console.log(anTs.name)


  abstract class AnimalTS1 {
    public name;
    public constructor(name: string) {
      this.name = name;
    }
    public abstract sayHi(): void;
  }
  
  //let anTs1 = new AnimalTS1('JackTs1');  //abstract 抽象类不允许实例化