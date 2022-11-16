var Tool= {}

// 开启应用
Tool.open_app=(appname)=>{  // 打开某应用
    auto.waitFor()
    var name= app.getPackageName(appname)
    app.launch(name)

};

// 前台关闭当前应用
Tool.closed_app=()=>{  
    sleep(2000)
    home() // 回到主页

    // 结束当前任务
    sleep(2000)
    recents() // 显示任务

    sleep(2000)
    swipe(600,1800,600,1000,1000)
    
    sleep(2000)
    home() // 回到主页

};

// 截图方法
Tool.screenshot=(img_name)=>{

    // 截图功能>>保存到指定文件夹
    threads.start(function () {
        sleep(2000)
        click(783, 2200)
    });

    requestScreenCapture(false);// 请求竖屏截图

    sleep(1000)

    captureScreen('/sdcard/脚本/'+ img_name);   // 截图

    // 查看文件是否存在

    // 返回截图结果true、false

    return ''

};

// 删除应用
Tool.uninstallapp=(_name)=>{

    // var package_name = getPackageName(_name); //返回"com.tencent.mobileqq"

    // app.uninstall(package_name);

}


// 两个数之间 随机一个整数*1000 毫秒单位
Tool.getRandomInt=(min, max)=>{
        let num = Math.floor(Math.random() * (max - min)) + min;
        return num * 1000
        
};




module.exports = Tool;