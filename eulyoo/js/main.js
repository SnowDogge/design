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

    $(window).scroll(function(){
        scroll_chk();
    });
    $(window).resize(function(){
        webresize()
    })
    $('.header').on('mouseenter focusin', function() {
        $('header').addClass('menu_over')
    })
    $('.header').on('mouseleave', function() {
        $('header').removeClass('menu_over')
    })

    //visual 팝업을 작동시키는 라이브러리
    const swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

        effect: "fade", /* fade 효과 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: 5000,
            disableOnInteraction: true,
        },

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.visual .pagination', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
            //type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
        },

        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.visual .next',  /* 다음 버튼의 클래스명 */
            prevEl: '.visual .prev',  
        },

    });
      /* 일시정지 기능 */

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
})