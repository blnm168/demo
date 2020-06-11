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