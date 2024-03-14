$(document).ready(function(){
    var device_status;
    var scroll_prev;

    const swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */
        autoplay: {  /* 팝업 자동 실행 */
            delay: 3000,
            disableOnInteraction: true,
        },
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
    });
    function scroll_chk(){
        scrolling = $(window).scrollTop();
        if (scrolling > 150) {
            $('header').addClass('fixed',1000);
            if (scroll_prev > scrolling) {
                $('header').attr('style','transform: translate(0, 0)')
                
            } else {
                $('header').attr('style','transform: translate(0, -100px)')
                $('header .gnb ul.depth1 > li').removeClass('on');
                $('header').removeClass('menu_over');
            }
            scroll_prev = scrolling;
        } else {
            $('header').removeClass('fixed',1000);
            $('header').attr('style','transform: translate(0, 0)')
        }
    }

    function device_chk(){
        window_w = $(window).width();
        if(window_w > 1024) {
            device_status = 1;
        }else{
            device_status = 0;
        }
    }

    $(window).scroll(function(){
        scroll_chk();
    });

    $('header .gnb ul.depth1 > li').on('mouseenter focusin', function(){
        if(device_status) {
            $('header').addClass('menu_over');
            $('header .gnb ul.depth1 > li').removeClass('on');
            $(this).addClass('on');
        }
    });
    $('header .gnb ul.depth1 > li').on('mouseleave', function(){
        if(device_status) {
            $('header .gnb ul.depth1 > li').removeClass('on');
            $('header').removeClass('menu_over');
        }
    });
    $('header .tnb .lang').on('focusin', function(){
        if(device_status) {
            $('header .gnb ul.depth1 > li').removeClass('on')
            $('header').removeClass('menu_over')
        }
    })
    $("header .gnb ul.depth1 > li > a").on("click", function(e){
        if(!device_status){
            e.preventDefault();
            $("header .gnb ul.depth1 > li").removeClass('on');
            $(this).parent().addClass('on');
        }
	});

    scroll_chk();
    device_chk();
})