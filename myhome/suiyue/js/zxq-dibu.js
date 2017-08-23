$(document).ready(function(){

    $('.zxq-bottom')[0].addEventListener('touchstart', function(e) {
        var obj=e.target;
        console.log(obj);
        if($(obj).attr('src')=='../img/zxq-bf.png'){
            var audio=$('audio').get(0);
			if(audio.paused){
				audio.play();
			}else{
				audio.pause();
			}
            var jindu=$('.zxq-bottom .zxq-tiao');
            var tiao=$('.zxq-bottom .zxq-ctiao');
            $('.zxq-bottom .zxq-yuan').on('click',false);
            jindu.on('click',function(e){
                audio.currentTime=audio.duration*(e.offsetX/jindu.width());
            })
            $(audio).on('timeupdate',function(){
                var w=jindu.width()*audio.currentTime/audio.duration;
                tiao.width(w);
            });
		}else{
        	location.href="../html/sc-bofang.html";
		}
    })
})