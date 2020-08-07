// 原型链继承 子类的原型指向父类的实例
// 由于原型链继承共享属性实例属性的缺点，属于引用类型传值，引用副本实例属性的修改必然会引起其他副本实例属性的修改，所以不常使用；
// 另一个缺点在于不能向父类构造函数随时传递参数，很不灵活
function A() {
    this.color=['red','blue']
}
function B(){}
B.prototype = new A();
let b = new B()
b.color.push('green')
// console.log(b.color)

// 借用构造函数继承, 在执行C构造函数的时候，子类的实例各自得到一份构造函数的副本，属于值传递，所以子类之间的属性修改是互不相关的；
// 缺点：单独使用无法达到函数复用，因为每一个函数和属性都需要在构造函数中定义，没法复用，即没有父类prototype上的函数，只有不能共用的实例属性
// 而且instanceof操作无法确定子类实例和父类之间的关系，因为子类的prototype和父类无关

function C() {
    A.call(this)
}
let c = new C()
c.color.push('green')
// console.log(c.color)

let d = new C()
// c.color.push('green')
console.log(d.color)

// 组合继承模式 常用 原型链继承+构造函数继承
// 原型链继承共享属性(属性方法和属性)， 构造函数继承父类构造函数的实例属性
// 缺点: 调用了两次父类构造函数，生成了两份实例，一个子类实例，一个父类实例，父类实例作为prototype使用
function AA(name) {
    this.name = name;
    console.log('调用了')
}
AA.prototype.say = function () {
    console.log(this.name)
}
function BB(name,age) {
    AA.call(this,name)     // 借用构造函数, 第一次调用父类构造函数
    this.age = age;
}
BB.prototype = new AA();  // 原型链继承, 第二次调用父类构造函数
BB.prototype.constructor = BB;  // 将实例的原型上的构造函数指定为当前子类的构造函数

let x = new BB('a',1)
console.log(x)

let s = new AA('b',1)
console.log(s)