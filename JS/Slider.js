//DataBase
//DataBase
let PosterData = [
    '../image/1/post.png','../image/2/post.png','../image/3/post.png',
    '../image/4/post.png','../image/5/post.png','../image/6/post.png',
    '../image/7/post.png','../image/8/post.png'
];
let BgData = [
    '../image/1/bg.png',"../image/2/bg.png","../image/3/bg.png",
    "../image/4/bg.png","../image/5/bg.png","../image/6/bg.png",
    "../image/7/bg.png","../image/8/bg.png"
];
let FrontData = [
    '../image/1/front.png','../image/2/front.png','../image/3/front.png',
    '../image/4/front.png','../image/5/front.png','../image/6/front.png',
    '../image/7/front.png','../image/8/front.png'
]
let Mp4Data = [
    '../image/1/video.mp4','../image/2/video.mp4','../image/3/video.mp4',
    '../image/4/video.mp4','../image/5/video.mp4','../image/6/video.mp4',
    '../image/7/video.mp4','../image/8/video.mp4'
]

const post = document.getElementsByClassName('post')[0];
const front = document.getElementsByClassName('front')[0];
const bg = document.getElementsByClassName('DisplayFrame')[0];
const fronts = document.getElementsByClassName('fronts')[0];
let currentpage = 1; // 定义 currentpage 变量
let prevbtn = document.getElementsByClassName('prevbtn')[0];
let nextbtn = document.getElementsByClassName('nextbtn')[0];

//自动轮播相关变量
let postersArr = document.getElementsByClassName('posters');
const video = document.getElementById('video');

// 在全局定义一个变量用于跟踪当前播放的视频索引
let currentIndex = 0;

//create 函数
function createposter(index) {
    //sector 
    let sector = document.createElement('div');
    sector.classList.add('sector');

    //poster
    let poster = document.createElement('div');
    poster.classList.add('poster');

    //img
    let img = document.createElement('img');
    img.setAttribute('src', PosterData[index]);
    img.classList.add('posters');

    poster.appendChild(img);
    sector.appendChild(poster);
    post.appendChild(sector);
}

function createfronts(index)
{
    //front
    let fronts = document.createElement('img');
    fronts.classList.add('fronts');
    fronts.setAttribute('src', FrontData[index]);
    front.appendChild(fronts);
}

function ClearBrightness()
{
    let posters = document.getElementsByClassName('posters');
    for(let i = 0; i < posters.length; i++)
    {
        posters[i].style.filter = "brightness(50%)";
    }
}
//初始化
document.addEventListener("DOMContentLoaded", function(){
    for(let i = 0; i < 4; i++){
        createposter(i);
    };
    createfronts(0);
    bg.style.background = "url('" + BgData[0] + "') no-repeat center center / cover";
    let posters = document.getElementsByClassName('posters');
    posters[0].style.filter = "brightness(100%)";
    // prevbtn.style.display = "transparent";
    prevbtn.style.opacity = "0";
    addPosterMouseEnterListeners();
});

nextbtn.addEventListener('click', function(){
    removePosterMouseEnterListeners();
    next();
});
prevbtn.addEventListener('click', function(){
    removePosterMouseEnterListeners();
    prev();
});

function next() {
    if (currentpage === 1) {
        // 如果自动轮播已经启动，则取消自动轮播
        clearInterval(posterInterval);

        while (post.firstChild) {
            post.removeChild(post.firstChild);
        }
        while (front.firstChild) {
            front.removeChild(front.firstChild);
        }

        currentpage++;
        //recreate update
        for (let i = 4; i < 8; i++) {
            createposter(i);
        }
        createfronts(4);
        //reset filter
        let posters = document.getElementsByClassName('posters');
        bg.style.background = "url(../image/5/bg.png) no-repeat center center / cover";
        posters[0].style.filter = "brightness(100%)";
        prevbtn.style.opacity = "1";
        nextbtn.style.opacity = "0";
        addPosterMouseEnterListeners();

        // 更新 posterIndex 和显示元素
        posterIndex = 4;
        setPosterBrightness();
        setBgImage();
        setVideo();
        setFronts();

    } else {
        return 0;
    }
}

function prev() {
    if (currentpage === 2) {
        // 如果自动轮播已经启动，则取消自动轮播
        clearInterval(posterInterval);

        while (post.firstChild) {
            post.removeChild(post.firstChild);
        }
        while (front.firstChild) {
            front.removeChild(front.firstChild);
        }

        currentpage--;
        //recreate update
        for (let i = 0; i < 4; i++) {
            createposter(i);
        }
        createfronts(0);
        //reset filter
        let posters = document.getElementsByClassName('posters');
        bg.style.background = "url(../image/1/bg.png) no-repeat center center / cover";
        posters[0].style.filter = "brightness(100%)";
        prevbtn.style.opacity = "0";
        nextbtn.style.opacity = "1";
        addPosterMouseEnterListeners();

        // 更新 posterIndex 和显示元素
        posterIndex = 0;
        setPosterBrightness();
        setBgImage();
        setVideo();
        setFronts();
    } else {
        return 0;
    }
}



let selectedPoster = null;
let timer = null;

function removePosterMouseEnterListeners() {
    const posters = document.querySelectorAll(".posters");
    posters.forEach(poster => {
        poster.removeEventListener("mouseenter", handlePosterMouseEnter,handlePosterMouseLeave);
    });
}
function handlePosterMouseEnter(event) {
    //updating
    ClearBrightness();
    const poster = event.target; // 获取触发事件的海报元素
    poster.style.filter = "brightness(100%)";
    let bgsrc = poster.getAttribute("src").substring(0,11) + "bg.png";
    let frontsrc = poster.getAttribute("src").substring(0,11) + "front.png";
    let videosrc = poster.getAttribute("src").substring(0,11) + "video.mp4";
    const fronts = document.getElementsByClassName('fronts')[0];

    bg.style.background = "url('" + bgsrc + "') no-repeat center center / cover";
    fronts.setAttribute('src',frontsrc);

    // 设置被选中的海报并启动计时器
    selectedPoster = poster;
    timer = setTimeout(function() {
        playVideo(videosrc);
    }, 1500);
}

function addPosterMouseEnterListeners(){
    // 选择所有具有 "posters" 类的元素
    const posters = document.querySelectorAll(".posters");

    // 遍历所有选择的元素，并为每个元素添加事件监听器
    posters.forEach((poster) => {
        poster.addEventListener("mouseenter", handlePosterMouseEnter);
        poster.addEventListener("mouseleave", handlePosterMouseLeave);
    });
}

function playVideo(src) {
    video.setAttribute('src', src);
    video.setAttribute('muted', true); // 静音播放
    video.style.display = 'block';
    video.play();
}

function handlePosterMouseLeave() {
    // 当鼠标移出海报元素时，清除计时器
    clearTimeout(timer);
    let video = document.getElementById('video');
    video.style.display = "none";
}

// 初始化变量
let posterIndex = 0;
let posterInterval;
let bgInterval;
let videoInterval;

// 设置poster的亮度
function setPosterBrightness() {
    const posters = document.querySelectorAll('.poster');
    posters.forEach((poster, index) => {
        if (index === posterIndex) {
            poster.style.filter = 'brightness(100%)';
        } else {
            poster.style.filter = 'brightness(50%)';
        }
    });
}


// 设置DisplayFrame的背景图片
function setBgImage() {
    const bgImage = BgData[posterIndex];
    document.querySelector('.DisplayFrame').style.backgroundImage = `url(${bgImage})`;
}

// 设置视频播放
function setVideo() {
    const videoSrc = Mp4Data[posterIndex];
    const video = document.getElementById('video');
    video.setAttribute('src', videoSrc);
    video.setAttribute('muted', true);
    video.style.display = 'block';
    video.play();
}
function setFronts(){
    const fronts = document.getElementsByClassName('fronts')[0];
    fronts.setAttribute('src', FrontData[posterIndex]);
}

// 切换poster
function switchPoster() {
    posterIndex = (posterIndex + 1) % 4;
    setPosterBrightness();
    setBgImage();
    setVideo();
    setFronts();
}

let DisplayFrame = document.getElementsByClassName('DisplayFrame')[0];
DisplayFrame.addEventListener('click', function(event) {
    if (event.target === DisplayFrame) { // 检查点击的目标是否是 DisplayFrame 本身
        event.stopPropagation();
        // 根据 currentpage 设置 posterIndex 的初始值
        if (currentpage === 1) {
            posterIndex = 0;
        } else if (currentpage === 2) {
            posterIndex = 4;
        }
        posterInterval = setInterval(switchPoster, 10000);
        setPosterBrightness();
        setBgImage();
        setVideo();
        setFronts();
    }
});




