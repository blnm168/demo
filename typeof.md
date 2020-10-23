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