//banner
var imgs=document.querySelectorAll(".banner-image-mask a");
var num=0;
var newimg=imgs[0]
setInterval(function () {
    console.log(num)
    num++;
    if(num==2){
        num=0;
    }
    newimg.style.opacity=0;
    imgs[num].style.opacity=1;
    newimg=imgs[num];
},3000)

//热门设备推荐
$(".tab-content .devices li").each(function (index,ele) {
    if($(this).hasClass("active")){
        $(".rank-content").eq(index).css("display","block");
    }else{
        $(".rank-content").eq(index).css("display","none");
    }
    /*$(this).hover(function () {
        $(this).addClass("active").siblings().removeClass("active");
        $(".rank-content").eq(index).css("display","block");
    },function () {

        $(".rank-content").eq(index).css("display","none");
    })*/
    $(this).hover(function () {
        $(".rank-content").css("display","none");
        $(".rank-content").eq(index).css("display","block");
    },function () {

    })
    
})