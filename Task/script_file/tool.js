var Tool= {}

// 开启应用：输入应用中文名称，开启应用；
Tool.open_app=(appname)=>{  // 打开某应用
    auto.waitFor()
    var name= app.getPackageName(appname)
    app.launch(name)

};


// 退出应用：前台关闭当前应用
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

// 安装应用
Tool.uninstallapp=(_name)=>{
}


// 删除应用：输入应用中文名称，删除；
Tool.uninstallapp=(_name)=>{

    // 启动一个新的线程 过两秒执行点击时间
    threads.start(function () {
        sleep(2000)
        click(783, 2200)
    });

    var package_name = getPackageName(_name); //返回格式"com.tencent.mobileqq"

    app.uninstall(package_name);

}


// 截图方法：输入截取成功图片名称
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


// 微信扫码：
Tool.sao_weixin=()=>{

}

// 随机等待： 两个数之间 随机一个整数*1000 毫秒单位
Tool.getRandomInt=(min, max)=>{
        let num = Math.floor(Math.random() * (max - min)) + min;
        return num * 1000
        
};

// 固定等待
Tool.wait=(num)=>{
    sleep(num)
}

// 坐标位置
Tool.click_fun =(x,y)=>{
    click(x,y)
}

// 坐标长按
Tool.long_click_fun =(x,y)=>{
    longClick(x,y)
}

// 定时长按:设置指定时长
Tool.press_fun =(x,y,duration)=>{
    press(x, y, duration)
}


// id找控件
Tool.select_id=(type,type_value,find_mode,mode_value,operation,operation_value)=>{

    // id().findOne().click()
    // text().findOne().click()
    // desc().findOne().click()
    // className().findOne().click()

    // findOne()
    // findOne(6000)
    // findOnce()
    // findOnec(1)

    // click()
    // clickCenter()
    // longClick()
    // setText()
    
    // 选择类型判断
    function type_if(type,type_value){

        if(type == 1){// id选择控件
            var type_text = 'id'
        }else if(type == 2){    // 文本选择控件
            var type_text = 'text'
        }else if(type == 3){    // 描述选择控件
            var type_text = 'desc'
        }else if(type == 4){ // 类名称选择控件
            var type_text = 'className'
        }else if(type == 5){    // 范围选择控件
            var type_text = 'bounds'
        }
    };
    // 查找方式判断
    function find_mode_if(find_mode,mode_value){
        if(find_mode == 1){ // 指定时间内搜索控件
            var mode_text = 'findOne(' + mode_value + ')'
        }else if(find_mode == 2){// 只搜索一次控件
            var mode_text = 'findOnec()'
        }else if(find_mode == 3){// 控件找到为止
            var mode_text = 'findOne()'
        }else if(find_mode == 4){// 控件找到后返回第几个
            var mode_text = 'findOnec(' + mode_value + ')'
        }else if(find_mode == 5){// 按坐标找控件
            var mode_text = ''
        };
    }
    // 操作方式判断
    function operation_if(operation,operation_value){

        if(operation == 0){

        }else if(operation == 1){

        }else if(operation == 2){

        }else if(operation == 3){

        }else if(operation == 4){

        }else if(operation == 5){

        }else if(operation == 6){

        }else if(operation == 7){

        }else if(operation == 8){

        }
    }



}
// desc找控件

// text找控件

// className找控件

// bounds找控件



module.exports = Tool;