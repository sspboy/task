<<<<<<< HEAD
var Tool = require('/sdcard/脚本/Task/script_file/tool.js');

// 打开抖音极速版
Tool.open_app('抖音极速版')


sleep(6000)// 等待加载页面
swipe(600,1800,600,1000,1000)

click(573,2249);// 点击来赚钱

=======

// 抖音脚本任务开始
auto.waitFor()
var name= app.getPackageName('抖音极速版')// 打开抖音应用
app.launch(name)
sleep(5000)


// 点击来赚钱
click(573,2249);
>>>>>>> 314f210fce35dbe04e0fe66b11d65d32bd566f52



/**签到模块 */
<<<<<<< HEAD
sleep(5000)

if(text('签到提醒').exists()){ // 判断是否'签到提醒'弹出层

    console.log('发现-----签到模块')
    click(600,1440);    //点击签到按钮
    sleep(2000)

    text('看广告视频再赚').findOne().clickCenter();//判断是否看广告视频再赚

    sleep(50000) // 等待一分钟 第一次视频广告

    if(desc('返回').exists()){          // 进入下载页面 

        desc('返回').findOne().clickCenter()
        sleep(2000)

        desc('关闭 按钮').findOne().clickCenter()
        sleep(2000)

        desc('领取奖励').findOne().clickCenter() // 第二次 视频广告
        sleep(35000)

        desc('返回').findOne().clickCenter()
        desc('关闭 按钮').findOne().clickCenter() 

    }

    if(desc('领取成功').exists()){      // 未进入下载页面

        desc('领取成功').findOne().clickCenter()
        sleep(2000)

        desc('领取奖励').findOne().clickCenter()    // 第二次 视频广告
        
        sleep(45000)

        click(573,1249);

        desc('领取成功').findOne().clickCenter() 


    }
=======
sleep(2000)

if(text('签到提醒').exists()){ // 判断是否'签到提醒'弹出层

    console.log('发现-----签到模块')

    //点击签到
    desc('看广告视频再赚').findOne().clickCenter();//判断是否看广告视频再赚

>>>>>>> 314f210fce35dbe04e0fe66b11d65d32bd566f52

}


/**看视频 */ 
sleep(2000)
if(text('看广告赚金币').exists()){      // 判断'看广告视频'

    console.log('发现----看广告赚金币')
    text('看广告赚金币').findOne().clickCenter()   // 点击进入广告查看
<<<<<<< HEAD
    sleep(45000) // 等待一分钟 第一次视频广告
=======
    sleep(60000) // 等待一分钟 第一次视频广告
>>>>>>> 314f210fce35dbe04e0fe66b11d65d32bd566f52

    if(desc('返回').exists()){          // 进入下载页面 

        desc('返回').findOne().clickCenter()
        sleep(2000)

        desc('关闭 按钮').findOne().clickCenter()
        sleep(2000)

<<<<<<< HEAD
        desc('领取奖励').findOne().clickCenter() // 第二次 视频广告开始
        sleep(45000)

        desc('返回').findOne().clickCenter()
        desc('关闭 按钮').findOne().clickCenter() 

    }

    if(desc('领取成功').exists()){      // 未进入下载页面

        desc('领取成功').findOne().clickCenter()
        sleep(2000)
=======
        desc('领取奖励').findOne().clickCenter() // 第二次 视频广告

        desc('返回').findOne().clickCenter()
        desc('关闭 按钮').findOne().clickCenter() 

    }

    if(desc('领取成功').exists()){      // 未进入下载页面

        desc('领取成功').findOne().clickCenter()
        sleep(2000)

        desc('领取奖励').findOne().clickCenter()    // 第二次 视频广告
        
        sleep(45000)

        click(573,1249);

        desc('领取成功').findOne().clickCenter() 


    }
>>>>>>> 314f210fce35dbe04e0fe66b11d65d32bd566f52

        desc('领取奖励').findOne().clickCenter()    // 第二次 视频广告开始
        sleep(45000)

        click(573,1249);

        desc('领取成功').findOne().clickCenter() 


    }
}

sleep(5000)


/**开宝箱 */ 
if(text('开宝箱得金币').exists()){      // 判断'看广告视频'

    console.log('发现----宝箱')
    desc('开宝箱得金币').findOne().clickCenter() 
    sleep(2000)

    desc('看广告视频再赚').findOne().clickCenter() 
    sleep(45000) // 等待一分钟 第一次视频广告


<<<<<<< HEAD
    if(desc('返回').exists()){          // 进入下载页面 
=======
//     console.log('发现----宝箱')
//     desc('开宝箱得金币').findOne().clickCenter() 
//     sleep(2000)

//     desc('看广告视频再赚').findOne().clickCenter() 
//     sleep(60000) // 等待一分钟 第一次视频广告


//     if(desc('返回').exists()){          // 进入下载页面 

//         desc('返回').findOne().clickCenter()
//         sleep(2000)

//         desc('关闭 按钮').findOne().clickCenter()
//         sleep(2000)

//         desc('领取奖励').findOne().clickCenter()    // 第二次 视频广告

//         desc('返回').findOne().clickCenter()
//         desc('关闭 按钮').findOne().clickCenter() 

//     }

//     if(desc('领取成功').exists()){      // 未进入下载页面

//         desc('领取成功').findOne().clickCenter()
//         sleep(2000)

//         desc('领取奖励').findOne().clickCenter()    // 第二次 视频广告

//         sleep(40000)

//         click(573,1249);

//         desc('领取成功').findOne().clickCenter() 


//     }

>>>>>>> 314f210fce35dbe04e0fe66b11d65d32bd566f52

        desc('返回').findOne().clickCenter()
        sleep(2000)

        desc('关闭 按钮').findOne().clickCenter()
        sleep(2000)

        desc('领取奖励').findOne().clickCenter()    // 第二次 视频广告
        sleep(45000)

        desc('返回').findOne().clickCenter()
        desc('关闭 按钮').findOne().clickCenter() 

    }

    if(desc('领取成功').exists()){      // 未进入下载页面

<<<<<<< HEAD
        desc('领取成功').findOne().clickCenter()
        sleep(2000)

        desc('领取奖励').findOne().clickCenter()    // 第二次 视频广告
        sleep(45000)

        click(573,1249);

        desc('领取成功').findOne().clickCenter() 


    }
}




// 退出应用
sleep(2000)
Tool.closed_app()
=======
// // 结束当前任务
// sleep(2000)
// recents() // 显示任务
// sleep(2000)
// swipe(600,1800,600,1000,1000)
// home() // 回到主页
>>>>>>> 314f210fce35dbe04e0fe66b11d65d32bd566f52
