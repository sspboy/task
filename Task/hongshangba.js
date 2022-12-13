// var res = {"result":"var Tool = require('./tool.js');\nTool.open_app('红赏吧')\nsleep(5000)\nclick(538,155)\nsleep(2000)\nclassName('LinearLayout').findOne(3000).setText('1013590')\nsleep(2000)\nclick(1000,200)\nsleep(2000)\nclick(580,640)\nexit();"}

var Tool = require('/storage/emulated/0/脚本/Task/tool.js');
/** 红赏吧-打开应用 开始 */
Tool.open_app('红赏吧')
sleep(3000)
/** 红赏吧-打开应用 结束 */


/**  红赏吧 搜索指定任务ID，领取任务----开始 */
// click(538,155)// 点击搜索框，进入搜索页面
// setClip('1013590');
// press(383,176, 3000)
// sleep(3000)
// click(300,367)
// sleep(3000)
// click(975,176) // 点击搜索按钮
// sleep(3000)
// click(580,640) // 点击任务列表，进入任务详情；
// click(480,2250)// 点击领取任务
/** 搜索指定任务ID，领取任务----结束 */ 


id('saveQrCodeText').findOne().click()  // 点击保存二维码

Tool.sao_weixin()                       // 微信扫码打开应用

id('copyCopyDataText').findOne().click()// 点击复制文字




// 应用操作
sleep(5000)
click(560,1780) // 我要购币

sleep(5000)

click(930,2100)// 京东补贴支付

sleep(5000)
click(930,2100)// 提示点击

sleep(5000)

click(810,930) // 京东小程序

sleep(4000)
click(765,1350)// 允许打开小程序

sleep(4000)
click(280,1150)// 点击商品



/** 微信支付 输入密码 开始*/
sleep(8000) // 等待加载微信支付界面
// 输入支付密码
click(186,1800)
sleep(2000)
click(550,1800)
sleep(2000)
click(880,1800)
sleep(2000)
click(220,1960)
sleep(2000)
click(520,1960)
sleep(2000)
click(880,1960)
sleep(2000)
/** 微信支付 输入密码 结束*/






// 进入指定页面????

// 浏览器 >> 打开链接

// 按要求截图
Tool.screenshot()

// 上传截图 添加图片

// 输入用户心心 手机号

// 复制验证码 粘贴到输入框中

// 提交任务