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

const post = document.getElementsByClassName('post')[0];
const front = document.getElementsByClassName('front')[0];
const bg = document.getElementsByClassName('DisplayFrame')[0];
const fronts = document.getElementsByClassName('fronts')[0];
let currentpage = 1;
let prevbtn = document.getElementsByClassName('prevbtn')[0];
let nextbtn = document.getElementsByClassName('nextbtn')[0];


{/* index從零開始遍歷數組 */}
function createposter(index) {
    //sector 
    let sector = document.createElement('div');
    sector.classList.add('sector');

    //poster
    let poster = document.createElement('div');
    poster.classList.add('poster');

    //img
    let img = document.createElement('img');
    img.setAttribute('src',PosterData[index]);
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
    fronts.setAttribute('src',FrontData[index]);
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
document.addEventListener("DOMContentLoaded", function(){
    for(let i = 0; i < 4; i++){
        createposter(i);
    };
    createfronts(0);
    bg.style.background = "url('" + BgData[0] + "') no-repeat center center / cover";
    let posters = document.getElementsByClassName('posters');
    posters[0].style.filter = "brightness(100%)";
    prevbtn.style.display = "none";
});

nextbtn.addEventListener('click', function(){
    next();
});


function next()
{
    if(currentpage === 1)
    {
        while (post.firstChild) 
        {
            post.removeChild(post.firstChild);
        };
        currentpage++;
        //recreate update
        for(let i = 4;i < 8;i++)
        {
            createposter(i);
        }
        createfronts(4);
        //reset bg
        bg.style.background = null;
        bg.style.background = "url('" + BgData[4] + "') no-repeat center center / cover";
        //reset fronts
        fronts.style.src = null;
        fronts.style.src = "url('" + FrontData[4] + "')";
        //reset filter
        let posters = document.getElementsByClassName('posters');
        posters[0].style.filter = "brightness(100%)";
        prevbtn.style.display = "block";
        nextbtn.style.display = "none";
        
    }
    else
    {
        return 0;
    }
}

function prev(){
    if(currentpage === 2)
    {
        while (post.firstChild) 
        {
            post.removeChild(post.firstChild);
        };
        currentpage--;
        for(let i = 0; i < 4; i++){
            createposter(i);
        };
        createfronts(0);
        bg.style.background = "url('" + BgData[0] + "') no-repeat center center / cover";
        let posters = document.getElementsByClassName('posters');
        posters[0].style.filter = "brightness(100%)";
        prevbtn.style.display = "none";
        nextbtn.style.display = "block";
    }
    else
    {
        return 0;
    }
}

    
function removePosterMouseEnterListeners() {
    const posters = document.querySelectorAll(".posters");
    posters.forEach(poster => {
        poster.removeEventListener("mouseenter", handlePosterMouseEnter);
    });
}

function addPosterMouseEnterListeners(){
    // 选择所有具有 "posters" 类的元素
    const posters = document.querySelectorAll(".posters");

    // 遍历所有选择的元素，并为每个元素添加事件监听器
    posters.forEach((poster) => {
        poster.addEventListener("mouseenter", function(event) {
            //updating
            ClearBrightness();
            poster.style.filter = "brightness(100%)";
            let bgsrc = poster.getAttribute("src").substring(0,11) + "bg.png";
            let frontsrc = poster.getAttribute("src").substring(0,11) + "front.png";
            const fronts = document.getElementsByClassName('fronts')[0];

            bg.style.background = "url('" + bgsrc + "') no-repeat center center / cover";
            fronts.setAttribute('src',frontsrc);
        });
    });
}

//绑定poster 事件
document.addEventListener("DOMContentLoaded", addPosterMouseEnterListeners);
