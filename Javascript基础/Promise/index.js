// 概念：Promise是JS中进行异步编程的新的解决方案。
// 从语法上说，Promise是一个构造函数；从功能来说，Promise对象用来封装一个异步操作并获取其结果。

// Promise状态改变两种：pending变为resovled、pending变为rejected。状态改变只发生一次。

// 为什么要用Promise？
// 1.指定回调函数会更加灵活：旧的纯回调必须在启动异步任务之前指定。
// 2.支持链式调用，解决回调地狱的问题，便于阅读和异常处理。

// 自定义Promise函数模块：IIFE
(function(window){

    const PENDING = 'pending'
    const RESOLVED = 'resolved'
    const REJECTED = 'rejected'

    // Promise构造函数 executor:执行器函数（同步）
    function Promise(executor){
        const _this = this
        _this.status = PENDING
        _this.data = undefined
        _this.callbacks = []

        function resolve(value){
            if(_this.status !== PENDING){
                return
            }
            _this.status = RESOLVED
            _this.data = value
            // 如果有待执行callback函数，立即异步执行回调函数
            if(_this.callbacks.length  > 0){
                setTimeout(()=>{
                    _this.callbacks.forEach(callbackObj =>{
                        callbackObj.onResolved(value)
                    })
                })  
            }
        }
        function reject(reason){
            if(_this.status !== PENDING){
                return
            }
            _this.status = REJECTED
            _this.data = reason
            if(_this.callbacks.length > 0){
                setTimeout(()=>{
                    _this.callbacks.forEach(callbackObj=>{
                        callbackObj.onRejected(reason)
                    })
                })
            }
        }

        try{
            executor(resolve,reject)
        } catch(error){
            reject(error)
        }
    }
        

    // Promise原型对象then() 指定成功和失败的回调函数 返回新的Promise对象
    Promise.prototype.then = function(onResolved, onRejected){
        const _this = this
        return new Promise((resolve,reject)=>{
            if(_this.status === PENDING){
                _this.callbacks.push({
                    onResolved,
                    onRejected
                })
            }else if(_this.status === RESOLVED){
                setTimeout(()=>{
                    
                    onRejected(_this.data)
                })
            }else{
                setTimeout(()=>{
                    onRejected(_this.data)
                })
            }
        })
    }

    // Promise原型对象catch() 指定失败的回调函数 返回新的Promise对象
    Promise.prototype.catch = function(onRejected){

    }

    // Promise函数对象resolve 返回一个指定结果的成功的Promise
    Promise.resolve = function (value){

    }

    // Promise函数对象reject 返回一个指定reason的失败的Promise
    Promise.reject = function (reason){

    }

    // Promise函数对象all 返回一个promise，只有所有promise都成功时才成功，否则失败
    Promise.all = function (promises){

    }

    // Promise函数对象race 返回一个promise，其结果由第一个完成的promise决定
    Promise.race = function (promises){

    }

    // 向外暴露Promise函数
    window.Promise = Promise

})(window)

