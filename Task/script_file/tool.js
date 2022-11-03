var Tool= {}

Tool.open_app=(appname)=>{  // 打开某应用
    auto.waitFor()
    var name= app.getPackageName(appname)
    app.launch(name)

};


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

module.exports = Tool;