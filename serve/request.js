// 封装一个 axios 文件
import axios from "axios";

// import baseURL from '@/api/baseURL.js'
// import { request } from "@/api/requestHttp.js";



// 创建
const request = axios.create();

request.defaults.baseURL = 'http://192.168.1.24:8080/';

// 设置请求拦截器
request.interceptors.request.use(
    function (config) {
        // config.headers.token = window.sessionStorage.getItem('token')
        // 添加一个请求头
        // 判断用户是否登录
        // 验证token  

        const token = localStorage.token;
        if (token) {
            config.headers['Content-Type'] = 'application/json; charset=UTF-8';
            config.headers['token'] = token;
        }

        // console.dir(config);
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

// 设置响应拦截器
request.interceptors.response.use(
    function (response) {
        if (response.data.code == 200) {
            return Promise.resolve(response.data);
        }
        if (response.data.code == 10004) {
            // vm.$message.error("登录凭证已过期，请重新登录");
            vm.$router.push('/login');
            // MessageOnce.error("登录信息已失效，请重新登录");
            localStorage.removeItem('token');
            return Promise.reject('登录信息已失效，请重新登录');
        }
        // MessageOnce.error(response.data.message || response.data.msg);
        return Promise.reject(response.data);
    },
    function (error) {
        switch (error.response.status) {
            case 500:
                // MessageOnce.error('系统异常');
                break;
            case 400:
                // MessageOnce.error('参数错误');
                break;
            case 404:
                // MessageOnce.error('地址错误');
                break;
            case 405:
                vm.$router.push('/login');
                // MessageOnce.error("登录信息已失效，请重新登录");
                localStorage.removeItem('token');
                break;

            default:
                break;
        }
        return Promise.reject(error);
    }
);

// 暴露对象
export default request;