$(document).ready(function(){
    $('.header .gnb ul.depth1 > li').on('mouseenter focusin', function(){
        $('.header .gnb ul.depth1 > li').removeClass('sub_over')
        $(this).addClass('sub_over')
        $('.header').addClass('menu_over')
    })
    $('.header .gnb').on('mouseleave', function(){
        $('.header .gnb ul.depth1 > li').removeClass('sub_over')
        $('.header').removeClass('menu_over')
    })
    $('.header .tnb .search').on('focusin', function(){
        $('.header .gnb ul.depth1 > li').removeClass('sub_over')
        $('.header').removeClass('menu_over')
    })

    const swiper = new Swiper('.visual .swiper', {

        navigation: {
            nextEl: '.visual .next',
            prevEl: '.visual .prev',  
        },

    });
    

    $('.visual .ctrl_btn .stop').on('click', function(){
        swiper.autoplay.stop();
        $(this).hide()
        $('.visual .ctrl_btn .play').show()
    })
    $('.visual .ctrl_btn .play').on('click', function(){
        swiper.autoplay.start();
        $(this).hide()
        $('.visual .ctrl_btn .stop').show()
    })

    $('.lost .list > ul > li').on('click', function(){
        $('.lost .list > ul > li').removeClass('active')
        $(this).addClass('active')
    })

    const adopt_swiper = new Swiper('.adopt .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 2, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 0, /* 팝업과 팝업 사이 여백 */
        loop: true,
        breakpoints: {
            768: {    /* 768px 이상일때 적용 */
                slidesPerView: 3,
            },
            1024: {    /* 768px 이상일때 적용 */
                slidesPerView: 4,
            },
            1320: {    /* 1280px 이상일때 적용 */
                slidesPerView: 'auto',
            },
        },
        navigation: {
            nextEl: '.adopt .next',
            prevEl: '.adopt .prev',
        },
    });

    $('.adopt .ctrl_btn .stop').on('click', function(){
        adopt_swiper.autoplay.stop();
        $(this).hide()
        $('.adopt .ctrl_btn .play').show()
    })
    $('.adopt .ctrl_btn .play').on('click', function(){
        adopt_swiper.autoplay.start();
        $(this).hide()
        $('.adopt .ctrl_btn .stop').show()
    })

    $('.footer .family_site .site_open').on('click', function(){
        $('.footer .family_site .site_list').slidedown();
        $(this).hide()
        $('.footer .family_site .site_close').show()
    })
    $('.footer .family_site .site_close').on('click', function(){
        $('.footer .family_site .site_list').slideUp();
        $(this).hide()
        $('.footer .family_site .site_open').show()
    })
})