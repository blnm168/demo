function test (){
    return Promise.reject('error')
}

test()
.then(()=>{
    console.log('ok')
})
.catch((error)=>{
    console.log(error)
    return 'okk'
    //  return Promise.reject('error2')
})
.then((result)=>{
    console.log(result)
})
.catch((error)=>{
    console.log(error)
})