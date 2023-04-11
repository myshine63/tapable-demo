const {AsyncSeriesHook} = require('tapable')


const a = new AsyncSeriesHook(['name'])
const start = Date.now()
a.tapAsync('11', (name, callback) => {
    console.log(1111)
    setTimeout(() => {
        console.log(2222, Date.now() - start)
        /**
         * callback表示函数异步操作执行完毕，接着执行下一个注册的方法
         * 如果未调用callback，则会中断操作
         * callback接受一个参数，如果参数的值是非undefined,null,则停止后续方法执行。直接调用callback
         * callback会等到所有注册的方法都执行完毕后才会调用。而且只会调用一次
         */
        callback()
    }, 1000)
})
a.tapAsync('11', (name, callback) => {
    console.log(3333)
    setTimeout(() => {
        console.log(4444, Date.now() - start)
        callback()
    }, 1000)
})
a.tapPromise('11', (name) => {
    console.log(5555)
    // 必须要返回一个promise
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(6666, Date.now() - start)
            resolve()
        }, 1000)
    })
})
// AsyncSeriesHook的callback只有一个参数，err表示错误
a.callAsync('tom', (err) => {
    console.log(err)
})