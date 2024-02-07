$(document).ready(function(){
    $('.header .gnb').on('mouseenter', function() {
        $('header').addClass('menu_over')
    })
    $('.header').on('mouseleave', function() {
        $('header').removeClass('menu_over')
    })
//    $('.header .gnb').mouseenter(function(){
//        $('.header').addClass(' menu_over');
//    })
//    $('.header .gnb').mouseleave(function(){
//        $('.header').removeClass(' menu_over');
//    })
});
