import myServe from "./serve";
let l = {
    login: '/admin/login',
    getLoginUserInfo: '/admin/user/info/getLoginUserInfo',
}
myServe.use('login', l)
export default myServe;