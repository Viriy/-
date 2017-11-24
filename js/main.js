mui.init();
//主界面和侧滑菜单界面均支持区域滚动；
mui('#offCanvasSideScroll').scroll();
mui('#offCanvasContentScroll').scroll();
mui('.mui-scroll-wrapper').scroll();
//实现ios平台原生侧滑关闭页面；
if (mui.os.plus && mui.os.ios) {
    mui.plusReady(function() { //5+ iOS暂时无法屏蔽popGesture时传递touch事件
        plus.webview.currentWebview().setStyle({
            'popGesture': 'none'
        });
    });
}

mui('.list_wrap,.l_nav,.menu_wrap').on('tap','a',function(){
    window.top.location.href=this.href;
});

//上传图片
function imgChange(obj1, obj2) {
    //获取点击的文本框
    var file = document.getElementById("file1");
    //存放图片的父级元素
    var imgContainer = document.getElementsByClassName(obj1)[0];
    //获取的图片文件
    var fileList = file.files;
    //文本框的父级元素
    var input = document.getElementsByClassName(obj2)[0];
    var imgArr = [];
    //遍历获取到得图片文件
    for (var i = 0; i < fileList.length; i++) {
        var imgUrl = window.URL.createObjectURL(file.files[i]);
        imgArr.push(imgUrl);
        var img = document.createElement("img");
        img.setAttribute("src", imgArr[i]);
        var imgAdd = document.createElement("div");
        imgAdd.setAttribute("class", "z_addImg");
        imgAdd.appendChild(img);
        imgContainer.appendChild(imgAdd);
    };
    imgRemove();
};

function imgRemove() {
    var imgList = document.getElementsByClassName("z_addImg");
    for (var j = 0; j < imgList.length; j++) {
        imgList[j].index = j;
        imgList[j].onclick = function() {
            var t = this;
            t.style.display = "none";
        }
    };
};

//侧滑容器父节点
var offCanvasWrapper = mui('.mui-off-canvas-wrap');
$(".offCanvasHide").on('tap', function() {
    offCanvasWrapper.offCanvas('close');
});