
//观察者 Dep
class Dep {
    constructor(){
        this.subs = []
    }
    addSub(sub){
        this.subs.push(sub)
    }
    notify(){
        this.subs.forEach((sub)=>{
            sub.update()
        })
    }
}

//观察者   Watcher
class Watcher{
    constructor(){
        Dep.target = this;
    }
    update(){
        console.log('视图更新')
    }
}
Dep.target = null;

function cb(val) {
    console.log('视图更新了'+val)
}
function definReactive(obj,key,val) {
    const dep = new Dep();
    Object.defineProperty(obj,key,{
        enumerable:true,   //属性可枚举
        configurable:true, //属性可被修改删除
        get:function reactiveGeetr() {
            dep.addSub(Dep.target)
            //将Dep.target 即当前watcher对象添加到依赖中
            return val; //收集依赖
        },
        set:function reactiveSeetr(newVal){
            if(newVal === val) return;
            // cb(newVal) //更新视图
            // 触发set的时候通知所有订阅者更新视图
            dep.notify()
        }
    })
}

function obServer(value) {
    if(!value || (typeof value !== "object")) return;
    //遍历
    Object.keys(value).forEach((key)=>{
        definReactive(value,key,value[key])
    })
}

class Vue {
    constructor(options){
        this._data = options.data;
        obServer(this._data);
        new Watcher()
        console.log('render~'+this._data.test)

    }
}
let o = new Vue({
    data:{
        test:'1'
    }
})
o._data.test = '12';


