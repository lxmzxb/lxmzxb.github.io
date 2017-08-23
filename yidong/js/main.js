//banner
var box=document.querySelector(".banner-main");
var imgs=document.querySelectorAll(".changkuang li");
var btns=document.querySelectorAll(".lunbodian li");
var prev=document.querySelector(".banner-main .prev");
var next=document.querySelector(".banner-main .next");
var flag=true;
var num=0;
var z=5;
var t=setInterval(move,3000);
function move() {
    imgs[num].classList.add("leftOut");
    btns[num].classList.remove("moren");
    num++;
    if(num==imgs.length){
        num=0;
    }
    imgs[num].classList.add("leftIn");
    btns[num].classList.add("moren");
    imgs[num].style.zIndex=z++;
}
imgs.forEach(function (img) {
    img.addEventListener("animationend",function () {
        img.className="";
        flag=true;
    })
})
box.onmouseover=function () {
    clearInterval(t);
}
box.onmouseout=function () {
    t=setInterval(move,3000);
}
btns.forEach(function (btn,index) {
    btn.onclick=function () {
        if(num==index){
            return;
        }
        if(index>num){
            imgs[num].classList.add("leftOut");
            btns[num].classList.remove("moren");
            imgs[index].classList.add("leftIn");
            btns[index].classList.add("moren");
        }else{
            imgs[num].classList.add("rightOut");
            btns[num].classList.remove("moren");
            imgs[index].classList.add("rightIn");
            btns[index].classList.add("moren");
        }
        imgs[index].style.zIndex=z++;
        num=index;
    }
})
next.onclick=function () {
    if(flag){
        flag=false;
        move();
    }
}
prev.onclick=function () {
    if(flag){
        flag=false;
        imgs[num].classList.add("rightOut");
        btns[num].classList.remove("moren");

        num--;
        if(num==-1){
            num=imgs.length-1;
        }
        imgs[num].classList.add("rightIn");
        btns[num].classList.add("moren");
        imgs[num].style.zIndex=z++;
    }
}


//banner下
var rongqi=document.querySelector(".yhcx");
var inner=document.querySelector(".yhcx .yhcx-main .guidong");
var len=document.querySelectorAll(".guidong li");
var yhprev=document.querySelector(".yhcx .yhprev");
var yhnext=document.querySelector(".yhcx .yhnext");
var num1=4;
var flag1=true;
var t1=setInterval(move1,4000)
function move1() {
    
        inner.style.transition="all 1s";
    
    num1++;

    inner.style.marginLeft=-295*num1+"px";

}
inner.addEventListener("transitionend",function () {
    if(num1==12){
        inner.style.transition="none";
       
        num1=4;
        inner.style.marginLeft=-295*num1+"px";
    }else if(num1==0){
        inner.style.transition="none";

        num1=8;
        inner.style.marginLeft=-295*num1+"px";
    }
    flag1=true;
})
rongqi.onmouseover=function () {
    clearInterval(t1);
}
rongqi.onmouseout=function () {
    t1=setInterval(move1,4000);
}
yhnext.onclick=function () {
    if(flag1){
        flag1=false;
        move1();
    }

}
yhprev.onclick=function () {
    if(flag1){
        flag1=false;
        num1-=2;
        move1()
    }

}



//左移动
var zuoyi=document.querySelectorAll(".con2 .tu");
var zuoyi1=document.querySelectorAll(".buyphone .tu")
zuoyi.forEach(function (img) {
    img.onmouseover=function () {
        img.style.right=10+"px";
        img.style.transition="all 0.5s";
    }
    img.onmouseout=function () {
        img.style.right=0;
    }
})
zuoyi1.forEach(function (img) {
    img.onmouseover=function () {
        img.style.right=10+"px";
        img.style.transition="all 0.5s";
    }
    img.onmouseout=function () {
        img.style.right=0;
    }
})


//登录
var login=document.querySelector(".login");
var dropdown=document.querySelector(".dropdown-menu");
/*hover(login,function () {
    dropdown.style.display="block";
},function () {
    dropdown.style.display="none";
})*/
login.onmouseover=function () {
    dropdown.style.display="block";
}
login.onmouseout=function () {
    dropdown.style.display="none";
}

var sjyyt=document.querySelector(".sjyyt");
var dropdown1=document.querySelector(".dropdown-ewm");
sjyyt.onmouseover=function () {
    dropdown1.style.display="block";
}
sjyyt.onmouseout=function () {
    dropdown1.style.display="none";
}


//导航
var nav=document.querySelectorAll(".nav>li");
var sectlist=document.querySelectorAll(".sectlist");
var sanjiao=document.querySelectorAll(".sanjiao");

nav.forEach(function (ele,index) {
    ele.onmouseover=function () {
       
        sectlist[index].style.display="block";
        sanjiao[index].style.display="block";
        sectlist[index].style.left=-(160+260*index)+"px";
    }
    ele.onmouseout=function () {
        sectlist[index].style.display="none";
        sanjiao[index].style.display="none";
    }
})


//右边
var kefu=document.querySelectorAll(".zxzx");
kefu.forEach(function (ele) {
    ele.onmouseover=function () {
        ele.style.left=-80+"px";
    }
    ele.onmouseout=function () {
        ele.style.left=-20+"px";
    }
})

//公告
var ggrow=document.querySelector(".row");
var stop=document.querySelector(".gonggao");
var ggprev=document.querySelector(".ggprev");
var ggnext=document.querySelector(".ggnext");
var lastchild=ggrow.lastChild;
var t3=setInterval(guidong,3000);
function guidong() {
    var firstchild=ggrow.firstChild;
    delete firstchild;
    ggrow.appendChild(firstchild);
}

    stop.onmouseover=function () {
        clearInterval(t3);
    }
    stop.onmouseout=function () {
        t3=setInterval(guidong,3000);
    }


ggnext.onclick=function () {
    guidong();
}
ggprev.onclick=function () {
    var lastchild=ggrow.lastChild;
    var firstchild=ggrow.firstChild;
    delete lastchild;
    ggrow.insertBefore(lastchild,firstchild);

}



//位置
var topcity=document.querySelector(".dingwei .topcity span");
var shengfen=document.querySelector(".topcity .shengfen");
var allcity=document.querySelector(".topcity .allcity");
var backall=document.querySelector(".shengfen .blue");
/*topcity.onclick=function () {
    shengfen.style.display="block";
}
backall.onclick=function () {
    allcity.style.display="block";
}*/
document.body.onclick=function (e) {
   
    if(e.target.className=="jz"){

        shengfen.style.display="block";
    }else if(e.target.className=="blue"){
        allcity.style.display="block";
    }else{
        shengfen.style.display="none";
        allcity.style.display="none";
    }
}
