# tapable

### tabable事件类型

#### 同步事件类型

​	同步类型的事件只能通过tap进行注册，通过call进行调用

- SyncHook
- SyncBailHook
- SyncWaterfallHook
- SyncLoopHook

#### 异步事件类型

​		异步类型的事件，可以通过tap,tapAsync,tapPromise进行注册，同时可以通过对应的 call、callAsync、promise 三种方式来触发注册的函数。

- AsyncParallelHook
- AsyncParallelBailHook
- AsyncSeriesHook
- AsyncSeriesBailHook
- AsyncSeriesWaterfallHook

### 方法名中关键字说明

我们可以给同一个事件注册多个函数方法。在不同的关键字中，函数的执行会有所不同

- 不含有关键字

  按照方法注册顺序，依次执行方法。并且不会关心方法的返回值

- Bail: 保险类型的钩子

  如果注册的多个方法中，任意一个方法有返回值（非undefined），则中断后续方法的执行

- Loop: 循环类型事件

  如果任意一个注册方法拥有返回值（非undefined），则中断后续的方法，从第一个方法开始执行

- Waterfall: 瀑布流事件

  上一个函数的返回值，会作为下一个函数的参数

- Series: 串联

  可以被串联（连续按照顺序调用）执行的异步钩子函数

- Parallel: 并联

  并发调用执行的异步钩子函数
  
参考链接: https://juejin.cn/post/7040982789650382855


