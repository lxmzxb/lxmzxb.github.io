var btns1=document.querySelectorAll(".banner .lunbo li");
var cons1=document.querySelectorAll(".banner .lunbo-tu li")
var container1=document.querySelector(".banner-bottom");
var obj=btns1[0]
var newcons=cons1[0]
var to;
var colorArr=["#132244","#FD7D02","#134FD8","#E8E8E8","#EAF8E7","#E8E8E8"]
Array.from(btns1).forEach(function (ele,index) {
    ele.onmouseover=function(){
        to=setTimeout(function () {
            num1=index;
            container1.style.background=colorArr[index];
            obj.style.background="rgba(0,0,0,0.5)";
            newcons.style.zIndex="1"
            newcons.style.opacity="0"
            btns1[index].style.background="rgba(255,255,255,0.5)";
            cons1[index].style.zIndex="2";
            cons1[index].style.opacity="1"
            obj=btns1[index]
            newcons=cons1[index];
        },200)
        
    }
})
var num1=0;
var t=setInterval(move1,2000);
function move1() {
    num1++;
    if(num1==btns1.length){
        num1=0;
    }
    container1.style.background=colorArr[num1];
  
    obj.style.background="rgba(0,0,0,0.5)";
    newcons.style.zIndex="1"
    newcons.style.opacity="0"
    btns1[num1].style.background="rgba(255,255,255,0.5)";
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


//顶部搜索  左部导航
var topbar=document.querySelector(".top-nav");
var leftbar=document.querySelector(".left-nav");
var totop=document.querySelector(".totop")
var floorbtns=document.querySelectorAll(".left-nav1");
var floors=document.querySelectorAll(".floor");
var totop1=document.querySelector(".right-nav-tu8");

var leftcolor=["#EA5F8D","#0AA6E8","#64C333","#F15453","#19C8A9","#F7A945","#000"]
floorbtns.forEach(function (ele,index) {
    ele.onclick=function () {
        var toptop=floors[index].offsetTop;
        console.log(toptop)
        animate(document.body,{scrollTop:toptop})
    }
    hover(ele,function () {
        this.style.background=leftcolor[index];
    },function () {
        this.style.background="";
    })
})

totop.onclick=function () {
    animate(document.body,{scrollTop:0},500);
}
totop1.onclick=function () {
    animate(document.body,{scrollTop:0},500);
}
window.onscroll=function () {
    var st=document.body.scrollTop;
    var st2=window.innerHeight;
    if(st>100){
        totop1.style.opacity=1;

    }else{
        totop1.style.opacity=0;
    }
    if(st>800){
        topbar.style.top=0;

    }else{
        topbar.style.top="-50px";

    }
    if(st>700){
        leftbar.style.width="35px";
        leftbar.style.height="332px";
    }else{
        leftbar.style.width=0;
        leftbar.style.height=0;
    }

    /*floors.forEach(function (ele,index) {
        if(st>=ele.offsetTop){
            $(".left-nav1").eq(index).addClass("active").siblings().removeClass("active");
        }
    })*/
}
var to;
$(window).scroll(function () {
    var st=$(window).scrollTop();
    clearTimeout(to);
    console.log(1);
    to=setTimeout(function () {
        $(".floor").each(function (index,ele) {
            if(st>=$(ele).offset().top){
                console.log($(ele).offset().top)
                $(".left-nav1").eq(index).addClass("active").siblings().removeClass("active");
            }
        })
    },200)

})

//右边
var boxs=document.querySelectorAll(".right-nav .box");
var tips=document.querySelectorAll(".duihuakuang");

var tt;
Array.from(boxs).forEach(function (box,index) {
    /*box.onmouseover=function () {
        clearTimeout(t)
        t=setTimeout(function () {
            tips[index].classList.add("show");
        },200)

    }
    box.onmouseout=function () {
        clearTimeout(t);
        if(tips[index].classList.contains("show")){
            tips[index].classList.remove("show");
            tips[index].classList.add("hide")
        }

    }*/
    hover(box,function () {
        clearTimeout(tt)
        tt=setTimeout(function () {
            tips[index].classList.add("show");
            ma.style.display="none";
        },200)

    },function () {
        clearTimeout(tt);
        if(tips[index].classList.contains("show")){
            tips[index].classList.remove("show");
            tips[index].classList.add("hide")
        }

    })
})

Array.from(tips).forEach(function (tip) {
    tip.addEventListener("animationend",function () {
        if(tip.classList.contains("hide")){
            tip.classList.remove("hide");
        }
    })
})


//右边二维码
var saoma=document.querySelector(".right-nav-tu7");
var ma=document.querySelector(".saoma");
saoma.onmouseover=function () {
    ma.style.display="block";
}



//header
var my=document.querySelector(".header-my");
var xiala=document.querySelector(".header-my .xiala");
var shangjia=document.querySelector(".header-shangjia");
var xiala1=document.querySelector(".xiala1");
var shoucang=document.querySelector(".header-shoucang1");
var xiala2=document.querySelector(".header-shoucang1 .xiala")
var shouji=document.querySelector(".header-shouji");
var xiala3=document.querySelector(".header-erweima");
var jswangzhan=document.querySelector(".jswangzhi");
var wangzhan=document.querySelector(".header-wangzhan");

hover(wangzhan,function () {
    jswangzhan.style.display="block";
},function () {
    jswangzhan.style.display="none";
})

hover(my,function () {
    xiala.style.display="block";
},function () {
    xiala.style.display="none";
})
/*my.onmouseover=function () {
    xiala.style.display="block";
}
my.onmouseout=function () {
    xiala.style.display="none";
}*/
hover(shangjia,function () {
    xiala1.style.display="block";
},function () {
    xiala1.style.display="none";
})
/*shangjia.onmouseover=function () {
    xiala1.style.display="block";
}
shangjia.onmouseout=function () {
    xiala1.style.display="none";
}*/
hover(shoucang,function () {
    xiala2.style.display="block";
},function () {
    xiala2.style.display="none";
})
/*shoucang.onmouseover=function () {
    xiala2.style.display="block";
}
shoucang.onmouseout=function () {
    xiala2.style.display="none";
}*/
hover(shouji,function () {
    xiala3.style.display="block";
},function () {
    xiala3.style.display="none";
})
/*shouji.onmouseover=function () {
    xiala3.style.display="block";
}
shouji.onmouseout=function () {
    xiala3.style.display="none";
}*/

//导航侧栏
var celan=document.querySelectorAll(".celan ul li")

var xianshi=document.querySelectorAll(".banner_daohang");
console.log(xianshi)
Array.from(celan).forEach(function (ele,index) {
    ele.onmouseover=function () {
        xianshi[index].style.display="block";
        xianshi[index].style.top=-index*31+"px";
    }
    ele.onmouseout=function () {
        xianshi[index].style.display="none";
    }
    xianshi[index].onmouseout=function () {
        xianshi[index].style.display="none";
    }
    /*hover(container1,function () {

    },function () {
        xianshi[index].style.display="none";
    })*/
})

