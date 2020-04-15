// 类其实就是语法糖，一种更像面向对象编程的语法。class本质还是function。
function Star(){}
console.log(typeof Star) // function
class Star {}
console.log(typeof Star) // function

// 类与构造函数的区别：
// 1.ES6中类没有变量提升，必须先有类，才可以实例化。
// 2.类的内部，默认就是严格模式，所以不需要使用use strict指定运行模式。
// 3.类必须使用new调用，否则会报错。这是它和普通构造函数的一个主要区别，后者不用new也可以执行。  
// 4.类所有的方法都定义在原型上。
class Star{
    constructor(name){
        this.name = name
    }
    sing(){
        return this.name
    }
}
let red = new Star('red')
let green = new Star('green')
console.log(red.sing === green.sing) //true

// 通过Object.assign，在原型上追加方法。
Object.assign(Star.prototype,{
    dance(){
        return '我爱跳舞'
    }
})

// constructor方法是类的默认方法，通过new命令生成实例时，自动调用。
// 一个类必须有constructor，若没有显示定义，该方法会被默认添加。

// 静态方法：如果在一个方法前，加static关键字，就表示不会被实例继承，而是直接通过类调用。
// 注意：如果静态方法包含this关键字，this指向类，而非实例。
class Foo{
    static classMethod(){
        return 'hello'
    }
}
Foo.classMethod() // 'hello'
let foo = new Foo()
foo.classMethod() // TypeError:foo.classMethod is not a function

// super这个关键字，既可以当做函数使用，也可以当做对象使用
// 1.当做为函数调用时，代表父类的构造函数。但是返回的是子类B的实例，即super内部的this指的是B。
class A{}
class B extends A{
    constructor(){
        super()
    }
}
// 2.当作为对象时，在普通方法中，指向父类的原型对象；在静态方法中，指向父类
// 普通方法：
class A{
    fn(){
        return 2
    }
}
class B extends A{
    constructor(){
        super()
        console.log(super.p())
    }
}
// 静态方法
class A{
    static fn(){
        console.log('___________')
    }
}
class B extends A{
    static myFn(){
        super.fn()
    }
}
