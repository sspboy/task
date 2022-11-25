// 安装应用

// 打开应用市场
var name = app.getPackageName('华为应用市场');
console.log(name);
app.launch(name)
sleep(6000)

// 搜索应用名称
className("LinearLayout").findOne(2000).click() // 点击搜索框
sleep(2000)

className("EditText").findOne(2000).setText('微信') // 输入框输入应用关键字
// 点击安装
if(text('微信').exists()){
    text('微信').findOnce(1).click()
}
// 获取应用名称

// 返回是否成功

