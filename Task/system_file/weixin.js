/** 微信 */

var Wechart = {

    // 微信扫码
    sao_ma:()=>{
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

    },

    // 微信输入支付密码
    pay_pass_word:()=>{

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

}