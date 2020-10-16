// var obj={
//     a:1,
//     fn:function (){
//     var fnn = ()=>{
//      console.log(this)
//     }
// fnn()
// },
// fn1:function(){
//     console.log(this)
// }

// }
// obj.fn();
// obj.fn1();

// 两个都输出 {a: 1, fn: ƒ, fn1: ƒ}  

// var objjj={
//     a:1,
//     fn:()=>{
//     console.log(this)
// },
// fn1:function(){
//     console.log(this)
// }

// }
// objjj.fn();
// this === Window
// objjj.fn1();
// this === {a: 1, fn: ƒ, fn1: ƒ}  
//箭头函数不会创建自己的this,它只会从自己的作用域链的上一层继承this 所以第一个输出window;正因为这种特性,Vue的生命周期和methods不能使用箭头函数
// var f = () => { 'use strict'; return this; };
// f() === window;
// true
// var f = function() { 'use strict'; return this; };
// f() === window;
// false
// 箭头函数this 不受严格模式影响
// 箭头函数没有自己的this 所以不能使用call apply bind 绑定this,这三个方法第一个参数会被忽略