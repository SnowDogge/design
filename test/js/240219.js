$(document).ready(function(){

    $('.header .gnb .gnb_btn').on('click', function(){
        if($(this).hasClass('open') == true) {
            $('header').addClass('menu_open')
            $(this).removeClass('open')
            $(this).addClass('close')
            $('.header .gnb .gnb_btn button').text('메뉴닫기');
        } else {
            $('header').removeClass('menu_open')
            $(this).removeClass('close')
            $(this).addClass('open')
            $('.header .gnb .gnb_btn button').text('메뉴열기');
        }
    });

    $('header .gnb ul.depth1 > li > a').on('click'), function(e) {
        e.preventDefault();
        let open_status = $(this).parent().hasClass('sub_open')
        if(open_status == true) {
            $(this).parent().removeClass('sub_open')
            $(this).parent().find('ul.depth2').slideUp()
        } else {
            $(this).parent().addClass('sub_open')
            $(this).parent().find('ul.depth2').slideDown()
        }
    }
});