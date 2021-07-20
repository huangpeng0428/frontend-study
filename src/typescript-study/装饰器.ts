// function f() {
//   console.log("f(): evaluated");
//   return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//       console.log("f(): called");
//   }
// }

// function g() {
//   console.log("g(): evaluated");
//   return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//       console.log("g(): called");
//   }
// }

// class C {
//   @f()
//   @g()
//   method() {}
// }

// @sealed
// class Greeter {
//   greeting: string

//   constructor(message: string) {
//     this.greeting = message
//   }

//   greet() {
//     return 'Hello，' + this. greeting
//   }
// }

// function sealed(constructor: Function) {
//   Object.seal(constructor);
//   Object.seal(constructor.prototype);
// }

class Greeter {
  greeting: string;
  constructor(message: string) {
      this.greeting = message;
  }

  @enumerable(false)
  greet() {
      return "Hello, " + this.greeting;
  }
}

function enumerable(value: boolean) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log(value)
      descriptor.enumerable = value;
  };
}

const aaa = new Greeter('test')
console.log(aaa.greet())