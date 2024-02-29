$(document).ready(function(){
    var device_status;
    var window_w
    var scrolling;

    function device_chk(){
        window_w = $(window).width();
        if(window_w > 1024) {
            device_status = 1;
        }else{
            device_status = 0;
        }
    }
    function scroll_chk(){
        scrolling = $(window).scrollTop();
        if (scrolling) {
              $('.header').addClass('fixed',1000);
        } else {
            $('.header').removeClass('fixed',1000);
        }
    }

    $('.header .gnb ul.depth1 > li').on('mouseenter focusin', function(){
        if(device_status) {
            $('.header').addClass('menu_over');
            $('.header .gnb ul.depth1 > li').removeClass('on');
            $(this).addClass('on');
        }
    });
    $('.header .gnb ul.depth1 > li').on('mouseleave', function(){
        if(device_status) {
            $('.header .gnb ul.depth1 > li').removeClass('on');
            $('.header').removeClass('menu_over');
        }
    });
    $('.header .tnb .lang').on('focusin', function(){
        if(device_status) {
            $('.header .gnb ul.depth1 > li').removeClass('on')
            $('.header').removeClass('menu_over')
        }
    })
    $(".header .gnb ul.depth1 > li > a").on("click", function(e){
        if(!device_status){
            e.preventDefault();
            $(".header .gnb ul.depth1 > li").removeClass('on');
            $(this).parent().addClass('on');
        }
	});
    $(".header .gnb .gnb_open").on("click", function(){
        $('header').addClass('menu_open');
        $("html, body").css({overflow : "hidden", height : $(window).height()}).bind("scroll touchmove mousewheel", function(e){e.preventDefault();e.stopPropagation();return false;},function(){passive:false});
    })
    $(".header .gnb .gnb_close").on("click", function(){
        $('header').removeClass('menu_open');
        $("html, body").css({overflow : "visible", height : "auto"}).unbind('scroll touchmove mousewheel');
    })


    scroll_chk();
    device_chk();

    $(window).scroll(function(){
        scroll_chk();
    });
    $(window).resize(function(){
        device_chk();
    })
});