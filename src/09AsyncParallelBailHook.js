const {AsyncParallelBailHook} = require('tapable')


const a = new AsyncParallelBailHook(['name'])
const start = Date.now()
a.tapAsync('11', (name, callback) => {
    console.log(1111, name)
    setTimeout(() => {
        console.log(2222, Date.now() - start)
        callback(null, 'aaaa') // callback抛出错误后，后续的callback就不再执行
    }, 1000)
})
a.tapAsync('11', (name, callback) => {
    console.log(3333, name)
    setTimeout(() => {
        console.log(4444, Date.now() - start)
        callback(null, 'bbbb')
    }, 2000)
})
a.tapPromise('11', (name) => {
    console.log(5555, name)
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(6666, Date.now() - start)
            resolve('cccc')
        }, 3000)
    })
})

a.callAsync('tom', (err, data) => {
    console.log('err', err)
    console.log('data', data)
})