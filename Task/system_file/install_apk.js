// 安装应用

// 打开应用市场
var name = app.getPackageName('华为应用市场');
console.log(name);
app.launch(name)
// 搜索应用名称
sleep(6000)
className("LinearLayout").findOne(2000).click() // 点击搜索框
sleep(2000)

className("EditText").findOne(2000).setText('微信') // 输入框输入应用关键字
// 点击安装
if(text('微信').exists()){
    text('微信').findOnce(1).click()
}
// 获取应用名称

// 返回是否成功






// 登录方法

// 注册方法


// 删除应用
// app.uninstall("com.tencent.mobileqq");



// 微信扫码>> 图片再相册中（所有图片）的位置操作
/** 
 * 1、打开微信 
 * 2、点击扫一扫
 * 3、选择相册
 * 4、选择第一行图片
 * 5、判断扫码执行是否完成
 * */
 var name = app.getPackageName('微信');
 app.launch(name)






// 打开链接