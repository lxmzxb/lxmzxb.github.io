$(document).ready(function(){
	$("li").click(function(){
//		alert(1);
		$(this).addClass("active").siblings().removeClass("active");
		console.log($(this));
	})
	$('.zxq-top1 a')[0].addEventListener('touchstart',function(){
		window.history.back();
	})
})