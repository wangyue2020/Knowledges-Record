// new关键字做了三件事:
// 1.创建一个空对象，并将该对象的__proto__指向构造函数的prototype
// 2.执行构造函数，并将this指向刚刚创建的新对象
// 3.返回对象

function _new() {
    let Func = [].shift.call(arguments);
    let obj = Object.create(Func.prototype);
    Func.apply(this, arguments);
    return obj;
}
