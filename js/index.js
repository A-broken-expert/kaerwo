function move(top,xiang,card,err){
            top.onclick=function(){
                animate(document.body,{scrollTop:0},600);
                animate(document.documentElement,{scrollTop: 0},600);
            };
            xiang.onclick=function () {
                animate(card,{bottom:50})
            };
            err.onclick=function(){
                animate(card,{bottom:`-260`})
            };
}
