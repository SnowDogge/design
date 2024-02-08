/* $(document).ready(function(){
    $(window).scroll(function(){
        var scrolling = $(window).scrollTop();
        if (scrolling) {
            $('.header').addClass('fixed',1000);
        } else {
            $('.header').removeClass('fixed',1000);
        }
    });
}); */
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
});