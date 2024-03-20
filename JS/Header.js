// 获取 header 元素
const header = document.getElementsByClassName('Header')[0];

// 定义要触发事件的滚动位置
const scrollPosition = 628; // 当滚动距离超过600像素时触发事件

// 监听滚动事件
window.addEventListener('scroll', function() {
    // 获取滚动距离
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // 检查滚动距离是否达到了触发事件的位置
    if (scrollTop >= scrollPosition) {
        header.classList.remove('hide');
    } else {
        header.classList.add('hide');
    }
});
