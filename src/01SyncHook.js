/**
 * SyncHook,会依次执行注册的函数，并且会忽略掉函数的返回值
 */

const {SyncHook} = require("tapable");

const a = new SyncHook(['name', 'age']) // 数组的长度表示可以传递几个参数，元素的值没有什么意义，
a.tap('greet', (name, age) => {
    console.log('good morning ', name)
    console.log('age:', age)
})
a.tap('greet', (name) => {
    console.log('good afternoon ', name)
    return 'jerry'
})
a.tap('greet', (name) => {
    console.log('good evening ', name)
})
a.call('tom', 123)
