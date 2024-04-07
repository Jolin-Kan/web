let BoxbData = [
    {UserName:"勾勒",opinion:"陈晓的演技一直都很在线，长得也帅 谁能拒绝陈晓的魅力呀！迷死我了"
    ,situation:"累计观看少于1小时"},
    {UserName:"无敌又俊朗",opinion:"全员演技都特别好，流畅自然，全是实力派。剧情进展迅速不拖沓，难得的好剧。"
    ,situation:"累计观看超过3小时"},
    {UserName:"David",opinion:"节奏很快，有冲突有矛盾但很搞笑的一部轻松生活剧。陈晓演技更好了又帅又会演，"
    ,situation:"累计观看超过2小时"},
    {UserName:"栗子吖",opinion:"剧情贴近生活，节奏快，有笑点有泪点，陈晓演技很好"
    ,situation:"累计观看少于1小时"},
    {UserName:"心语心愿",opinion:"这剧节奏紧凑，演员颜值演技在线，值得看的好剧，强烈推荐！"
    ,situation:"累计观看少于1小时"},
    {UserName:"y( ˙ᴗ. )耶~",opinion:"节奏轻快，第一集一上来就开房了，朱劲草还挺好的，情商高，懂得疼老婆，好...",
    situation:"累计观看少于1小时"},
    {UserName:"寿司北鼻",opinion:"非常好看！必需要追陈晓的小日子。",situation:"累计观看超过1小时"},
    {UserName:"Bella 💗",opinion:"转评：剧看的好难过！整个剧情里，两个家庭里，就朱劲草人品好 有素质，在混..."
    ,situation:"累计观看超过20小时"}
];
let rate = 8.6;
let viewernum = 34.7;
let levels = ["强烈推荐", "力荐", "推荐", "一般推荐", "不推荐"];
let progressPercentages = [62.86753, 13.72755, 14.817362, 5.551223, 3.036338];

//计算boxindex
const calculateBoxIndexmin = (currentPage) => currentPage * 3 - 4;
const calculateBoxIndexmax = (currentpage) => currentpage * 3 - 2;


//窗口准备就绪时加载box
window.onload = function() {
    regenerate(boxindex, currentpage);
    UpdatePic();
};

let index1 = document.getElementById("index1");
let currentpage = 1;
index1.innerText = currentpage;

const BoxContainer = document.getElementsByClassName('box-container')[0];
var boxindex = 0;

let prevbtn = document.getElementsByClassName("switcherLeft")[0];
let nextbtn = document.getElementsByClassName("switcherRight")[0];

prevbtn.addEventListener('click', function() {
    previous();
});

nextbtn.addEventListener('click', function() {
    next();
});

function previous() {
    if(currentpage == 1)
    {
        return 0;
    }
    else{
        while (BoxContainer.firstChild) 
        {
            BoxContainer.removeChild(BoxContainer.firstChild);
        };
        currentpage--;
        regenerate(); 
    }
    
}
function next() {
    if(currentpage == 3){
        return 0;
    }
    else{
        while (BoxContainer.firstChild) {
            BoxContainer.removeChild(BoxContainer.firstChild);
        };
        currentpage++;
        regenerate();
    }
    
}

//遍历 创建box，根据boxindex的变化更改Value
function generateTypeB(boxindex) {
    // 创建 typeB div
    let typeBElement = document.createElement("div");
    typeBElement.classList.add("typeB");

    // 创建 bar1 div
    var bar1 = document.createElement("div");
    bar1.classList.add("bar1");

    // 创建 user-info div
    var userInfo = document.createElement("div");
    userInfo.classList.add("user-info");

    // 创建 userpic div
    var userPic = document.createElement("img");
    userPic.classList.add("userpic");
    userPic.setAttribute('src','../image/user.png');

    // 创建 username div
    var username = document.createElement("div");
    username.classList.add("username");
    username.innerText = BoxbData[boxindex].UserName;

    // 将 userpic 和 username 添加到 user-info div 中
    userInfo.appendChild(userPic);
    userInfo.appendChild(username);

    // 创建 userrate div
    var userRate = document.createElement("div");
    userRate.classList.add("userrate");

    // 创建 star span
    var star = document.createElement("span");
    star.classList.add("star");
    star.classList.add('iconfont','icon-icon_review_star');
    star.setAttribute('style','font-size: 18px;');

    // 创建 ratelevel div
    var rateLevel = document.createElement("div");
    rateLevel.classList.add("ratelevel");

    // 将 star 和 ratelevel 添加到 userrate div 中
    userRate.appendChild(star);
    userRate.appendChild(rateLevel);

    // 将 user-info 和 userrate 添加到 bar1 div 中
    bar1.appendChild(userInfo);
    bar1.appendChild(userRate);

    // 创建 maincontent div
    var mainContent = document.createElement("div");
    mainContent.classList.add("maincontent");
    mainContent.innerText = BoxbData[boxindex].opinion;

    // 创建 watchinfo div
    var watchInfo = document.createElement("div");
    watchInfo.classList.add("watchinfo");
    watchInfo.innerText = BoxbData[boxindex].situation;

    // 将 bar1、maincontent 和 watchinfo 添加到 typeB div 中
    typeBElement.appendChild(bar1);
    typeBElement.appendChild(mainContent);
    typeBElement.appendChild(watchInfo);

    //整体添加到 box-container
    BoxContainer.appendChild(typeBElement);
}


function generateTypeA(rate, viewernum, levels, progressPercentages) 
{
    // 创建typeA元素
    var typeAElement = document.createElement("div");
    typeAElement.classList.add("typeA");
  
    // 创建左侧部分
    var leftPart = document.createElement("div");
    leftPart.classList.add("leftpart");
  
    var tencentRate = document.createElement("div");
    tencentRate.classList.add("tencent-rate");
    tencentRate.textContent = "腾讯视频评分";
    leftPart.appendChild(tencentRate);
  
    var pointContainer = document.createElement("div");
    pointContainer.classList.add("pointcontainer");
  
    var iconLeft = document.createElement("span");
    iconLeft.classList.add("iconfont", "icon-maisuizuo");
    pointContainer.appendChild(iconLeft);
  
    var point = document.createElement("div");
    point.classList.add("point");
    point.textContent = rate;
    pointContainer.appendChild(point);
  
    var iconRight = document.createElement("span");
    iconRight.classList.add("iconfont", "icon-maisuiyou");
    pointContainer.appendChild(iconRight);
  
    leftPart.appendChild(pointContainer);
  
    var viewerNum = document.createElement("div");
    viewerNum.classList.add("viewernum");
    viewerNum.textContent = viewernum + "万人点评";
    leftPart.appendChild(viewerNum);
  
    // 创建中间部分
    var middlePart = document.createElement("div");
    middlePart.classList.add("middlepart");
  
    var levelContainer = document.createElement("div");
    levelContainer.classList.add("levelcontainer");
  
    levels.forEach(function(level) {
      var levelDiv = document.createElement("div");
      levelDiv.classList.add("level");
      levelDiv.textContent = level;
      levelContainer.appendChild(levelDiv);
    });
  
    middlePart.appendChild(levelContainer);
  
    // 创建右侧部分
    var rightPart = document.createElement("div");
    rightPart.classList.add("rightpart");
  
    progressPercentages.forEach(function(percentage) {
      var progressBar = document.createElement("div");
      progressBar.classList.add("progress-bar");
  
      var progress = document.createElement("div");
      progress.classList.add("progress");
      progress.style.width = percentage + "%";
  
      progressBar.appendChild(progress);
      rightPart.appendChild(progressBar);
    });
  
    // 将左侧、中间和右侧部分添加到typeA元素
    typeAElement.appendChild(leftPart);
    typeAElement.appendChild(middlePart);
    typeAElement.appendChild(rightPart);

    //final
    BoxContainer.appendChild(typeAElement);
}

function regenerate() {
    if (currentpage === 1) {
        generateTypeA(rate, viewernum, levels, progressPercentages);
        generateTypeB(boxindex);
        generateTypeB(boxindex + 1);
        index1.innerText = currentpage;
    } else if (currentpage > 1 && currentpage < 4) {
        let min = calculateBoxIndexmin(currentpage);
        let max = calculateBoxIndexmax(currentpage);
        for (let i = min; i <= max; i++) {
            generateTypeB(i);
        }
        index1.innerText = currentpage;
    } else {
        return 0;
    }
}

let index2 = document.getElementById("index2");
let actorpage = 1;
index2.innerText = actorpage;

let controllerLeft = document.getElementsByClassName("controllerLeft")[0];
let controllerRight = document.getElementsByClassName("controllerRight")[0];

controllerLeft.addEventListener('click',function(){
    prevpic();
})

controllerRight.addEventListener('click',function(){
    nextpic();
});


let actorpic = [
    "../image/actor/1.png", "../image/actor/2.png", "../image/actor/3.png",
    "../image/actor/4.png", "../image/actor/5.png", "../image/actor/6.png",
    "../image/actor/7.png"
];
let ActorContainer = document.getElementsByClassName('ActorContainer')[0];

function CreatePic(index)
{
    let pic = document.createElement('img');
    pic.classList.add('actorpic');
    pic.setAttribute('src',actorpic[index]);

    ActorContainer.appendChild(pic);
}

function UpdatePic()
{
    if(actorpage === 1)
    {
        for(let i = 0;i < 4;i++)
        {
            CreatePic(i);
        }
    }
    else if(actorpage === 2)
    {
        for(let i = 4;i < 7;i++)
        {
            CreatePic(i);
        }
    }
    else{
        return 0;
    }
}
function nextpic()
{
    
    if(actorpage > 1)
    {
        return 0;
    }
    if(actorpage === 1)
    {
        while (ActorContainer.firstChild) 
        {
            ActorContainer.removeChild(ActorContainer.firstChild);
        };
        actorpage++;
        index2.innerText = actorpage;
        UpdatePic();
    }
}
function prevpic()
{
    if(actorpage < 1)
    {
        return 0;
    }
    if(actorpage === 2)
    {
        while (ActorContainer.firstChild) 
        {
            ActorContainer.removeChild(ActorContainer.firstChild);
        };
        actorpage--;
        index2.innerText = actorpage;
        UpdatePic();
    }
}

//show detail
let show = document.getElementById('showrule');
let rules = document.getElementsByClassName('slider')[0];
let closeBtn = document.getElementsByClassName('headtitle')[0];
let showbtn = document.getElementsByClassName('showbtn')[0]; 

show.addEventListener('click', function (event) {
    event.stopPropagation();
    rules.style.transform = 'translateX(-27px)';
});

closeBtn.addEventListener('click', function (event) {
    event.stopPropagation();
    rules.style.transform = 'translateX(460px)';
    setTimeout(function() {
        squares.forEach(square => {
            square.style.opacity = '1';
        });
    }, 50);
    console.log(1);
});

showbtn.addEventListener('click', function(event) {
    event.stopPropagation();
    setTimeout(function() {
        squares.forEach(square => {
            square.style.opacity = '0';
        });
    }, 450);
});



const squares = document.querySelectorAll('.square');

squares.forEach(square => {
  square.addEventListener('mouseenter', () => {
    const summary = square.getAttribute('data-summary');
    const summaryElement = document.createElement('div');
    summaryElement.classList.add('summary');
    summaryElement.textContent = summary;
    square.appendChild(summaryElement);
    summaryElement.style.display = 'block';
  });

  square.addEventListener('mouseleave', () => {
    const summaryElement = square.querySelector('.summary');
    if (summaryElement) {
      square.removeChild(summaryElement);
    }
  });
});

//player
let mute = document.getElementsByClassName('mute')[0];

mute.addEventListener('click', function () {
    if(mute.classList.contains('icon-shengyinjingyin')) {
        mute.classList.remove('icon-shengyinjingyin');
        mute.classList.add('icon-shengyin');
    } else if (mute.classList.contains('icon-shengyin')) {
        mute.classList.remove('icon-shengyin');
        mute.classList.add('icon-shengyinjingyin');
    }
});

let danmu = document.getElementsByClassName('danmu')[0];

danmu.addEventListener('click', function () {
    if(danmu.classList.contains('icon-icon_danmukaiguan_guan'))
    {
        danmu.classList.remove('icon-icon_danmukaiguan_guan');
        danmu.classList.add('icon-icon_danmukaiguan_kai');
    }
    else if (danmu.classList.contains('icon-icon_danmukaiguan_kai'))
    {
        danmu.classList.remove('icon-icon_danmukaiguan_kai');
        danmu.classList.add('icon-icon_danmukaiguan_guan');
    }
});