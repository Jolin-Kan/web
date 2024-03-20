let LeftNav = document.getElementsByClassName("LeftNav");

let iconName = ["iconfont icon-shoucang","iconfont icon-shipin","iconfont icon-dianshiju",
    "iconfont icon-dianying","iconfont icon-zongyi","iconfont icon-dongman","iconfont icon-shaoer",
    "iconfont icon-airudiantubiaohuizhi-zhuanqu_tiyushijie","iconfont icon-dianshiji-","iconfont icon-dianshiju",
    "iconfont icon-lishijilu_o"];

let innerText = ["首页","中视频","电视剧","电影","综艺","动漫","少儿","体育","纪录片","短剧","NBA"];

let num = 11;
for(let i = 0;i < num;i++)
{
    let container = document.createElement("div");
    container.className = "session";

    let icon = document.createElement("span");
    icon.className = iconName[i];

    let text = document.createElement("p");
    text.innerText = innerText[i];
    text.style.color ="rgba(255, 255, 255, 0.6)";
    text.className="NavText";

    container.appendChild(icon);
    container.appendChild(text);
    LeftNav[0].appendChild(container);
}

