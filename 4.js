// bind
//bind() 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用
const md = {
  x: 42,
  getX: function(s) {
    return this.x+s;
  }
};

const unboundGetX = md.getX;
console.log(unboundGetX('s')); // 方法获取不到this.x 输出undefined
// expected output: undefineds

const boundGetX = unboundGetX.bind(md,'s');  //目标函数被调用时，被预置入绑定函数的参数列表中的参数 s就是预置的参数
console.log(boundGetX('5'));  //优先使用被预置的参数
// expected output: 42s


//bind使用场景
function LateBloomer() {
    this.petalCount = Math.ceil(Math.random() * 12) + 1;
  }
  
  // 在 1 秒钟后声明 bloom
  LateBloomer.prototype.bloom = function() {
    setTimeout(this.declare.bind(this), 1000);
  };
  
  LateBloomer.prototype.declare = function() {
    console.log('I am a beautiful flower with ' +
      this.petalCount + ' petals!');
  };
  
  var flower = new LateBloomer();
  flower.bloom();  // 一秒钟后, 调用 'declare' 方法
  
  //call