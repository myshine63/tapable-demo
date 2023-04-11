/**
 * 上一个函数的返回值，会传递给下一个函数
 * 如果没有返回值，则延用上一个函数的参数值
 */

const {SyncWaterfallHook} = require("tapable");

const a = new SyncWaterfallHook(['age', 'name'])
a.tap('age', (age, name) => {
    console.log('good morning ', name, age)
    return age + 10
})
a.tap('age', (age, name) => {
    console.log('good afternoon ', name, age)
    return age + 10
})
a.tap('age', (age, name) => {
    console.log('good evening ', name, age)
    return age + 10
})

a.call(10, 'tom')