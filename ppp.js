let fc = async function (id) {
    let res = await post("/admin/task/info/getTask", {
        id
    })
    let obj = {};
    obj.id = res.content.id;
    obj.name = res.content.name;
    obj.place = res.content.place;
    //已选任务
    // this.haveList.push(obj);
    //显示地图坐标
    let latitude = res.content.latitude;
    let longitude = res.content.longitude;
    return [longitude, latitude];
}

let results = await Promise.all(val.map(async (item) => {
    // 等待异步操作完成，返回执行结果
    return await fc(item);
}));

let arr = [];
let p = new Promise(function (resolve, reject) {
    arr.push({ resolve, reject })
});
p.then(res => {
    console.log(res)
})
arr[0].resolve('cs')