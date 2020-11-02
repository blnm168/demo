```js
Object.prototype.toString.call(value)
```
### 可以检测任意对象的类型
```js
isFinite(Infinity);  // false
isFinite(NaN);       // false
isFinite(-Infinity); // false
isFinite(0);         // true
isFinite(2e64);      // true, 在更强壮的Number.isFinite(null)中将会得到false
isFinite("0");       // true, 在更强壮的Number.isFinite('0')中将会得到false
```
### 可以完美检测出一个变量是否为数字
```js
let s = "Nicholas";
let b = true;
let i = 22;
let u;
let n = null;
let o = new Object();
console.log(typeof s); // string
console.log(typeof i); // number
console.log(typeof b); // boolean
console.log(typeof u); // undefined
console.log(typeof n); // object
console.log(typeof o); // object
```
### typeof 检测对象是否为一个原始类型
