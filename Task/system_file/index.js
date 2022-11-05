var index= {};

index.on_off = true;  // 服务端请求----开关值：true进入循环，false不进入循环:

index.start = ()=>{

    while(index.on_off){

        Task_obj = false;// 请求任务：数据库请求任务详情
    
        if(Task_obj == false){  // 任务为空false：等待10秒，再次请求；
            
            sleep(4000)
    
            console.log('任务未空-心跳一次')

            console.log('退出循环')

            index.on_off = false;           // 关闭开关:服务端开关状态--更新为关闭

            break
    
        }else{      // 任务不为空：执行任务
    
            // 加载js脚本
    
            // 执行脚本>回写结果到数据库
    
            sleep(5000);
    
            console.log('我在勤劳的执行任务ing....');
    
            console.log('执行任务完成ok，心跳一次');
    
        }

    }

}

module.exports = index;
