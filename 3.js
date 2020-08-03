var A = {
    a:1,
    b:{
        a:1
    }
}
var B = A.b;
B.a = 2;
// console.log(A);  //{ a: 1, b: { a: 2 } }
// console.log(B)   //{ a: 2 }

var user ='张三'
var F = function () {
    this.user = '李四';
    this.show = function () {
        console.log('hello world')
    }
}
// console.log('1'+user) //张三
// F()
// console.log('2'+user) //张三

var f = new F();
F.prototype.user = '123'
F.prototype.b = '222'
// console.log(f) //F { user: '李四', show: [Function] }
// console.log(f.prototype)  //undefined 实例是没有prototype的所以为空
console.log(F.prototype)  //F { a: '123' }  类是有prototype的所以可以输出所有的rototype
// console.log(f._proto_)  //undefined  
console.log(f.user.toString)  //李四  先查找this在查找 prototype 在查找Object.prototype =>null



function f1() {
    var n = 999;
    nAdd = function(){n+=1}
    function f2() {
        console.log(n)
    }
    return f2
    
}
var result = f1()
// 闭包函数
// 内部函数可以访问外部函数的参数和变量
// result() //999
// nAdd()  
// result() //1000
var a = 0;
b = 0;
function c() {
    console.log(a) //undefined  方法里面有找到a a未复制所以输出undefined
    var a = 1;
    console.log(a) //1 方法里找到a 并且赋值所以输出1
    return a
}
// console.log(a)  //0 全局变量找到a=0 输出0
// c()