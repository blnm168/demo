### 参数传递传入引用类型 两种情况
```js 
function setName(obj) {
    obj.name = "Nicholas";
}
let person = new Object();
setName(person);
console.log(person.name); // "Nicholas"
function setName(obj) {
    obj.name = "Nicholas";
    obj = new Object();
    obj.name = "Greg";
}
let person = new Object();
setName(person);
console.log(person.name); // "Nicholas"
```
### 传入到function里面参数为局部变量，更改引用地址不会影响到外部变量。但是修改引用对象的属性会影响到外部变量
### var 是函数作用域 let是块级{}作用域
```js
if (true) {
    let a;
}
console.log(a); // ReferenceError: a没有定义
if (true) {
    var a;
}
console.log(a); // undefinde
```
### 内存泄漏 闭包，定时器，意外的声明全局变量都会倒是内存泄漏，
### 闭包 只要外部函数一直存在，内部函数一直引用外部变量，导致引用变量无法清除，定时器同理
```js
let outer = function() {
    let name = 'Jake';
    return function() {
        return name;
    };
};
```
### Nubmer Boolen String 三种类型的原始值和对象之前不是 全等=== 判断类型方式也有所不一样
```js
let numberObject = new Number(10);
let numberValue = 10;
console.log(typeof numberObject); //"object"
console.log(typeof numberValue); //"number"
console.log(numberObject instanceof Number); // true
console.log(numberValue instanceof Number); // false
```