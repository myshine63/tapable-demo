/**
 * 如果函数有返回值，并且不为undefined。则中断执行，并从头开始重新执行。
 */

const {SyncLoopHook} = require("tapable");

const a = new SyncLoopHook(['name'])
a.tap('mor', (name) => {
    console.log('good morning ', name)
})
a.tap('mor', (name) => {
    console.log('good afternoon ', name)
})
a.tap('mor', (name) => {
    console.log('good evening ', name)
})

a.call('tom')