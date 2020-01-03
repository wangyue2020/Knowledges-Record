// 函数节流: 指定时间间隔内只会执行一次任务(滚动条、点击提交)
// 上厕所，不是喝一口水就立刻上厕所，每过一段时间才会去上厕所
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
// 这件事儿需要等待，如果你反复催促，我就重新计时(输入框)
// 坐公交车，最后一个人上车，司机才会发车
