setTimeout(() => {
    console.log('set1')
    new Promise((resolve,reject)=>{
        console.log('pro1');
        resolve()
    }).then(()=>{
        console.log('then1')
    })
});


new Promise((resolve,reject)=>{
    console.log('pro2');
    resolve()
}).then(()=>{
    console.log('then2')
    setTimeout(() => {
        console.log('set2')   
    });
})

setTimeout(() => {
    console.log('set3')   
});

console.log(4)

//pro2 
//4
//then2
//set1
//pro1
//then1
//set3
//set2


async function async1() {        
    console.log('async1 start');
    await async2();
    console.log('async1 end');
  }
  async function async2() {
    console.log('async2'); 
  }
  
  console.log('script start'); 
  setTimeout(function() {
      console.log('setTimeout');
  }, 0);  
  async1();
  new Promise(function(resolve) {
      console.log('promise1');
      resolve();
    }).then(function() {
      console.log('promise2');
  });
console.log('script end');
  
// script start
// async1 start
// async2
// promise1
// script end
// async1 end
// promise2
// undefined
// setTimeout

