const pageData = [
    [{src:'../video/1.mp4', title:'与风行🔥赵丽颖林更新',detail:'爱惨！女主保护脆皮娇夫'}
     ,{src:'../image/list/2.png',title:'欢乐颂5',detail:'江疏影王彩钰无美复仇反击'}
     ,{src:'../image/list/3.png',title:'缉恶',detail:'谢苗和安信杰谁更能打？'}
     ,{src:'../image/list/4.png',title:'平衡大作战',detail:'和平衡团一起旅游'}
     ,{src:'../image/list/5.png',title:'废品飞车',detail:'乡村版“速度与激情”'}
     ,{src:'../image/list/6.png',title:'半熟恋人🩶拉扯封神！',detail:'女老板紧抓恋综王鹤棣手臂'}],
     [{src:'../image/list/7.png',title:'狂王',detail:'命运由我主宰，无惧血战成王！'}
     ,{src:'../image/list/8.png',title:'小日子',detail:'陈晓童瑶首搭守护小日子'}
     ,{src:'../image/list/9.png',title:'嘉人自友约',detail:'刘嘉玲和好友体验生活'}
     ,{src:'../image/list/10.png',title:'哈哈哈哈 第四季',detail:'邓超陈赫鹿晗合体旅行'}
     ,{src:'../image/list/11.png',title:'潜行',detail:'刘德华彭于晏硬核警匪对决'}
     ,{src:'../image/list/12.png',title:'临时劫案',detail:'郭富城林家栋任贤齐组团打劫'}]
 
];

let currentPageIndex = 0;

// 获取容器
const container = document.getElementsByClassName('image-container')[0];

// 更新页面
function updatePage() {
    container.innerHTML = ''; // 清空容器

    // 获取当前页数据
    const currentPageData = pageData[currentPageIndex];

    // 创建并添加图片元素和描述元素
    for (let i = 0; i < currentPageData.length; i++) {
        const item = currentPageData[i];

        // 判断是否是视频还是图片
        if (item.src.endsWith('.mp4')) {
            // 如果是视频，创建视频元素
            const videoElement = document.createElement('video');
            videoElement.classList.add('image');
            videoElement.classList.add('recommendation')
            videoElement.src = item.src;
            videoElement.setAttribute('autoplay', true);
            videoElement.setAttribute('loop', true);
            videoElement.setAttribute('muted', true); // 自动播放需要静音

            //链接跳转至视频详情页
            const a = document.createElement('a');
            a.setAttribute('href', './VideoDetail.html');
            a.setAttribute('style', 'position: absolute;top: 0;left: 0;width: 300px;height: 100px;z-index: 10;');


            // 创建标题和详情元素
            const titleElement = document.createElement('div');
            titleElement.classList.add('title');
            titleElement.textContent = item.title;

            const detailElement = document.createElement('div');
            detailElement.classList.add('detail');
            detailElement.textContent = item.detail;

            // 创建描述元素，并添加标题和详情元素
            const descriptionElement = document.createElement('div');
            descriptionElement.classList.add('description');
            descriptionElement.setAttribute('style',' position: relative;');
            descriptionElement.appendChild(titleElement);
            descriptionElement.appendChild(detailElement);

            // 创建视频和描述的容器
            const wrapper = document.createElement('div');
            wrapper.classList.add('image-wrapper');
            wrapper.appendChild(videoElement);
            descriptionElement.appendChild(a);
            wrapper.appendChild(descriptionElement);
            
            // 将容器添加到图片容器中
            container.appendChild(wrapper);
        } else {
            // 如果是图片，创建图片元素
            const imageElement = document.createElement('img');
            imageElement.classList.add('image');
            imageElement.src = item.src;

            //链接跳转至视频详情页
            const a = document.createElement('a');
            a.setAttribute('href', './VideoDetail.html');
            a.setAttribute('style', 'position: absolute;top: 0;left: 0;width: 300px;height: 100px;z-index: 10;');

            // 创建标题和详情元素
            const titleElement = document.createElement('div');
            titleElement.classList.add('title');
            titleElement.textContent = item.title;

            const detailElement = document.createElement('div');
            detailElement.classList.add('detail');
            detailElement.textContent = item.detail;

            // 创建描述元素，并添加标题和详情元素
            const descriptionElement = document.createElement('div');
            descriptionElement.classList.add('description');
            descriptionElement.setAttribute('style',' position: relative;');
            descriptionElement.appendChild(titleElement);
            descriptionElement.appendChild(detailElement);

            // 创建图片和描述的容器
            const wrapper = document.createElement('div');
            wrapper.classList.add('image-wrapper');
            wrapper.appendChild(imageElement);
            descriptionElement.appendChild(a);
            wrapper.appendChild(descriptionElement);
            
            // 将容器添加到图片容器中
            container.appendChild(wrapper);
        }
    }
}



// 切换页面按钮点击事件处理函数
function togglePage() {
    currentPageIndex = (currentPageIndex === 0) ? 1 : 0; // 切换到另一页
    updatePage();
}

let recovideo = document.getElementsByTagName('video')[0];
// 等待窗口加载完成后执行
window.onload = function() {
    updatePage();
    // recovideo.play();
};



