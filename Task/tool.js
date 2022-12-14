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

// 安装应用
Tool.install_app=(_name)=>{

    // 打开应用市场
    var name = app.getPackageName('华为应用市场');
    app.launch(name)
    sleep(6000)

    // 搜索应用名称
    className("LinearLayout").findOne(2000).click() // 点击搜索框
    sleep(2000)

    className("EditText").findOne(2000).setText(_name) // 输入框输入应用关键字

    // 点击安装
    if(text(_name).exists()){
        text(_name).findOnce(1).click()
    }

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



// 微信扫码：
Tool.sao_weixin=()=>{
    // 打开微信
    var name= app.getPackageName('微信')
    sleep(2000)
    app.launch(name)
    sleep(2000)
    // 点击右上角加号
    click(1000,180)
    sleep(2000)
    // 点击扫一扫
    click(820,630)
    sleep(2000)
    // 点击相册
    click(950,2000)
    sleep(2000)
    // 点击相册第一张图片位置
    click(400,380)
    sleep(5000)
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

// 微信支付-输入密码
Tool.weixin_pay_pass_word = ()=>{

    sleep(5000) // 等待加载微信支付界面
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

}

// 红赏吧>>>>粘贴文本到非编辑输入框
Tool.copy=(value)=>{

    // 搜索指定任务ID，领取任务----开始
    setClip(value);
    press(383,176, 3000)
    sleep(3000)
    click(300,367)
    sleep(3000)

}


module.exports = Tool;
