$(document).ready(function() {
  
  var $slidr = $(".slidr"),
      $slidBGs = $(".slid__bg"),
      diff = 0,
      curSlid = 0,
      numOfSlids = $(".slid").length-1,
      animating = false,
      animTime = 500,
      autoSlidTimeout,
      autoSlidDelay = 6000,
      $pagination = $(".slidr-pagi");
  
  function createBullets() {
    for (var i = 0; i < numOfSlids+1; i++) {
      var $li = $("<li class='slidr-pagi__elem'></li>");
      $li.addClass("slidr-pagi__elem-"+i).data("page", i);
      if (!i) $li.addClass("active");
      $pagination.append($li);
    }
  };
  
  createBullets();
  
  function manageControls() {
    $(".slidr-control").removeClass("inactive");
    if (!curSlid) $(".slidr-control.left").addClass("inactive");
    if (curSlid === numOfSlids) $(".slidr-control.right").addClass("inactive");
  };
  
  function autoSlid() {
    autoSlidTimeout = setTimeout(function() {
      curSlid++;
      if (curSlid > numOfSlids) curSlid = 0;
      changeSlids();
    }, autoSlidDelay);
  };
  
  autoSlid();
  
  function changeSlids(instant) {
    if (!instant) {
      animating = true;
      manageControls();
      $slidr.addClass("animating");
      $slidr.css("top");
      $(".slid").removeClass("active");
      $(".slid-"+curSlid).addClass("active");
      setTimeout(function() {
        $slidr.removeClass("animating");
        animating = false;
      }, animTime);
    }
    window.clearTimeout(autoSlidTimeout);
    $(".slidr-pagi__elem").removeClass("active");
    $(".slidr-pagi__elem-"+curSlid).addClass("active");
    $slidr.css("transform", "translate3d("+ -curSlid*100 +"%,0,0)");
    $slidBGs.css("transform", "translate3d("+ curSlid*50 +"%,0,0)");
    diff = 0;
    autoSlid();
  }

  function navigateLeft() {
    if (animating) return;
    if (curSlid > 0) curSlid--;
    changeSlids();
  }

  function navigateRight() {
    if (animating) return;
    if (curSlid < numOfSlids) curSlid++;
    changeSlids();
  }

  $(document).on("mousedown touchstart", ".slidr", function(e) {
    if (animating) return;
    window.clearTimeout(autoSlidTimeout);
    var startX = e.pageX || e.originalEvent.touches[0].pageX,
        winW = $(window).width();
    diff = 0;
    
    $(document).on("mousemove touchmove", function(e) {
      var x = e.pageX || e.originalEvent.touches[0].pageX;
      diff = (startX - x) / winW * 70;
      if ((!curSlid && diff < 0) || (curSlid === numOfSlids && diff > 0)) diff /= 2;
      $slidr.css("transform", "translate3d("+ (-curSlid*100 - diff) +"%,0,0)");
      $slidBGs.css("transform", "translate3d("+ (curSlid*50 + diff/2) +"%,0,0)");
    });
  });
  
  $(document).on("mouseup touchend", function(e) {
    $(document).off("mousemove touchmove");
    if (animating) return;
    if (!diff) {
      changeSlids(true);
      return;
    }
    if (diff > -8 && diff < 8) {
      changeSlide();
      return;
    }
    if (diff <= -8) {
      navigateLeft();
    }
    if (diff >= 8) {
      navigateRight();
    }
  });
  
  $(document).on("click", ".slidr-control", function() {
    if ($(this).hasClass("left")) {
      navigateLeft();
    } else {
      navigateRight();
    }
  });
  
  $(document).on("click", ".slidr-pagi__elem", function() {
    curSlid = $(this).data("page");
    changeSlids();
  });
  
});