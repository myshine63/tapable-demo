/**
 * 当某个函数存在返回值，并且返回值不是undefined时，会中断执行
 */
const {SyncBailHook} = require("tapable");

const a = new SyncBailHook(['name'])
a.tap('greet', (name) => {
    console.log('good morning ', name)

})
a.tap('greet', (name) => {
    console.log('good afternoon ', name)
    return 'jerry' // 中断后续方法执行
})
a.tap('greet', (name) => {
    console.log('good evening ', name)
})

a.call('tom')