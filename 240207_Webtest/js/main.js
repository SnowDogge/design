$(document).ready(function(){
    function webresize (){
        window_w = $(window).width()
        device_status = 'pc'
            if(window_w <= 640){
                device_status = 'mobile'
            }else{
                device_status = 'pc'
            }
        console.log(device_status)
    }

    webresize()

    $(window).resize(function(){
        webresize()
    })
    if(device_status == 'pc'){
        $('.header .gnb').on('mouseenter focusin', function() {
            $('header').addClass('menu_over')
        })
        $('.header').on('mouseleave', function() {
            $('header').removeClass('menu_over')
        })
        $('.header .gnb > ul > li:last-child > ul li:last-child > a').on('focusout', function() {
            $('header').removeClass('menu_over')
        })
    }else{
        $(".header .gnb ul.depth1 > li > a").on("click", function(e) {
            e.preventDefault();
            
            $(this).parent().toggleClass('sub_open');
        })
        $(".header .gnb .gnb_open").on("click", function() {
            $('.header').addClass('menu_open');
            $("html, body").css({overflow : "hidden", height : $(window).height()}).bind("scroll touchmove mousewheel", function(e){e.preventDefault();e.stopPropagation();return false;},function(){passive:false});
        })   
        $(".header .gnb .gnb_close").on("click", function() {
            $('.header').removeClass('menu_open');
            $("html, body").css({overflow : "visible", height : "auto"}).unbind('scroll touchmove mousewheel');
        }) 
    }
//    $('.header .gnb').mouseenter(function(){
//        $('.header').addClass(' menu_over');
//    })
//    $('.header .gnb').mouseleave(function(){
//        $('.header').removeClass(' menu_over');
//    })
});
