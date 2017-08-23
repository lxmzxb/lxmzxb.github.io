var list1s=document.querySelectorAll(".list1");
var zhezhaos=document.querySelectorAll(".list1-zhezhao");
Array.from(list1s).forEach(function (v,i) {
    v.onmouseover=function () {

        zhezhaos[i].style.opacity="0.8";
    }
    v.onmouseout=function () {
        zhezhaos[i].style.opacity="0";
    }
})

var btns=document.querySelectorAll(".banner-xia-zhezhao");
var cons=document.querySelectorAll(".rongqi li");
var container=document.querySelector(".banner-xia-top-left")
var lunbo=document.querySelector(".banner-xia-bottom");
var next=document.querySelector(".banner-xia-jiantou")
var prev=document.querySelector(".banner-xia-jiantou1")
var bofang=document.querySelectorAll(".banner-xia-left-bottom1-bofang")
next.onclick=function () {
    lunbo.style.marginLeft=-488+"px";
}
prev.onclick=function () {
    lunbo.style.marginLeft=0;
}
Array.from(btns).forEach(function (ele,index) {
    ele.onmouseover=function(){
        num=index;
        for(var i=0;i<btns.length;i++){
            btns[i].style.opacity="0";
            cons[i].style.display="none";
            bofang[i].style.animation="none";
            /*bofang[i].style.webkitTransform="scale(1)";*/
        }
        btns[index].style.opacity="1";
        cons[index].style.display="block";
        bofang[index].style.animation="fangda .3s linear forwards"
        /*bofang[index].style.webkitTransform="scale(1.1)"*/
       /* bofang[index].style.width=40+"px";
        bofang[index].style.height=32+"px";*/
    }
})
var num=0;
var t1=setInterval(move,2000);
function move() {
    num++;
    if(num==btns.length){
        num=0;
        lunbo.style.marginLeft=0;
        bofang[num].style.animation="fangda .3s linear forwards"
    }
    for(var i=0;i<btns.length;i++){
        btns[i].style.opacity="0";
        cons[i].style.display="none";
        bofang[i].style.animation="none";
       /* bofang[i].style.webkitTransform="scale(1)";*/
    }
    btns[num].style.opacity="1";
    cons[num].style.display="block";
    bofang[num].style.animation="fangda .3s linear forwards"
    /*bofang[num].style.webkitTransform="scale(1.1)"*/
    if(num==3){
        lunbo.style.marginLeft=-488+"px";
        
    }

}
container.onmouseover=function () {
    clearInterval(t1);
}
container.onmouseout=function () {
    t1=setInterval(move,2000)
}



var nav=document.querySelectorAll(".banner-top-right1")
var maotou=document.querySelectorAll(".maotou")

Array.from(nav).forEach(function (ele,index) {
    ele.onmouseover=function () {
        maotou[index].style.opacity=1;
        maotou[index].style.top=-12+"px";
    }
    ele.onmouseout=function () {
        maotou[index].style.opacity=0;
        maotou[index].style.top=0;
    }
})



var guanggao=document.querySelector(".guanggao");
var len=document.querySelectorAll(".guanggao li");
var n=0;
setInterval(function () {
    n++;
    if(n==len.length){
        n=0;
    }
    guanggao.style.marginTop=-40*n+"px";
},3000)