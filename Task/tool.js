
var Tool={}

// 开启应用：输入应用中文名称，开启应用；
Tool.open_app=(appname)=>{  // 打开某应用
    var name= app.getPackageName(appname)
    sleep(2000)
    app.launch(name)
    sleep(2000)

};


// 退出应用：前台关闭当前应用
Tool.closed_app=()=>{  

    // 结束当前任务
    sleep(2000)
    recents() // 显示任务

    sleep(2000)
    swipe(600,1800,100,1800,1000)

    sleep(2000)
    swipe(600,1800,600,600,1000)
    
    sleep(2000)
    click(580,1400) // 回到主页

};

// 华为市场>>>安装应用
Tool.install_app=(_name)=>{

    // 打开应用市场
    var name = app.getPackageName('华为应用市场');
    app.launch(name)
    sleep(8000)
    
    click(280,350) // 点击搜索框进入搜索页面

    sleep(2000)
    className("EditText").findOne(4000).setText(_name) // 输入输入应用关键字

    
    // 搜索应用名称
    sleep(2000)

    text("搜索").findOne(2000).click() // 点击搜索框

    // 点击进入应用详情
    sleep(3000)
    if(text(_name).exists()){
        text(_name).findOnce(1).clickCenter()
    }

    sleep(3000)
    click(500,2250)// 点击安装应用


}


// 删除应用：输入应用中文名称，删除；
Tool.uninstall_app=(_name)=>{

    // 启动一个新的线程 过两秒执行点击时间
    threads.start(function () {
        sleep(2000)
        click(783, 2200)
    });

    var package_name = getPackageName(_name); //返回格式"com.tencent.mobileqq"

    app.uninstall(package_name);

}


// 后台截图方法：输入图片名称保存至【Task】文件夹
Tool.screenshot=(img_name)=>{

    // 截图功能>>保存到指定文件夹
    threads.start(function () {
        sleep(2000)
        click(783, 2200)
    });

    requestScreenCapture(false);// 请求竖屏截图

    sleep(1000)

    captureScreen('/sdcard/脚本/Task/'+ img_name);   // 截图

    // 查看文件是否存在

    // 返回截图结果true、false

    return 'true'

};

// 前台截图方法：保存到相册
Tool.scrshot_img=()=>{

    quickSettings()// 快捷栏
    sleep(1000)
    click(200,1522)// 点击截图按钮
    sleep(1000)
}


// 随机等待： 两个数之间 随机一个整数*1000 毫秒单位
Tool.getRandomInt=(min, max)=>{
        let num = Math.floor(Math.random() * (max - min)) + min;
        return num * 1000
        
};

// 定时长按:设置指定时长
Tool.press_fun =(x,y,duration)=>{
    press(x, y, duration)
}


// 红赏吧>>设置剪贴版内容>>粘贴文本到非编辑输入框
Tool.copy=(value)=>{

    // 搜索指定任务ID，领取任务----开始
    setClip(value);
    press(383,176, 3000)
    sleep(3000)
    click(300,367)
    sleep(3000)

}

// 浏览器打开指定链接
Tool.open_link=(url)=>{

    app.openUrl(url)

}


// 发邮件
Tool.push_email=(mail_list,title,textconter)=>{

    app.sendEmail({
        email: mail_list,   // 邮箱地址list:["10086@qq.com", "10001@qq.com"]
        subject: title,     // "这是一个邮件标题"
        text: textconter    //"这是邮件正文"
    });

}

module.exports = Tool;
