$(document).ready(function(){
    $(window).scroll(function(){
        var scrolling = $(window).scrollTop();
        if (scrolling) {
            $('.header').addClass('fixed',1000);
        } else {
            $('.header').removeClass('fixed',1000);
        }
    });
});