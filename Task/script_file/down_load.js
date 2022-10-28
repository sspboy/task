// 读文件信息，保存到本地文件夹
var js_url = 'https://douxiaoer-test.oss-cn-hangzhou.aliyuncs.com/script_file/demo.js'

var res = http.get(js_url);
if(res.statusCode >= 200 && res.statusCode < 300){
	console.log("任务获取成功!");
    console.log(res.body.string());             // 获取文件内容
    let text = res.body.string()
    files.create("/sdcard/脚本/test.js")        // 本地新建文件
    files.write("/sdcard/脚本/test.js", text);  // 将内容写入文件
    var circle = require('/sdcard/脚本/test.js');// 再做为模块引用执行
    var res = circle.area()
    console.log(res);

}else if(res.statusCode == 404){

	console.log("页面没找到哦...");

}else{

    console.log("错误: " + res.statusCode + " " + res.statusMessage);

}