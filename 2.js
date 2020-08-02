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
