// 函数节流: 指定时间间隔内只会执行一次任务
// 应用场景：监听滚动事件
function throttle(fn) {
    let flag = true;
    return function() {
        if (!flag) {
            return;
        }
        flag = false;
        setTimeout(() => {
            fn.apply(this, arguments);
            flag = true;
        }, 2000);
    };
}

// 函数防抖: 任务频繁触发的情况下，只有触发的间隔超过指定时间，任务才会执行
// 这件事儿需要等待，如果你反复催促，我就重新计时
// 应用场景：防止按钮多次点击
function debounce(fn) {
    let timer = null;
    return function() {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, arguments);
        }, 2000);
    };
}
