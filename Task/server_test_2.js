"nodejs";

const http = require("http")    // 服务模块

const axios = require("axios")  // http异步请求

const {device} = require("device")  // 设备

const engines = require("engines")  // 脚本引擎

// 构建网络请求方法
async function HttpGet(url) {
    try {
        const res = await axios.get(url);
        return res.data

    } catch (e) {
        console.error(e);
    }
};

console.log(device.androidId)   // 获取设备id

http.createServer(function (request, response) {      // http搭建服务接口
  
    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    var url= 'http://douxiaoer-test.oss-cn-hangzhou.aliyuncs.com/script_file/demo.js'

    HttpGet(url).then((res)=>{    // 请求接口地址

        console.log(res)
    })

    // 脚本引擎执行
    const exc_js = engines.execScriptFile('jiaoben.js');
    exc_js.on('success',()=>{
        console.log('脚本运行结束')
        process.exit();
    })


    
    // 发送响应数据 "Hello World"
    response.end('任务完成');


}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');


// 脚本引擎执行pro8脚本
// 执行完毕回调存储结果
