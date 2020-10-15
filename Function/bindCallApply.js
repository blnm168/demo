// var D = function () {
//     console.log(...arguments)
// }

// function test(a, b, c) {
//     const args = arguments;
//     var t = function () {
//         return D.call(this,...args)
//     }
//    return t()
// }
// test(1, 2, 3);
// call方法接收多少个参数

// var D = function () {
//     console.log(...arguments)
// }

// function test(a, b, c) {
//     const args = arguments;
//     var t = function () {
//         return D.apply(this,args)
//     }
//    return t()
// }
// test(1, 2, 3);
// apply方法接收数组

// var D = function () {
//     console.log(...arguments)
// }

// function test(a, b, c) {
//     const args = arguments;
//     var t = function () {
//         return D.bind(this,...args)
//     }
//    return t()
// }
// var a = test(1, 2, 3);
// a()
// bind方法接收单个参数并重新绑定this的返回方法 不会立即执行

//上面三个方法都打印 1 2 3  并且都会重新绑定this