"nodejs";
// 转义js到todo——list
const fs = require("fs");               // 文件操作
const {device} = require("device");     // 设备
const axios = require("axios");         // http异步请求
const { accessibility } = require('accessibility'); // 启用无障碍服务


// 配置文件
exports.config={
    /** 局域网环境 */
    'loaclhost': 'http://192.168.1.120:5000',   // 后台API地址
    /**postapi 模拟接口 */
    'device_status_api':'http://192.168.100.163:10393/mock/82eec109-0193-45ce-92a9-186c266725f7/device_status',     // 当前设备状态接口
    'device_port_api':'http://192.168.100.163:10393/mock/82eec109-0193-45ce-92a9-186c266725f7/port',                // 设备端口号请求
    // 设备登录接口
}

// 构建网络请求方法
exports.HttpGet = async function(request_url) {
    try {
        const res = await axios.get(request_url);
        return res.data
    } catch (e) {
        console.log(request_url + '：：：接口请求错误');
    }
};

// 获取无障碍模式
exports.Main = async function(){
    await accessibility.enableService({toast:true});
}

// 脚本js写入文件
exports.todo = function(js_data) {

    fs.open('todo_list.js','w',function(err,fd){

        fs.writeFile('todo_list.js', js_data,  function(err) {
            fs.close(fd,function(err){
                console.log('脚本写入成功')
            })
        })

    })

    // 异步读取
    fs.readFile('todo_list.js', function (err, data) {

        if (err) {

            console.log('读取脚本出错了！！！');

        }

        console.log(data.toString());
    });

}

// 登录&注册设备
exports.Login_device = ()=>{     // 获取设备信息,并实现注册和登录,更新登录时间

    let url = this.config.loaclhost + '/device/login';

    let device_obj = {};
    device_obj.android_id = device.androidId;  // 设备id
    device_obj.mac_id = device.macAddress;     // mac_id
    device_obj.brand = device.product.brand;   // 品牌
    device_obj.product = device.product.board;       // 产品名称
    device_obj.width = device.screenWidth;     // 宽
    device_obj.height = device.screenHeight;   // 高
    device_obj.android_version = device.buildId; // 安卓版本号
    // post传参
    var data = JSON.stringify(device_obj)
    console.log(data)

    // 回调结果
    axios.post(url, data).then(function (response) {
        console.log('设备注册成功');
        console.log(response.data);

    }).catch(function (error) {
        console.log(url + '：：：：接口推送post错误');
    });

}






