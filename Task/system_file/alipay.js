/** 支付宝 */
var Alipay={


    // 支付宝扫码
    sao_ma:()=>{

        // 打开支付宝
        var name= app.getPackageName('支付宝')
        sleep(2000)
        app.launch(name)

        // 点击扫码按钮
        sleep(4000)
        click(155,310)

        // 点相册
        sleep(2000)
        click(940,1960)

        // 点第一张图片
        sleep(2000)
        click(530,460)

        // 点击确认
        sleep(2000)
        click(996,148)

        sleep(5000)

    },
    // 支付宝支付

}