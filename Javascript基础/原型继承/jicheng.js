// 原型链继承
// 优点：能通过instanceOf和isPrototypeOf的检测
// 缺点：1.父类中的属性变成了子类原型上的公用属性，子类实例多方修改，造成混乱
// 2.创建子类时，无法向父类的构造函数传递参数
function Parent(){
    this.colors = ['red','blue']
}
Parent.prototype.sayColors = function(){
    console.log(this.colors)
}
function Child(){}

Child.prototype = new Parent()
Child.prototype.constructor = Child

let child1 = new Child()
child1.colors.push('green')
let child2 = new Child()
console.log(child2.colors) //['red','blue','green']

// 类式继承（借用构造函数）
// 优点：解决了父类中私有属性变公有属性的问题，并且可以传递参数
// 缺点：没有原型，每创建一个实例就需要重新执行一遍父类函数，无法复用公有函数
function Parent(name){
    this.name = name
}
function Child(){
    Parent.call(this,'wangyue')
    this.age = 22
}
let child1 = new Child()
console.log(child1.name)
console.log(child1.age)

// 组合式继承（前两种方式的结合）
// 原理：使用原型链实现对原型属性和方法的继承，再通过构造函数实现对实例属性的继承
// 优点：既通过在原型上定义方法实现了复用，又保证了每个实例都有自己的属性
// 缺点：两次调用父构造器函数，浪费内存
function Parent(name){
    this.name = name
    this.colors = ['red','blue']
}
Parent.prototype.sayName = function(){
    console.log(this.name)
}

function Child(name,age){
    Parent.call(this,name)
    this.age = age
}
Child.prototype = new Parent()
Child.prototype.constructor = Child
Child.prototype.sayAge = function(){
    console.log(this.age)
}

let child1 = new Child('child1',18)
child1.colors.push('green')
console.log(child1.colors) //['red','blue','green']
let child2 = new Child('child2',22)
console.log(child2.colors) //['red','blue']
child2.sayName() //child2

// 寄生组合式继承（最理想）
// 优点：避免两次调用父构造器函数
function Parent(name){
    this.name = name
    this.colors = ['red','blue']
}
Parent.prototype.sayName = function(){
    console.log(this.name)
}
function Child(name,age){
    Parent.call(this,name)
    this.age = age
}

function inheritPrototype(Child,Parent){
    let prototype = new Object(Parent.prototype)
    prototype.constructor = Child
    Child.prototype = prototype
}
inheritPrototype(Child,Parent)

let child1 = new Child('child1',18)
child1.colors.push('green')
console.log(child1.colors) //['red','blue','green']
let child2 = new Child('child2',22)
console.log(child2.colors) //['red','blue']
child2.sayName() //child2

// ES6 extends
class Parent{
    constructor(name){
        this.name = name
        this.colors = ['red','blue']
    }
    sayName(){
        console.log(this.name)
    }
}
class Child extends Parent{
    constructor(name,age){
        super(name)
        this.age = age
    }
}






