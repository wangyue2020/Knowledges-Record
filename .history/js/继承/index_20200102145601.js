// 继承，先放一个父类
function Father(name) {
    this.name = name || 'father';
    this.sleep = function() {
        console.log(`${this.name}正在睡觉`);
    };
}
Father.prototype.look = function(book) {
    console.log(`${this.name}正在看${book}`);
};

// 原型继承
// 核心: 将父类的实例作为子类的原型
// 特点: 父类中私有的和公有的都继承到了子类原型上(公有的)
function Son() {}
Son.prototype = new Father(); // 相当于重写了Son的原型
Son.prototype.constructor = Son; // 一定要把Son原型上的contructor重新指向Son

const son = new Son();
console.log(son.sleep()); // father正在睡觉
console.log(son.look('TV')); // father正在看TV

// call继承(构造继承)
// 核心: 使用父类的构造函数来增强子类实例
// 特点: 把父类私有的属性和方法(和Father.prototype上的属性无关)，克隆一份一样的給子类私有属性
function Son(name) {
    Father.call(this);
    this.name = name;
}

const son = new Son('son');
console.log(son.sleep()); // son正在睡觉
console.log(son.look('TV')); // son.look is not a function

// 冒充对象继承
// 核心: 使用父类的构造函数来增强子类实例
// 特点: 把父类私有的和公有的克隆一份一样的給子类
function Son() {
    var temp = new Father();
    for (let k in temp) {
        this[k] = temp[k];
    }
    temp = null;
}

const son = new Son();
console.log(son.sleep()); // father正在睡觉
console.log(son.look('TV')); // father正在看TV

// 混合模式继承: 原型继承+call继承
// 核心: 通过调用父类构造，继承父类的属性并保留传参的优点，然后通过将父类实例作为子类原型，实现函数复用
// 特点: 把父类私有的和公有的都变成了子类共有的
function Son() {
    Father.call(this);
}
Son.prototype = new Fahter();
Son.prototype.constructor = Son;

var son = new Son();
console.log(son.sleep()); // father正在睡觉
console.log(son.look('TV')); // father正在看TV

//
