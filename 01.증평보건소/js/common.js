$(document).ready(function(){
    var scroll_prev
    var device_status = 'pc'

    $('footer .footer_top .f_link .open').on('click', function(){
        $(".f_link").addClass('open');
    })
    $('footer .footer_top .f_link .close').on('click', function(){
        $(".f_link").removeClass('open');
    })

    $('header .gnb .depth1 > li').on('mouseenter focusin', function(){
        if(device_status == 'pc'){
            $('header .gnb .depth1 > li').removeClass('on')
            $(this).addClass('on')
            $('header').addClass('menu_over')
        }
    })
    $('header').on('mouseleave', function(){
        if(device_status == 'pc'){
            $('header .gnb .depth1 > li').removeClass('on')
            $('header').removeClass('menu_over')
        }
    })
    $('header .gnb .depth1 > li:last-child > .depth2 > li:last-child > a').on('focusout', function(){
        if(device_status == 'pc'){
            $('header .gnb .depth1 > li').removeClass('on')
            $('header').removeClass('menu_over')
        }
    })

    function scroll_chk(){
        var scrolled = $(window).scrollTop();
        console.log(scroll_prev);
        console.log(scrolled);
        if(scroll_prev < scrolled) {
            $('header').attr('style','transform: translate(0, -50px)');
            $('header').removeClass('menu_over')
        } else {
            $('header').attr('style','transform: translate(0, 0)');
        }
        scroll_prev = scrolled;
    }
    scroll_chk();
    $(window).scroll(function(){
        scroll_chk();
    })
})