let arr = [];
let num = 0;
for(var i =0;i<10000;i++){
    arr.push(Math.floor(Math.random()*10000 +1))
}
arr.sort((a,b)=>{
    num++
    return a - b;
})
console.log(num)