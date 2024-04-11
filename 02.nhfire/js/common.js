$(document).ready(function(){
    var scroll_prev;
    var device_status;

    $('footer .footer_top .f_link .open').on('click', function(){
        $(".f_link").addClass('open');
    })
    $('footer .footer_top .f_link .close').on('click', function(){
        $(".f_link").removeClass('open');
    })

        $('header .gnb .depth1 > li').on('mouseenter focusin', function(){
            if(device_status == 'pc') {
                $('header .gnb .depth1 > li').removeClass('on');
                $(this).addClass('on');
                $('header').addClass('menu_over');
            }
            
        })
        $('header').on('mouseleave', function(){
            if(device_status == 'pc') {
                $('header .gnb .depth1 > li').removeClass('on');
                $('header').removeClass('menu_over');
            }
        })
        $('header .gnb .depth1 > li:last-child > .depth2 > li:last-child > a').on('focusout', function(){
            if(device_status == 'pc') {
                $('header .gnb .depth1 > li').removeClass('on');
                $('header').removeClass('menu_over');
            }
        })
        $('.header .gnb .gnb_open').on('click', function(){
            if(device_status == 'mobile') {
                $('.header').addClass('menu_open');
                $('.container .bright').css({display : "block"});
                $("html, body").css({overflow : "hidden", height : $(window).height()}).bind("scroll touchmove mousewheel", function(e){e.preventDefault();e.stopPropagation();return false;},function(){passive:false});
            }
        })
        $('.header .gnb .gnb_close').on('click', function(){
            if(device_status == 'mobile') {
                $('.header').removeClass('menu_open');
                $('.container .bright').css({display : "none"});
                $("html, body").css({overflow : "visible", height : "auto"}).unbind('scroll touchmove mousewheel');
            }
        })
        $('header .gnb ul.depth1 > li > a').on("click", function(e){
            if(device_status == 'mobile') {
                e.preventDefault();
                if($(this).parent().hasClass("on") == false) {
                    $('header .gnb .depth1 > li').removeClass('on');
                    $(this).parent().addClass('on');
                    
                } else {
                    $('header .gnb .depth1 > li').removeClass('on');
                }
            }
        })

    function device_chk(){
        var window_w = $(window).width();
        if(window_w > 1240){
            device_status = 'pc';
            $('.container .bright').css({display : "none"});
        }else{
            device_status = 'mobile';
        }
        console.log(device_status);
        console.log(window_w);
    }

    function scroll_chk(){
        var scrolled = $(window).scrollTop();
        console.log(scroll_prev);
        console.log(scrolled);
        if(device_status == 'pc'){
            if(scroll_prev < scrolled) {
                $("html, body").css({overflow : "visible", height : "auto"}).unbind('scroll touchmove mousewheel');
                $('header').attr('style','transform: translate(0, -50px)');
                $('header').removeClass('menu_over')
            } else {
                $('header').attr('style','transform: translate(0, 0)');
            }
        }
        scroll_prev = scrolled;
    }
    $(window).scroll(function(){
        scroll_chk();
    })
    $(window).resize(function(){
        device_chk();
    })

    scroll_chk();
    device_chk();
})