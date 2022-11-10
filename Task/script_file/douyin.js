var Tool = require('/sdcard/脚本/Task/script_file/tool.js');

// 打开抖音极速版
Tool.open_app('抖音极速版')


sleep(Tool.getRandomInt(4,8))// 等待加载页面
swipe(600,1800,600,1000,1000)

sleep(2000)// 等待加载页面
click(573,2249);// 点击来赚钱




/**签到模块 */
sleep(Tool.getRandomInt(2,4))

if(text('签到提醒').exists()){ // 判断是否'签到提醒'弹出层

    console.log('发现-----签到模块')
    click(600,1440);    //点击签到按钮
    sleep(4000)

    text('看广告视频再赚').findOne().clickCenter();//判断是否看广告视频再赚：点击进入广告
    sleep(60000) // 等待一分钟 第一次视频广告

    if(desc('返回').exists()){          // 进入下载页面 

        desc('返回').findOne().clickCenter()
        sleep(4000)

        desc('关闭 按钮').findOne().clickCenter()
        sleep(4000)

        desc('领取奖励').findOne().clickCenter() // 第二次 视频广告
        sleep(45000)

        desc('关闭 按钮').findOne().clickCenter() 

    }

    if(desc('领取成功').exists()){      // 未进入下载页面

        desc('领取成功').findOne().clickCenter()
        sleep(2000)

        desc('领取奖励').findOne().clickCenter()    // 第二次 视频广告
        sleep(45000)

        desc('领取成功').findOne().clickCenter() 

    }

}


/**看视频 */ 
sleep(Tool.getRandomInt(2,4))
if(text('看广告赚金币').exists()){      // 判断'看广告视频'

    console.log('发现----看广告赚金币')
    text('看广告赚金币').findOne().clickCenter()   // 点击进入广告查看
    sleep(45000) // 等待一分钟 第一次视频广告

    if(desc('返回').exists()){          // 进入下载页面

        console.log('进入下载页面 ')

        desc('返回').findOne().clickCenter()
        sleep(4000)

        desc('关闭 按钮').findOne().clickCenter()
        sleep(4000)

        desc('领取奖励').findOne().clickCenter() // 第二次 视频广告
        sleep(45000)

        desc('关闭 按钮').findOne().clickCenter() 

    }

    if(desc('领取成功').exists()){      // 未进入下载页面

        console.log('未进入下载页面')

        desc('领取成功').findOne().clickCenter()
        sleep(2000)

        desc('领取奖励').findOne().clickCenter()    // 第二次 视频广告开始
        sleep(45000)

        if(desc('领取成功').exists()){      // 未进入下载页面
            desc('领取成功').findOne().clickCenter()
        }

        if(desc('返回').exists()){
            desc('返回').findOne().clickCenter()
            sleep(2000)     
            desc('关闭 按钮').findOne().clickCenter() 
        }

    }
}


sleep(Tool.getRandomInt(2,4))

/**开宝箱 */ 
if(text('开宝箱得金币').exists()){      // 判断'看广告视频'

    console.log('发现----宝箱')
    desc('开宝箱得金币').findOne().clickCenter() 
    sleep(2000)

    desc('看广告视频再赚').findOne().clickCenter() 
    sleep(45000) // 等待一分钟 第一次视频广告


    if(desc('返回').exists()){          // 进入下载页面 
        console.log('宝箱-进入下载页面 ')

        desc('返回').findOne().clickCenter()
        sleep(2000)

        desc('关闭 按钮').findOne().clickCenter()
        sleep(2000)

        desc('领取奖励').findOne().clickCenter()    // 第二次 视频广告
        sleep(45000)
        
        desc('关闭 按钮').findOne().clickCenter() 

    }

    if(desc('领取成功').exists()){      // 未进入下载页面

        console.log('宝箱-未进入下载页面 ')

        desc('领取成功').findOne().clickCenter()
        sleep(2000)

        desc('领取奖励').findOne().clickCenter()    // 第二次 视频广告
        sleep(45000)


        if(desc('领取成功').exists()){      // 未进入下载页面
            desc('领取成功').findOne().clickCenter()
        }

        if(desc('返回').exists()){
            desc('返回').findOne().clickCenter()
            sleep(2000)     
            desc('关闭 按钮').findOne().clickCenter() 
        }


    }
}




// 退出应用
sleep(2000)
Tool.closed_app() // 封装的方法