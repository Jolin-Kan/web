let usertag = document.querySelector('.usertag');
function CreateUserIcon(){
    let usertag = document.querySelector('.usertag');
    // 创建外层容器元素
    var tool6Container = document.createElement('div');
    tool6Container.classList.add('tool6');

    // 创建标题元素
    var title = document.createElement('div');
    title.classList.add('title');
    title.textContent = '登陆之后可以';
    tool6Container.appendChild(title);

    // 创建包含多个功能的容器元素
    var outpack = document.createElement('div');
    outpack.classList.add('outpack');

    // 创建每个功能的容器元素
    var features = [
    { icon: 'icon-yunduanjilu svg', text: '多端同步观看记录' },
    { icon: 'icon-taolunqu svg', text: '参与互动讨论' },
    { icon: 'icon-huohua svg', text: '观看更个性化内容' },
    { icon: 'icon-yxzt_wxxyx svg', text: '领取专属游戏礼包' }
    ];

    features.forEach(function(feature) {
        // pack
        var pack = document.createElement('div');
        pack.classList.add('pack');
        //icon
        var icon = document.createElement('span');
        icon.classList.add('iconfont', feature.icon);
        pack.appendChild(icon);
        //text
        var exp = document.createElement('div');
        exp.classList.add('exp');
        exp.textContent = feature.text;
        pack.appendChild(exp);

        outpack.appendChild(pack);
    });

    tool6Container.appendChild(outpack);

    // 创建登录按钮元素
    var loginBtn = document.createElement('div');
    loginBtn.classList.add('login-btn');
    loginBtn.textContent = '立即登陆';
    tool6Container.appendChild(loginBtn);

    //加入到最後一個容器中
    usertag.appendChild(tool6Container);
}


window.onload = function() {
    CreateUserIcon();
}
