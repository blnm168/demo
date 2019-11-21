let obj1 = {
    a: 1,
    b: 2,
    c: 3,
    e: {
        ea: '99',
        eb: '999',
        h:{
            h1:"h1",
            h3:"h3"
        }
    },
    g:'g'
}
let obj2 = {
    a: 11,
    b: 22,
    d: 3,
    e: {
        ea: '0000',
        ec: '999999',
        h:{
            h1:"h1",
            h2:"h2"
        }
    },
    f: {
        a: 'fa'
    }
}
Object.assign = (...arr) => {
    let obj = {}
    let obj1 = arr[0]
    arr.map((e) => {
        for (let i in e) {
            if (!obj1.hasOwnProperty(i)) {
                obj[i] = e[i]
            } else if (obj1.hasOwnProperty(i) && typeof e[i] == 'object') {
                obj[i]=Object.assign(obj1[i],e[i])
            } else {
                obj[i] = e[i]
            }
        }
    })
    return obj;
}
console.log(Object.assign(obj1) == obj1)