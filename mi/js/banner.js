var btns = document.querySelectorAll(".banner .lunbo li");
var cons = document.querySelectorAll(".banner .lunbo-tu li");
var container = document.querySelector(".banner-main");
var obj = btns[0];
var newcons = cons[0];
var prev = document.querySelector(".jiantou");
var next = document.querySelector(".jiantou1")

Array.from(btns).forEach(function (ele, index) {
    ele.onmouseover = function () {
        num = index;
        obj.style.background = "#5B5E65";
        newcons.style.zIndex = "1"
        newcons.style.opacity = "0"
        btns[index].style.background = "#F1F1F4";
        cons[index].style.zIndex = "2";
        cons[index].style.opacity = "1"
        obj = btns[index]
        newcons = cons[index];
    }
})
var num = 0;
var t = setInterval(move, 2000);
function move() {
    num++;
    if (num == btns.length) {
        num = 0;
    }
    if (num == -1) {
        num = btns.length - 1;
    }
    obj.style.background = "#5B5E65";
    newcons.style.zIndex = "1"
    newcons.style.opacity = "0"
    btns[num].style.background = "#F1F1F4";
    cons[num].style.zIndex = "2";
    cons[num].style.opacity = "1"
    obj = btns[num]
    newcons = cons[num];
}
container.onmouseover = function () {
    clearInterval(t);
}
container.onmouseout = function () {
    t = setInterval(move, 2000)
}
next.onclick = function () {
    move()
}
prev.onclick = function () {
    num -= 2;
    move();
}


//明星单品轮播
var changkuang = document.querySelector(".changkuang");
var left = document.querySelector(".star-top-right .jiantou-left");
var right = document.querySelector(".star-top-right .jiantou-right");

var num3 = 0;
var t1 = setInterval(yidong, 2000)
function yidong() {
    num3++;
    if (num3 > 1) {
        num3 = 0;
    }
    if (num3 == 1) {
        changkuang.style.marginLeft = -1226 + "px";
        left.style.color = "#B1B0B0";
        right.style.color = "#e0e0e0";
        left.style.cursor = "pointer"
        right.style.cursor = "";
    }
    if (num3 == 0) {
        changkuang.style.marginLeft = 0;
        left.style.color = "#e0e0e0";
        right.style.color = "#B1B0B0";
        left.style.cursor = "";
        right.style.cursor = "pointer";
    }
}
right.onmouseover = function () {
    clearInterval(t1);
    right.style.color = "#ff6700"
    left.style.color = "#e0e0e0";
}
right.onmouseout = function () {
    t1 = setInterval(yidong, 5000);
}
left.onmouseover = function () {
    clearInterval(t1);
    left.style.color = "#ff6700"
    right.style.color = "#e0e0e0";
}
left.onmouseout = function () {
    t1 = setInterval(yidong, 5000)
}
right.onclick = function () {
    num3=0;
    yidong();
}
left.onclick = function () {
    num3=1;
    yidong();
}


//为你推荐

    var inner=document.querySelector(".tuijian-bottom .changkuang1");
    var tuijianprev=document.querySelector(".tuijian-top .jiantou-left");
    var tuijiannext=document.querySelector(".tuijian-top .jiantou-right");
    var nn=0;

    tuijiannext.onclick=function () {
        nn++;
        console.log(nn);
        tuijianprev.style.color="#b1b0b0";
        if(nn==4){
            nn=3;
            tuijiannext.style.color="#e0e0e0";

        }
        inner.style.marginLeft=-1226*nn+"px";
    }
    tuijianprev.onclick=function () {
        nn--;
        console.log(nn);
        tuijiannext.style.color="#b1b0b0";
        if(nn==-1){
            nn=0;
            tuijianprev.style.color="#e0e0e0";
        }
        inner.style.marginLeft=-1226*nn+"px";
    }
   /* tuijiannext.onmouseover=function () {
        tuijiannext.style.color="#ff6700";
        tuijianprev.style.color="#B1B0B0";
    }
    tuijianprev.onmouseout=function () {
        tuijianprev.style.color="#ff6700";
        tuijiannext.style.color="#e0e0e0";
    }*/


function neirong(next,prev,rongqi,dian) {
    var newbtn=dian[0];
        dian.forEach(function (v,i) {
            v.onclick=function () {
                newbtn.style.background="#b0b0b0";
                newbtn.style.border="2px solid #fff";
                dian[i].style.background="#fff";
                dian[i].style.border="2px solid #ff6700";

                rongqi.style.marginLeft=-296*i+"px";
                newbtn = dian[i]
            }
        })
    var num=0;
    next.onclick=function () {
        num++;
        if(num==dian.length){
            num=dian.length-1;
        }
        newbtn.style.background="#b0b0b0";
        newbtn.style.border="2px solid #fff";
        dian[num].style.background="#fff";
        dian[num].style.border="2px solid #ff6700";
        newbtn = dian[num]
        rongqi.style.marginLeft=-296*num+"px";
    }
    prev.onclick=function () {
        num--;
        if(num==-1){
            num=0;
        }
        newbtn.style.background="#b0b0b0";
        newbtn.style.border="2px solid #fff";
        dian[num].style.background="#fff";
        dian[num].style.border="2px solid #ff6700";
        newbtn = dian[num]
        rongqi.style.marginLeft=-296*num+"px";
    }
}
var tushu=document.querySelector(".tushu");
var tushuprev=document.querySelector(".neirong1-bottom1 .neirong-zuojiantou")
var tushunext=document.querySelector(".neirong1-bottom1 .neirong-youjiantou");
var dian=document.querySelectorAll(".neirong1-bottom1 .nrlb .nrlb2");

neirong(tushunext,tushuprev,tushu,dian)

var zhuti=document.querySelector(".zhuti");
var zhutiprev=document.querySelector(".neirong1-bottom2 .neirong-zuojiantou");
var zhutinext=document.querySelector(".neirong1-bottom2 .neirong-youjiantou");
var dian1=document.querySelectorAll(".neirong1-bottom2 .nrlb3 .nrlb2");
neirong(zhutinext,zhutiprev,zhuti,dian1);
var youxi=document.querySelector(".youxi");
var youxiprev=document.querySelector(".neirong1-bottom3 .neirong-zuojiantou");
var youxinext=document.querySelector(".neirong1-bottom3 .neirong-youjiantou");
var dian2=document.querySelectorAll(".neirong1-bottom3 .nrlb3 .nrlb2");
neirong(youxinext,youxiprev,youxi,dian2);
var yingyong=document.querySelector(".yingyong");
var yingyongprev=document.querySelector(".neirong1-bottom4 .neirong-zuojiantou");
var yingyongnext=document.querySelector(".neirong1-bottom4 .neirong-youjiantou");
var dian3=document.querySelectorAll(".neirong1-bottom4 .nrlb3 .nrlb2");
neirong(yingyongnext,yingyongprev,yingyong,dian3);

//topdaohang
$(".banner-left>ul>li").each(function (index,ele) {
    $(ele).mouseover(function(){
        $(".right-child.a1").eq(index).css({display:"block",top:(-20-43*index)+"px"})
    })
    $(ele).mouseout(function(){
        $(".right-child.a1").eq(index).css("display","none")
    })
})
$(".daohang-1").each(function (index,ele) {
    $(ele).mouseover(function(){

        $(".clearfix").eq(index).css("height","206px")
    })
    $(ele).mouseout(function(){
        $(".clearfix").eq(index).css("height","0px")
    })
})