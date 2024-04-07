let page = document.getElementsByClassName('login-page')[0];
let iconYonghu = document.querySelector('.icon-yonghu');

function disableScroll() {
    document.body.style.overflow = 'hidden';
}

// JavaScript函数以启用滚动
function enableScroll() {
    document.body.style.overflow = '';
}

function OpenLoginPage(event) {
    // 获取点击事件的目标元素
    var target = event.target;

    // 检查点击事件的目标元素是否是 .icon-yonghu 元素本身
    if (target === iconYonghu) {
        page.style.display = "flex";
        disableScroll();
    }
}

// 在整个文档上添加点击事件监听器
document.addEventListener('click', OpenLoginPage);

function ExitLoginPage(){
    page.style.display="none";
    enableScroll();
}

let tick1 = document.getElementsByClassName('tick')[0];
let tick2 = document.getElementsByClassName('tick')[1];
function change1() {
    // 获取 tick1 元素的计算后的样式
    var computedStyle = window.getComputedStyle(tick1);

    // 获取计算后的背景颜色
    var backgroundColor = computedStyle.backgroundColor;

    if (backgroundColor === "rgb(170, 170, 170)") {
        tick1.style.backgroundColor = "rgb(48, 129, 235)";
    } else {
        tick1.style.backgroundColor = "rgb(170, 170, 170)";
    }
}


function change2() {
    var computedStyle = window.getComputedStyle(tick2);
    var backgroundColor = computedStyle.backgroundColor;

    if (backgroundColor === "rgb(170, 170, 170)") {
        tick2.style.backgroundColor = "rgb(48, 129, 235)";
    } else {
        tick2.style.backgroundColor = "rgb(170, 170, 170)";
    }
}
