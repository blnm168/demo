// const list = [1, 2, 3]
// const square = num => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(num * num)
//     }, 1000)
//   })
// }
// list.reduce(async (_, x) => {
//     await _
//     const res = await square(x)
//     console.log(res)
//   }, undefined)
// function test() {
//   list.forEach(async x=> {
//     const res = await square(x)
//     console.log(res)
//   })
// }
// test()
// function te(params) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//           resolve('222')
//         }, 1000)
//       })
// }
// async function name(params) {
//     const n = await te()
//     return '111'
// }
// console.log(name())
// name().then(e => {
//     console.log(e)
// })
 let arr = [1, 2, 3, 5, 6]
// arr.forEach((e) => {
//     console.log(e)
// })
Array.prototype._splice=function (start,deleteCount,...addList) {
    if (start<0) {
        if (Math.abs(start) > this.length) {
            start = 0
        } else {
            start += this.length
        }
    }
    if (typeof deleteCount === 'undefined') {
        deleteCount = 0;
    }
    let removeList = this.slice(start, start + deleteCount);
    let right = this.slice(start + deleteCount)
    let index = start;
    addList.concat(right).forEach((item) => {
        this[index]=item;
        index++
    })
    this.length = index
    return removeList;
}
arr._splice(2, 2, 9, 9,9)
console.log(arr)
