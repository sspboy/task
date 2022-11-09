"nodejs";

const url = require("url");    // url

const {device} = require("device");  // 设备

const http = require("http");    // 服务模块

const axios = require("axios");  // http异步请求

const engines = require("engines");  // 脚本引擎

const fs = require("fs");           // 文件操作

// 构建网络请求方法
async function HttpGet(request_url) {
    try {
        const res = await axios.get(request_url);
        return res.data
    } catch (e) {
        console.error(e);
    }
};

// 获取设备端口号；


// http搭建服务接口
http.createServer(function (request, response) {
  
    // 发送 HTTP 头部 // HTTP 状态值: 200 : OK// 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // 后台通过 url 传参 至 设备服务地址，获取脚本地址；
    var params = url.parse(request.url, true).query;

    console.log(params)

    var script_url= 'http://douxiaoer-test.oss-cn-hangzhou.aliyuncs.com/script_file/demo.js'
    var script_name = '';

    HttpGet(script_url).then((res)=>{    // 获取任务脚本内容
        
        // 读取任务文件地址,获取脚本内容；

        // 脚本内容保存到本地文件；
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
    
    // 发送响应数据 "Hello World"
    // response.end('任务完成');


}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');




// 补充说明：：脚本引擎必须再系统文件main.js中运行，而不是再脚本文件中运行
