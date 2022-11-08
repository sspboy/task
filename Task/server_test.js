var task = {};

var android_id= device.getAndroidId(); // 当前设备id

var task_get_api = ''   // 请求任务接口地址

while(true){

    task.result = ''; // 请求任务接口-获取任务;

    if(task == true){

        var thread = threads.start(function(){

            var js_url = 'http://douxiaoer-test.oss-cn-hangzhou.aliyuncs.com/script_file/demo.js'

            var res = http.get(js_url);

            console.log(res.body.string());             // 获取文件内容

            // 写入本地文件

            // 引入本地模块

            // 执行模块   +  存储回调结果

            log("子线程-执行任务");

            sleep(2000)

        })

        //等待该线程完成
        thread.join();

        //停止线程执行
        thread.interrupt();

        console.log("完成");

    }else{

        sleep(50000)
        
        log("暂无任务");

    }
}


