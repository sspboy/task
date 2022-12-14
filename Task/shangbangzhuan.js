/** shangbangzhuan */

var Tool = require('/storage/emulated/0/脚本/Task/tool.js');

var SBZ={}

/** 赏帮赚-打开应用 开始 */
//Tool.open_app('赏帮赚')
//sleep(3000)
/** 赏帮赚-打开应用 结束 */


SBZ.xuanshang = ()=>{
    // 进入悬赏大厅
    sleep(3000)
    click(400,2260)
    sleep(1000)
}

SBZ.qiehaun=()=>{

    // 切换未做过的任务
    sleep(3000)
    // click(960,330)
    text('未做').findOne().clickCenter()
    // 选择类型
    sleep(3000)
    text('类型').findOne().click()
    
    // 切换为简单任务
    sleep(3000)
    click(120,580)
    sleep(1000)

}

SBZ.select_title=(title)=>{
    // 标题选任务，进入任务详情
    sleep(3000)
    text(title).findOne().clickCenter()
    sleep(1000)
}


// 详情页面 我要报名
SBZ.sign_up=()=>{
    sleep(3000)
    text('我要报名').findOne().clickCenter()
}



// 保存二维码
SBZ.save_code=()=>{
    sleep(3000)
    text('保存扫码').findOne().clickCenter()
}


// 快捷方式截图
// Tool.scrshot_img()
// 指定文件名截图
// Tool.screenshot('haha.png')


// 上传任务验证图片1\2\3上
SBZ.update_img=()=>{
    sleep(3000)
    text('上传数据图').findOne().clickCenter()
}


// 搜索任务id，进入任务详情??

// 复制口令？？


// 提交任务，等待审核

// 退出脚本

// 打开链接：默认浏览器

// 微信扫码