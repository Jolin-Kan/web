let page = document.getElementsByClassName('login-page')[0];
let iconYonghu = document.querySelector('.usertag');
let islogin = false;

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
document.addEventListener('click', function(event){
    OpenLoginPage(event);
});

function ExitLoginPage(){
    page.style.display="none";
    document.getElementById("username").value = '';
    document.getElementById("password").value = '';
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

//接口部分

document.getElementsByClassName("qqlogin-btn")[0].addEventListener("click", function(event) {
    event.preventDefault(); // 阻止按钮默认行为
    if(tick1.style.backgroundColor === "rgb(48, 129, 235)" && tick2.style.backgroundColor === "rgb(48, 129, 235)")
    {
            // 获取用户名和密码
        var username = encodeURIComponent(document.getElementById("username").value);
        var password = encodeURIComponent(document.getElementById("password").value);

        // 创建一个 XMLHttpRequest 对象
        var xhr = new XMLHttpRequest();

        // 定义处理响应的回调函数
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    var response = JSON.parse(xhr.responseText);
                    if (response.code === 200) {
                        // 登录成功
                        islogin = true;
                        document.getElementById("username").value = '';
                        document.getElementById("password").value = '';
                        alert("Login successful");
                        loginchange();//登录后用户icon变化函数
                        ExitLoginPage();
                    } else {
                        // 登录失败
                        islogin = false;
                        alert("Login failed. Please check your username and password.");
                    }
                } else {
                    // 请求失败
                    alert("Failed to login. Please try again later.");
                }
            }
        };

        // 设置请求方法和URL
        xhr.open('GET', "https://blog.zifeiyu.love/user/login?username=" + username + "&password=" + password, true);

        // 发送请求
        xhr.send();
    }
    else{
        if (window.Notification && Notification.permission === "granted") {
            var n = new Notification("Please agree to the agreement");
          }
    }
});

//登录后用户icon变化
//取消hover时间，移除icon-yonghu
//添加目标结构
function loginchange() {
    if (islogin) {
        iconYonghu.classList.add('logined');
        iconYonghu.classList.remove('hovertag');
        iconYonghu.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.href="../HTML/UserPage.html";
        })
    }
}

window.addEventListener("load", function() {
    // 首先，让我们检查我们是否有权限发出通知
    // 如果没有，我们就请求获得权限
    if (window.Notification && Notification.permission !== "granted") {
      Notification.requestPermission(function(status) {
        if (Notification.permission !== status) {
          Notification.permission = status;
        }
      });
  }
});
