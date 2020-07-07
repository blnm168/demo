### object && 取值 解决 throw typeError 报错
```js
let obj = {
    name:'cccc',
    age:'19'
}
console.log(obj.age.s)  //undefined
console.log(obj.age.s.w)  //throw TypeError
console.log(obj.age.s && obj.age.s.w)  //undefind
```
### object || 取值 填充默认值
```js
let obj = {
    name:'cccc',
    age:'19'
}
console.log(obj.name || 'aaa')  //cccc
console.log(obj.age.s || 'aaa')  //aaa
```
### object 取名为非法字符串 必须用引号
```js
let obj = {
    's.s':'cccc',
    s:'19'
}
console.log(obj['s.s'])  //cccc
console.log(obj.s) //19
```
### object 引用
```js
var a ={},b={},c={}  //a b c 每个都引用一个不同的空对象
var a =b=c={}  //a b c 每个都引用同一个空对象
```
### object 更新 对象中使用赋值语句来替换可以更新里面的值 如果没有该属性 就会扩展到该对象中
```js
let obj = {
    name:'cccc',
    age:'19'
}
obj['name'] = 'aaa'
obj['sex'] = 'man'
console.log(obj.sex)  //aaa
console.log(obj.sex)  //man  如果obj
```
### object 检索 如果尝试检索一个不存在的元素值 就会返回一个undefined
```js
console.log(obj.g) //  undefined
```
### hasOwnProperty 这个方法检查对象是否拥有的该属性 返回 true false 该方法不会检查原型链
### delete 可以删除对象中的属性 该方法不会触及原型链 删除对象中的属性可以使原项链中的属性浮现出来