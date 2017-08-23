$(".hang1").click(function () {
    $(this).next().slideToggle(300);
})


//banner 

var btns1=document.querySelectorAll(".lunboinner");
var cons1=document.querySelectorAll(".banner-box a")
var container1=document.querySelector(".banner");
var obj=btns1[0]
var newcons=cons1[0]
var to;
Array.from(btns1).forEach(function (ele,index) {
    ele.onmouseover=function(){
        to=setTimeout(function () {
            num1=index;
            obj.style.animation="";
            newcons.style.zIndex="1"
            newcons.style.opacity="0"
            btns1[index].style.animation="tiao 1s";
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

    if(num1==-1){
        num1=btns1.length-1;
    }
    obj.style.animation="";
    newcons.style.zIndex="1"
    newcons.style.opacity="0"
    btns1[num1].style.animation="tiao 1s";
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
$(".banner-right-btn").click(function () {
    move1();
})
$(".banner-left-btn").click(function () {
    num1-=2;
    move1();
})