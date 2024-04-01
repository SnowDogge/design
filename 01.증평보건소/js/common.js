$(document).ready(function(){
    var scroll_prev

    $('footer .footer_top .f_link .open').on('click', function(){
        $(".f_link").addClass('open');
    })
    $('footer .footer_top .f_link .close').on('click', function(){
        $(".f_link").removeClass('open');
    })

    function scroll_chk(){
        var scrolled = $(window).scrollTop();
        console.log(scroll_prev);
        console.log(scrolled);
        if(scroll_prev < scrolled) {
            $('header').attr('style','transform: translate(0, -50px)');
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