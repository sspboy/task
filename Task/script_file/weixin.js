// 微信控制脚本
var Tool = require('/sdcard/脚本/Task/script_file/tool.js');

Tool.open_app('微信')
sleep(3000)

swipe(600,1800,600,800,1000)

sleep(5000)

// 扫一扫

Tool.closed_app()