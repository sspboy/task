"nodejs";

const { accessibility } = require('accessibility'); // 启用无障碍服务

const url = require("url");             // url

const {device} = require("device");     // 设备

const http = require("http");           // 服务模块

const axios = require("axios");         // http异步请求

const engines = require("engines");     // 脚本引擎

const fs = require("fs");               // 文件操作

const express = require('express');       // restapi

var bodyParser = require('body-parser');    // post接口解析方法

const app = express();                      // 构建app服务

app.use(bodyParser.json());                 // json 绑定解析方法



// 构建网络请求方法
async function HttpGet(request_url) {
    try {
        const res = await axios.get(request_url);
        return res.data
    } catch (e) {
        console.error(e);
    }
};

// 启动无障碍模式
accessibility.enableService({toast:true});


const port =3000;//定义端口号

const ip = '0.0.0.0';// 定义ip

// 常规任务
app.get('/tasktest', function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    let text = {"res":"任务完成"}
    response.end(JSON.stringify(text));
    
    // 后台通过 url 传参 至 设备服务地址，获取脚本地址
    var params = url.parse(request.url, true).query;
    console.log(params)

    var script_url= 'http://douxiaoer-test.oss-cn-hangzhou.aliyuncs.com/script_file/demo.js'
    var script_name = '';

    HttpGet(script_url).then((res)=>{    // 获取任务脚本内容
        
        // 读取任务文件地址,获取脚本内容；
        // 创建本地文件；
        // 内容保存到本地文件；
        fs.writeFile('try4.txt', 'HelloWorld', function(err) {})

        // 返回路径、名称；

        console.log(device.androidId)   // 获取设备id
        console.log(res)

    }).then(()=>{

        // 脚本引擎执行pro8脚本
        const exc_js = engines.execScriptFile('script_file/douyin.js');
        exc_js.on('success',()=>{
            console.log('脚本运行结束')
            // process.exit() // 全部退出脚本
        })


    }).then(()=>{

        // 回写任务结果到后台
        // 执行完毕回调存储结果


    })

})

// 添加脚本接口
app.get('/addjs', function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    let text = {"res":"脚本javascript"}
    response.end(JSON.stringify(text));
    var task_list= [1,2,3,4,5]
    // 将12345翻译为方法写入js文件中
    // 载入js文件
    // 脚本引擎运行js文件


    


})

app.post('/push',function(request,response){
    response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    console.log(request.body)


    response.end('true');

})

app.listen(port,ip);




// 补充说明：：脚本引擎必须再系统文件main.js中运行，而不是再脚本文件中运行
