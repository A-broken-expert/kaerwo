window.onload=function(){
    //获取图片
    let bannerImg=document.querySelectorAll(".banner  img");
    //获取宽度
    let bannerImgWiths=parseInt(getComputedStyle(bannerImg[0],null).width);
    //声明当前图片
    let now=0;
    //声明下一张图片
    let next=0;
    //初始化
    bannerImg[0].style.left="0";

    //时间控制函数 轮播图自动轮播
    let t = setInterval(move,2000);
    function move(){
        next++;
        if(next==bannerImg.length){
            next=0;
        }
        console.log(next);
        console.log(now);
        bannerImg[next].style.left=`${bannerImgWiths}px`;
        animate(bannerImg[now],{left:`${-bannerImgWiths}`});
        // bannerImg[now].style.left=`${-bannerImgWiths}px`;
        animate(bannerImg[next],{left:0});
        // bannerImg[next].style.left="0px";
        now=next
    }




    window.onresize=function(){
        bannerImgWiths=innerWidth-17;
        console.log(bannerImgWiths);
    };
    console.log(bannerImgWiths);
};