var btns1=document.querySelectorAll(".banner .dian .circle2");
var cons1=document.querySelectorAll(".banner .lunbo-tu li")
var container1=document.querySelector(".banner-main");
var obj=btns1[0]
var newcons=cons1[0]
var prev=document.querySelector(".jiantou-left");
var next=document.querySelector(".banner .jiantou-right")

Array.from(btns1).forEach(function (ele,index) {
    ele.onmouseover=function(){
        num1=index;
        obj.style.background="#dddddd";
        newcons.style.zIndex="1"
        newcons.style.opacity="0"
        btns1[index].style.background="#a10000";
        cons1[index].style.zIndex="2";
        cons1[index].style.opacity="1"
        obj=btns1[index]
        newcons=cons1[index];
    }
})
var num1=0;
var t=setInterval(move1,2000);
function move1() {
    num1++;
    if(num1==btns1.length){
        num1=0;
    }
    if(num1==-1){
        num1=btns1.length-1;
    }
    obj.style.background="#dddddd";
    newcons.style.zIndex="1"
    newcons.style.opacity="0"
    btns1[num1].style.background="#a10000";
    cons1[num1].style.zIndex="2";
    cons1[num1].style.opacity="1"
    obj=btns1[num1]
    newcons=cons1[num1];
}
container1.onmouseover=function () {
    clearInterval(t);
}
container1.onmouseout=function () {
    t=setInterval(move1,2000)
}
next.onclick=function () {
    move1()
}
prev.onclick=function () {
    num1-=2;
    move1()
}


//下拉导航
var lis=document.querySelectorAll(".daohang-main>li");
var seclist=document.querySelectorAll(".seclist");
console.log(lis)
var arr=[];
Array.from(seclist).forEach(function (ul) {
    var li=ul.querySelectorAll("li");
    var height=li.length*35-25;
    arr.push(height);
})
console.log(arr);
Array.from(lis).forEach(function (li,index) {
    li.onmouseover=function () {
        seclist[index].style.height=arr[index]+"px";
    }
    li.onmouseout=function () {
        seclist[index].style.height=0;
    }
})


//erweima
var weixin=document.querySelector(".share .w1");
var saoma=document.querySelector(".share .erweima1");
weixin.onmouseover=function () {
    saoma.style.display="block";
}
weixin.onmouseout=function () {
    saoma.style.display="";
}




//购物车
var buy=document.querySelector(".sousuo .buy");
var buylist=document.querySelector(".sousuo .buy .buylist");

buy.onmouseover=function () {
    buylist.style.display="block";
}
buy.onmouseout=function () {
    buylist.style.display="none";
}


//totop
var totop=document.querySelector(".fixed .totop");
totop.onclick=function () {
    animate(document.body,{scrollTop:0},500);
}
