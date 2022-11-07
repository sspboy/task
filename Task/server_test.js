"nodejs";


var http= require('http');
var url = require('url');
var util = require('util');


http.createServer(function (request, response) {

    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});


    // var params = url.parse(request.url, true).query;
    // console.log(params)


    var on_off = true;

    while(on_off){

        

        Task_obj = false;// 请求任务：数据库请求任务详情
    
        if(Task_obj == false){  // 任务为空false：等待10秒，再次请求；

            var js_url = 'http://douxiaoer-test.oss-cn-hangzhou.aliyuncs.com/script_file/demo.js'

            var res = http.get(js_url);
            console.log(res);             // 获取文件内容

            if(res.statusCode >= 200 && res.statusCode < 300){

                console.log(res.body.string());             // 获取文件内容

            }
            
            console.log('任务未空-心跳一次')

            console.log('退出循环')

            on_off = false;           // 关闭开关:服务端开关状态--更新为关闭

            break
    
        }else{      // 任务不为空：执行任务
    
            // 加载js脚本 执行脚本>回写结果到数据库
    
    
            console.log('我在勤劳的执行任务ing....');
    
            console.log('执行任务完成ok，心跳一次');
    
        }

    }

    // 发送响应数据 "Hello World"
    // response.end('开启任务操作');


}).listen('8888');

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');
