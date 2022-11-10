var Tool= {}

// 开启应用
Tool.open_app=(appname)=>{  // 打开某应用
    auto.waitFor()
    var name= app.getPackageName(appname)
    app.launch(name)

};

// 关闭应用
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

}


// 两个数之间 随机一个整数*1000 毫秒单位
Tool.getRandomInt=(min, max)=>{
        let num = Math.floor(Math.random() * (max - min)) + min;
        return num * 1000
        
};

module.exports = Tool;