/** shangbangzhuan */

var Tool = require('/storage/emulated/0/脚本/Task/tool.js');

var SBZ={}

/** 赏帮赚-打开应用 开始 */
//Tool.open_app('赏帮赚')
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


SBZ.sign_up=()=>{
    // 详情页面 点击我要报名
    sleep(3000)
    text('我要报名').findOne().clickCenter()
}


SBZ.save_code=()=>{
    // 点击保存二维码
    sleep(3000)
    text('保存扫码').findOne().clickCenter()
}


// 快捷方式截图
// Tool.scrshot_img()
// 指定文件名截图
// Tool.screenshot('haha.png')


SBZ.update_img_one=()=>{
    // 上传任务验证图片-第一张位置
    sleep(3000)
    text('上传数据图').findOne().clickCenter()
    sleep(1000)
    click(130,420)
    sleep(1000)
    click(980,170)
    sleep(1000)
    click(930,2280)

}

SBZ.update_img_two=()=>{
    // 上传任务验证图片-第二张位置
    sleep(3000)
    text('上传数据图').findOne().clickCenter()
    sleep(1000)
    click(130,420)
    sleep(1000)
    click(980,170)
}


SBZ.update_img_Three=()=>{
    // 上传任务验证图片-第三张位置
    sleep(3000)
    text('上传数据图').findOne().clickCenter()
    sleep(1000)
    click(130,420)
    sleep(1000)
    click(980,170)
}


// 复制链接
SBZ.copy_link=()=>{
    sleep(3000)
    text('复制链接').findOne().clickCenter()

}
SBZ.open_link=()=>{
    // 打开链接
    sleep(3000)
    text('打开链接').findOne().clickCenter()
    sleep(6000)
}

SBZ.phone_num=()=>{
    // 输入手机号
    sleep(3000)
    text('请输入').findOne().setText('18368831329')
}


SBZ.submit_task=()=>{
    // 提交任务，等待审核
    sleep(3000)
    text('提交任务').findOne().clickCenter()
    sleep(2000)
}


// 根据id搜索任务，进入任务详情，需要信用值30积分
SBZ.id_select_task=(value)=>{

    sleep(3000)
    click(350,200)  // 点击搜索框
    
    setClip(value); // 设置剪贴版内容
    click(350,180)  // 点击粘贴
    press(350,180, 4000) // 长按输入框

    sleep(2000)
    click(225,370)  // 点击粘贴

    sleep(1000)
    click(980,187)// 点击搜索

    sleep(4000)
    click(372,336)// 点击列表进入详情

    sleep(3000)
    click(480,2250) // 点击安装应用


}

Tool.install_app('微博')




// 打开链接：默认浏览器
