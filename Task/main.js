"nodejs";

const url = require("url");             // url
const {device} = require("device");     // 设备
const engines = require("engines");     // 脚本引擎
const express = require('express');     // restapi
const bodyParser = require('body-parser');  // post接口解析方法
const app = express();                      // 构建app服务

const escape = require("./system_file/escape");   // 脚本保存本地todo—list.js

app.use(bodyParser.json());                 // body-parser中间件支持json解析

app.use(bodyParser.urlencoded({             // body-parser中间件支持x-www-form-urlencoded解析
    extended:true
}));

escape.Main();              /** 获取无障碍模式 */

// escape.Login_device()    /** 设备登录&注册 */ // 自动分配 设备端口规则：：所有端口中最大的一个端口号+1为新的设备端口号

/** 当前设备状态：：0=空闲，1=工作中 */ 
escape.HttpGet(escape.config.device_status_api).then((res)=>{
    console.log('设备状态：' + res.status)
})

/** 变更设备状态为【工作中1】 */
/** 变更设备状态为【空闲中0】 */


// 添加脚本接口
app.get('/addjs', function (request, response) {

    response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    let text = {"res":"脚本javascript"}
    console.log(text)
    response.end(JSON.stringify(text));

})

app.post('/push',function(request,response){

    console.log(request.body)

    var js_text = request.body;// 获取post参数

    escape.todo(js_text.result); // 写入todo_list.js文件

    const exc_js = engines.execScriptFile('./todo_list.js');    // 脚本引擎执行pro8脚本

    exc_js.on('success',()=>{

        console.log('脚本运行结束')

    })
    
    exc_js.engineOrNull?.forceStop();// 结束引擎
    // 更新设备为繁忙
    // 解析任务
    // 将任务执行语句写入本地
    // 引擎执行本地脚本
    // 执行结果保存
    // 变更设备为空闲
    response.end('true');

})

const android_id = device.androidId;  // 设备id

const ip = '0.0.0.0';   // 定义ip

// const port_api_url = escape.config.loaclhost + '/device/getport?android_id=' + android_id; // 请求端口号接口url

escape.HttpGet(escape.config.device_port_api).then((port_num)=>{

    console.log('端口号：' + port_num.port)

    app.listen(port_num,ip);

    console.log('Server running');

})

// 补充说明：：脚本引擎必须再系统文件main.js中运行，而不是再脚本文件中运行