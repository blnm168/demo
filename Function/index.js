//闭包函数
// 内部函数可以访问外部函数的参数和变量
var myObject = function () {
    var value = '1';
    return {
        getValue: function () {
            return value
        }
    }
}();
console.log(myObject.getValue())