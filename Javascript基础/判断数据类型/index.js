// typeof:一般返回number,string,boolean,undefined,function,object等数据类型。
// 一般用于较简单的场景，对于Array，null等特殊对象使用typeof也一律返回object，这也是它的局限性。
// 在判断除Object类型的对象时比较方便：
let fn = function(){
    console.log('__________________')
}
typeof fn // function

// instanceof适用于检测对象，它是基于原型链运作的。
// instanceof运算符：如果左侧的对象是右侧的实例，则表达式返回true，否则为false。
// 它对于基本数据类型检测不起作用，因为基本数据类型没有原型链。
[1,2,3] instanceof Array // true
(/abc/) instanceof RegExp // true
({}) instanceof Object // true
(function(){}) instanceof Function // true

// Object.prototype.toString.call()可以检测各种数据类型。
let isType = function(obj){
    return Object.prototype.toString.call(obj)
}
isType([]) // [object Array]
isType({}) // [object Object]
isType(new Date()) // [object Date]
isType(null) // [object Null]
isType() // [object Undefined]