$(document).ready(function(){
    var window_w

    function device_chk(){
        window_w = $(window).scrollTop();
        console.log(window_w);
    }
    
    device_chk();

    $(window).scroll(function(){
        device_chk();
        if (window_w >= 1400) {
            $('.gnb ul li').removeClass('on');
            $('.gnb ul .gnb3').addClass('on');
        }
        if (window_w >= 450 && window_w < 1400) {
            $('.gnb ul li').removeClass('on');
            $('.gnb ul .gnb2').addClass('on');
        }
        if (window_w < 450) {
            $('.gnb ul li').removeClass('on');
            $('.gnb ul .gnb1').addClass('on');
        }
    })
    $('.gnb .gnb1').on('click', function(){
        $('html, body').animate({
            scrollTop: 0
        }, 500)
    })
    $('.gnb .gnb2').on('click', function(){
        $('html, body').animate({
            scrollTop: 950
        }, 500)
    })
    $('.gnb .gnb3').on('click', function(){
        $('html, body').animate({
            scrollTop: 1770
        }, 500)
    })
})