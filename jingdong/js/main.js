//banner
(function () {
    var btns = document.querySelectorAll(".banner-main .lunbodian li");
    var cons = document.querySelectorAll(".banner-kuang li");
    var container = document.querySelector(".banner-main");
    var bannext = document.querySelector(".banner-next");
    var banprev = document.querySelector(".banner-prev");
    var obj = btns[0];
    var newcons = cons[0];
    var to;
    Array.from(btns).forEach(function (ele, index) {
        ele.onmouseover = function () {
            to = setTimeout(function () {
                num = index;
                obj.style.background = "#fff";
                newcons.style.opacity = 0;
                newcons.style.zIndex = 1;
                btns[index].style.background = "#db192a";
                cons[index].style.zIndex = "2";
                cons[index].style.opacity = 1;
                obj = btns[index];
                newcons = cons[index];
            }, 200)
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
        obj.style.background = "#fff";
        newcons.style.opacity = 0;
        newcons.style.zIndex = 1;
        btns[num].style.background = "#db192a";
        cons[num].style.zIndex = "2";
        cons[num].style.opacity = 1;
        obj = btns[num];
        newcons = cons[num];
    }

    container.onmouseover = function () {
        clearInterval(t);
    }
    container.onmouseout = function () {
        t = setInterval(move, 2000);
    }
    bannext.onclick = function () {
        move();
    }
    banprev.onclick = function () {
        num -= 2;
        move();
    }
})()

//秒杀
/*

    var move=document.querySelectorAll(".miaosha-pic a img");
    var yiru=document.querySelectorAll(".miaosha-pic a");
    console.log(move,yiru)
    yiru.onmouseover=function () {
        move.style.transform="translateY(-5px)";
    }
*/


//右导航
var cto;
$(".tab,.foot-tab").each(function (index,ele) {
    $(this).hover(function () {
        clearTimeout(cto);
        cto=setTimeout(function () {
            $(".tab-text").eq(index).css({left:-60,background:"#c81623"});
            $(".tab-icon").eq(index).css({backgroundColor:"#c81623"});
        },200)

    },function () {
        clearTimeout(cto);
        $(".tab-text").eq(index).css({left:35,background:""});
        $(".tab-icon").eq(index).css({backgroundColor:""});
    })
})
$(".foot-tab.top").click(function () {
    $("body,html").animate({scrollTop:0},500,"linear");
})

//顶部导航
$(window).scroll(function () {
    var st=$(window).scrollTop();
    if(st>$(".miaosha").offset().top){
        $(".topbar").css("top",0);
    }else{
        $(".topbar").css("top",-50);
    }
})

//左边导航
var to;
$(window).scroll(function () {
    var st=$(window).scrollTop();
    if(st>$(".pinzhi").offset().top){
        $(".leftbar").css("opacity",1);
    }else{
        $(".leftbar").css("opacity",0);
    }
    clearTimeout(to);
    console.log(1);
    to=setTimeout(function () {
        $(".floor").each(function (index,ele) {
            if(st>=$(ele).offset().top){
                console.log($(ele).offset().top)
                $(".left-item").eq(index).addClass("left-item-on").siblings().removeClass("left-item-on");
            }
        })
    },200)
})

$(".left-item").each(function (index,ele) {
    $(this).click(function () {
        var toptop=$(".floor").eq(index).offset().top;
        $("body,html").animate({scrollTop:toptop},500)
    }).hover(function () {
        $(this).css("background","#d70b1c")
    },function () {
        $(this).css("background","");
    })
})
$(".left-item1 .totop").click(function () {
    $("body,html").animate({scrollTop:0},500,"linear");
})


//鼠标经过
$(".shortcut .weizhi").hover(function () {
    $(".weizhi .zhezhao").css("display","block");
    $(this).css("background","#fff");
},function () {
    $(".weizhi .zhezhao").css("display","none");
    $(this).css("background","");
})

$(".fl li .my").hover(function () {
    $(".my .jdd").css("display","block");
    $(this).css("background","#fff");
},function () {
    $(".my .jdd").css("display","none");
    $(this).css("background","");
})
$(".fl li .servers").hover(function () {
    $(".servers .kkkh").css("display","block");
    $(this).css("background","#fff");
},function () {
    $(".servers .kkkh").css("display","none");
    $(this).css("background","");
})
$(".fl li .wzdh").hover(function () {
    $(".wzdh .gjs").css("display","block");
    $(this).css("background","#fff");
},function () {
    $(".wzdh .gjs").css("display","none");
    $(this).css("background","");
})
$(".gouwuche").hover(function () {
    $(".gouwuche .gouwulis").css("display","block");

},function () {
    $(".gouwuche .gouwulis").css("display","none");

})
$(".banner .menu li").each(function (i,v) {
    $(this).hover(function () {
        $(".dianqibox").eq(i).css({display:"block",top:(-15-i*30)+"px"});
    },function () {
        $(".dianqibox").eq(i).css({display:"none"});
    })
})

//秒杀轮播
/*
var inner=document.querySelector(".inner")
var len=document.querySelectorAll(".inner li")
var num=0;
setInterval(function () {
    if(num==0){
        inner.style.transition="all 1s";
    }
    num++;

    inner.style.marginLeft=-1000*num+"px";
},3000)
inner.addEventListener("transitionend",function () {
    if(num==len.length-1){
        inner.style.transition="none";
        inner.style.marginLeft=0;
        num=0;
    }
})*/
var num11=0;
$(".ms-next").click(function () {
    if(num11==0){
        $(".miaosha-kuang").css("transition","all 1s");
    }
    num11++;
    $(".miaosha-kuang").css("marginLeft",-1000*num11+"px");
})
$(".ms-prev").click(function () {

    num11--;
    if(num11==-1){
        num11=1;
    }
    $(".miaosha-kuang").css("marginLeft",-1000*num11+"px");
})
document.querySelector(".miaosha-kuang").addEventListener("transitionend",function () {
    if(num11==1){
        $(".miaosha-kuang").css({transition:"none",marginLeft:0});
        num11=0;
    }

})




//倒计时
setInterval(function () {
    var now=new Date();
    var target=new Date(2017,4,20,0,0,0);
    var cha=target.getTime()-now.getTime();
    var hour=Math.floor(cha/(1000*60*60));
    $(".time .hour").html(hour<10?"0"+hour:hour);
    var minute=Math.floor(cha/(1000*60)%60);
    $(".time .hour.mi").html(minute<10?"0"+minute:minute);
    var second=Math.floor(cha/1000%60);
    $(".time .hour.sc").html(second<10?"0"+second:second);
},1000)



//直播轮播图
var btns1 = document.querySelectorAll(".lbd .ddd");
var cons1 = document.querySelectorAll(".xpzb_tt .xxxtu");
var container1 = document.querySelector(".entry .live");
var bannext1 = document.querySelector(".zbnext");
var banprev1 = document.querySelector(".zbprev");
var obj1 = btns1[0];
var newcons1 = cons1[0];
var to1;
Array.from(btns1).forEach(function (ele, index) {
    ele.onmouseover = function () {
        to1 = setTimeout(function () {
            num1 = index;
            obj1.style.background = "#fff";
            newcons1.style.opacity = 0;
            newcons1.style.zIndex = 1;
            btns1[index].style.background = "#db192a";
            cons1[index].style.zIndex = "2";
            cons1[index].style.opacity = 1;
            obj1 = btns1[index];
            newcons1 = cons1[index];
        }, 200)
    }
})
var num1 = 0;
var t = setInterval(move1, 2000);

function move1() {
    num1++;
    if (num1 == btns1.length) {
        num1 = 0;
    }
    if (num1 == -1) {
        num1 = btns1.length - 1;
    }
    obj1.style.background = "#fff";
    newcons1.style.opacity = 0;
    newcons1.style.zIndex = 1;
    btns1[num1].style.background = "#db192a";
    cons1[num1].style.zIndex = "2";
    cons1[num1].style.opacity = 1;
    obj1 = btns1[num1];
    newcons1 = cons1[num1];
}

container1.onmouseover = function () {
    clearInterval(t);
}
container1.onmouseout = function () {
    t = setInterval(move1, 2000);
}
bannext1.onclick = function () {
    move1();
}
banprev1.onclick = function () {
    num1 -= 2;
    move1();
}


//商标轮播部分
/*function lunbo() {
    var banner=document.querySelectorAll(".pt-ft");
    var imgs=document.querySelectorAll(".pt-ft ul");

    var prev=document.querySelector(".left-btn");
    var next=document.querySelector(".right-btn");
    var flag=true;
    var num=0;
    var z=5;

    function move() {
        imgs[num].classList.add("leftOut");


        num++;
        if(num==imgs.length){
            num=0;
        }
        console.log(num);
        imgs[num].classList.add("leftIn");

        imgs[num].style.zIndex=z++;
        flag=true;
    }
    banner.forEach(function (ele,i) {
        imgs.forEach(function (img) {
            img.addEventListener("animationend",function () {
                img.className="";
                flag=true;

            })
        })
        next.onclick=function () {
            if(flag){
                flag=false;
                move();
            }
            console.log(flag);

        }
        prev.onclick=function () {
            if(flag){
                flag=false;
                imgs[num].classList.add("rightOut");

                num--;
                if(num==-1){
                    num=imgs.length-1;
                }
                imgs[num].classList.add("rightIn");

                imgs[num].style.zIndex=z++;
            }

        }
    })



}
lunbo()*/

var logoinners = document.querySelectorAll(".pt-ft ul");
var logobtnLs = document.querySelectorAll(".left-btn");
var logobtnRs = document.querySelectorAll(".right-btn");

var num3 = 0;

function bannerlogo(inner, btnl, btnr, wid) {
    function move5() {
        num3++;
        if(num3 == 4) {
            num3 = 1;
        }
        if(num3 < 0) {
            num3 = 2;
        }
        inner.style.transition = "all 1s";
        inner.style.marginLeft = -wid * num3 + "px";
    }
    btnr.onclick = function() {
        move5();
    }
    btnl.onclick = function() {
        num3 -= 2;
        move5();
    }
    inner.addEventListener("transitionend", function() {
        inner.style.transition = "none";
        if(num3 == 0) {
            num3 = 2;
            inner.style.marginLeft = -wid * num3 + "px";

        }
        if(num3 == 3) {
            num3 = 1;
            inner.style.marginLeft = -wid * num3 + "px";

        }

    })
}
for(let i = 0; i < 15; i++) {

    if(i == 12 || i == 13 || i == 14) {
        bannerlogo(logoinners[i], logobtnLs[i], logobtnRs[i], 370);
    } else {
        bannerlogo(logoinners[i], logobtnLs[i], logobtnRs[i], 570);
    }
}