// 函数节流:指定时间间隔内只会执行一次任务(滚动条、点击提交)
function throttle(fn) {
let flag = true
  return function () {
if ( ! flag) {
return
    }
flag = false
    setTimeout(() =>  {
fn.apply(this, arguments)
flag = true
    }, 2000)
}
}