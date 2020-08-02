//事件委托 解决子节点无法点击
function delegate(element,eventType,selector,fn) {
    element.addEventListener(eventType,e=>{
        let el = e.target;

        while (!el.matches(selector)) {
            if(element == el){
                el = null;
                break
            }
            el = e.parentNode;
        }
        el && fn.call(el,e,el)
    },true)
    return element
}

//函数科里化
let currying = (fn, ...args) =>{
        console.log(...args)
         return fn.length > args.length ?
            (...s) => currying(fn, ...args, ...s) :
            fn(...args)
}

let addSum = (a, b, c) => a+b+c
let add = currying(addSum)
// console.log(add(1)(2,3))
// console.log(add(1, 2)(3))
// console.log(add(1,2,3))

//函数节流 注重开关 事件n秒内只能触发一次
let jl = function (fn,delay) {
    let off = true,
        timer = null;
    return function (...args) {
        let context = this;
        if(!off) return;
        off = false;
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(context,args)
            off = true;
        }, delay);
    }    

}

//函数防抖 注重定时器 事件触发n秒后执行 如果n秒内多次触发 重新计算定时器

let fd = function (fn,delay) {
    let timer = null;
    return function (...args) {
        let context = this;
        if(timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context,args)
        }, delay);
    }    

}

