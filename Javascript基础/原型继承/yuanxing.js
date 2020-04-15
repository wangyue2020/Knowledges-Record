// 构造函数：讲原型离不开构造函数，构造函数分为实例成员和静态成员。
// 实例成员：在构造函数内部，通过this添加的成员，可以通过实例化的对象访问。
// 静态成员：在构造函数本身上添加的成员，只能通过构造函数本身访问。
function Star(name){
    this.name = name // 实例成员
}
Star.sex = '女' // 静态成员
let stars = new Star('小红')
console.log(stars.sex) // undefined 实例无法访问sex属性

// 构造函数上通过this来添加的方法在生成实例后，都会开辟新的内存空间存储方法，这样就造成了极大的
// 内存浪费，从而影响性能，所以需要让实例共享一个方法，也就是原型对象的存在。
function Star(){
    this.sing = function(){
        console.log('我爱唱歌')
    }
}
let star1 = new Star()
let star2 = new Star()
console.log(star1.sing === star2.sing) // false

Star.prototype.song = function(){
    console.log('我喜欢唱歌')
}
let star3 = new Star()
let star4 = new Star()
console.log(star3.song === star4.song) // true

// 原型就是Star.prototype指向的对象，也是实例__proto__指向的对象。原型的作用是共享方法。
// 原型链就是原型与原型层层相链接的过程。
// 原型查找方式：1.在实例对象上找 2.构造函数原型上找 3.Object原型上找 4.报错

// 原型的构造器指向构造函数：
function Star(name){
    this.name = name
}
let obj = new Star('小红')
console.log(Star.prototype.constructor === Star) // true
console.log(obj.__proto__.constructor === Star) // true

// 在原型上添加方法有两种方式：1.在原型上直接添加 2.给原型重新赋值
// 第二种直接改变原型指向的，一般不可用，它会使原生方法都没了。
// 所以Array、String这些内置方法是不允许改变原型指向的，如果改变，就会报错。

