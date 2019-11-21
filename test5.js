(function (fun){
   console.log=function(e){
       fun('===========')
       fun(e)
       fun('===========')
   }
})(console.log)
// console.log(aa,bb)
console.log('123')