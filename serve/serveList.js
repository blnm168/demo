import myServe from "./serve";
let l = {
    login: '/admin/login',
    getLoginUserInfo:'/admin/user/info/getLoginUserInfo',
}
console.log(myServe)
// myServe.use('login',l)
export default myServe;