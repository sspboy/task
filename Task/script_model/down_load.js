
var js_url = 'https://douxiaoer-test.oss-cn-hangzhou.aliyuncs.com/script_file/demo.js'

var res = http.get(js_url);
if(res.statusCode >= 200 && res.statusCode < 300){
	toast("页面获取成功!");
    toastLog(res.body.string());// 获取文件内容
    // 本地存储文件内容
    // 再做为模块引用执行
}else if(res.statusCode == 404){
	toast("页面没找到哦...");
}else{
	toast("错误: " + res.statusCode + " " + res.statusMessage);
}