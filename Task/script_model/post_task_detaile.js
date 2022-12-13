/** 请求任务方法  */

var Task = {}

Task.Login_device = ()=>{     // 获取设备信息,并实现注册和登录,更新登录时间

    let url = 'http://192.168.1.120:5000/device/login';

    let device_obj = {};
    device_obj.android_id = device.getAndroidId();  // 设备id
    device_obj.mac_id = device.getMacAddress();     // mac_id
    device_obj.brand = device.brand;                // 品牌
    device_obj.product = device.product;            // 产品名称
    device_obj.width = device.width;                // 宽
    device_obj.height = device.height;              // 高
    device_obj.android_version = device.release;   // 安卓版本号

    // post传参
    var data = JSON.stringify(device_obj)

    // 回调结果
    var r = http.postJson(url, data, {method:'POST'});

    var res = r.body.string()

    console.log(res) 

}


Task.Get = ()=>{    // 获取设备id后，请求任务

    // 任务请求接口地址
    let url = 'http://192.168.1.120:5000/task/get_task_detaile'

    let android_id_obj = {};
    
    android_id_obj.anddroid_id = device.getAndroidId();     // 获取设备id

    var data = JSON.stringify(android_id_obj)               // post传参

    var r = http.postJson(url, data, {method:'POST'});      // 回调结果

    var res = r.body.string()                               // 转str

    return res

}

// 通过脚本url>读取任务脚本代码>写入本地文件>作为模块应用>并执行
Task.re_script = (url, t_id)=>{  //  获取任务t_id，获取任务脚本地址url

    // 读文件方法：保存到本地，并加载模块执行
    var js_url = 'https://douxiaoer-test.oss-cn-hangzhou.aliyuncs.com/script_file/demo.js';

    var res = http.get(url);

    if(res.statusCode >= 200 && res.statusCode < 300){
    
        // console.log("页面获取成功!");
        // console.log(res.body.string());             // 获取文件内容
    
        let text = res.body.string()
        
        files.create("/sdcard/脚本/test.js")        // 本地新建文件

        files.write("/sdcard/脚本/test.js", text);  // 将内容写入文件
    
        var circle = require('/sdcard/脚本/test.js');// 再做为模块引用

        var res = circle.area()                     // 执行脚本
    
        console.log(res);                           // 返回执行结果

    
    }else if(res.statusCode == 404){
    
        console.log("页面没找到哦...");
    
    }else{
    
        console.log("错误: " + res.statusCode + " " + res.statusMessage);
    
    }
}

// 回写结果到后台
Task.call_back = (response, t_id)=>{

    // post 接口发送任务id、任务处理结果
    
    // 成功 格式
    let res = {

        "result":"true",
        "msg":{}

    }

    // 失败格式
    let reser = {

        "result":"false",
        "msg":{}

    }

}





let task_res = Task.Get()   // 获取任务

console.log(task_res)

Task.Login_device()     // 登录设备
