//闭包函数
// 内部函数可以访问外部函数的参数和变量
var myObject = function (v) {
    var value = v;
    return {
        getValue: function () {
            return value
        }
    }
}
var a = myObject('ssssssssss')
console.log(a.getValue())