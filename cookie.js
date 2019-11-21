var express = require('express')
var cookieParser = require('cookie-parser')
var app = new express()
app.use(cookieParser());
var cors = require('cors')
// app.use(cors())
app.use(cors({credentials: true, origin: 'http://192.168.0.121:8080'}));

app.get('/s',function(req,res){
    console.log(req.cookies);
    res.send('你好nodejs')
})
 
app.get('/news',function(req,res){
    console.log(req.cookies);
    res.send('你好nodejs news')
})
 
app.get('/set',function(req,res){
    /*
    *   参数1：名字
    *   参数2：cookie的值
    *   参数3：cookie的配置信息
    * */
    //设置cookie由服务器端来完成，设置之后保存在浏览器本地
    // 客户端浏览器发送请求的时候把存储在浏览器本地的cookie也一并发送过去
 
 
    /*
    *   在localhost:3000下设置的cookie，默认在localhost:3000下的
    *   所有路由可以访问到
    * */
    res.cookie('username','cookie的值',{maxAge:600000})
 
    /*
    *   设置cookie path，只在设置cookie时所在的域名的path指定的路由下可以访问
    * */
    // res.cookie('userinfo','cookie111',{maxAge:60000,path:'/news',httpOnly:true})
 
    /*
    *   aaa.com
    *   news.aaa.com
    *   www.aaa.com
    *   domain:'aaa.com'  多个二级域名共享cookie
    * */
    // res.cookie('user','cookie的值111',{maxAge:600000,domain:'.aaa.com'});
 
    /*
    *   使用sign对cookie进行加密
    *   1、参数表示加密的随机字符串
    *   app.use(cookieParser('sign');
    *   2、设置
    *   res.cookie('userinfo','cookie222_info',{maxAge:50000,signed:true})
    *   3、使用 获取
    *   req.signedCookies
    * */
 
 
 
    res.send('设置cookie成功')
})
 
app.listen(3000,'192.168.0.121')