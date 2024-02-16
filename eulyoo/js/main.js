$(document).ready(function(){
    var scrolling;
    scroll_chk();

    function scroll_chk(){
        scrolling = $(window).scrollTop();
        if (scrolling) {
            $('.header').addClass('fixed',1000);
        } else {
            $('.header').removeClass('fixed',1000);
        }
    }
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

    const swiper = new Swiper('.visual .swiper', {

        effect: "fade",

        autoplay: {
            delay: 5000,
            disableOnInteraction: true,
        },

        loop: true,

        pagination: { 
            el: '.visual .pagination',
            clickable: true, 
        },

        navigation: {
            nextEl: '.visual .next',
            prevEl: '.visual .prev',  
        },

    });

    $('.interview .list ul li').on('mouseenter', function(){
        $('.interview .list ul li').removeClass('active');
        $(this).addClass('active');
    });

    $('.visual .swiper .stop').on('click', function(){
        $('.visual .swiper .play').show();
        $('.visual .swiper .stop').hide();
        swiper.autoplay.stop();
    })
    $('.visual .swiper .play').on('click', function(){
        $('.visual .swiper .stop').show();
        $('.visual .swiper .play').hide();
        swiper.autoplay.start();
    })

    $(window).scroll(function(){
        scroll_chk();
    });
})



/* $(window).resize(function(){
        webresize()
    })
    $('.header').on('mouseenter focusin', function() {
        $('header').addClass('menu_over')
    })
    $('.header').on('mouseleave', function() {
        $('header').removeClass('menu_over')
    }) */