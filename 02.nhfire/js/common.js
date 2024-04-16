$(document).ready(function(){
    var device_status;
    var data;
    
    $('footer .f_top .f_link .open').on('click', function(){
        $(".f_link").addClass('open');
    })
    $('footer .f_top .f_link .close').on('click', function(){
        $(".f_link").removeClass('open');
    })

    $('header .gnb .depth1 > li').on('mouseenter focusin', function(){
        if(device_status == 'pc') {
            $('header .gnb .depth1 > li').removeClass('on');
            $(this).addClass('on');
            $('header').addClass('menu_over');
        }
        
    })
    $('header').on('mouseleave', function(){
        if(device_status == 'pc') {
            $('header .gnb .depth1 > li').removeClass('on');
            $('header').removeClass('menu_over');
        }
    })
    $('header .gnb .depth1 > li:last-child > .depth2 > li:last-child > a').on('focusout', function(){
        if(device_status == 'pc') {
            $('header .gnb .depth1 > li').removeClass('on');
            $('header').removeClass('menu_over');
        }
    })

    function device_chk(){
        var window_w = $(window).width();
        if(window_w > 1240){
            device_status = 'pc';
        }else{
            device_status = 'mobile';
        }
        console.log(device_status);
        console.log(window_w);
    }
    function datechk(data){
        var dataval = $(data).val();
        if(!$.isNumeric($(data).val()) || dataval.length < 8){
            $(data).val("");
            $(data).focus();
            $(data).attr('style','border-color: #DD0000;');
            $('.box1 .alert').attr('style','display:block');
        } else {
            $(data).attr('style','border-color: #aaa;');
            $('.box1 .alert').attr('style','display:none');
        }
    }
    function namechk(data) {
        var replaceId = /[~!@\#$%^&*\()\-=+_'\;<>0-9\/.\`:\"\\,\[\]?|{}]/gi;
	    var replaceNotInt = /[^0-9]/gi;
        
        if($(data).val().match(replaceId) || !$(data).val()){
            $(data).val("");
            $(data).focus();
            $(data).attr('style','border-color: #DD0000;');
            $('.box2 .alert').attr('style','display:block');
        } else {
            $(data).attr('style','border-color: #aaa;');
            $('.box2 .alert').attr('style','display:none');
        }
    };
    function numchk(data){
        var dataval = $(data).val();
        if(!$.isNumeric($(data).val()) || dataval.length < 11){
            $(data).val("");
            $(data).focus();
            $(data).attr('style','border-color: #DD0000;');
            $('.box3 .alert').attr('style','display:block');
        } else {
            $(data).attr('style','border-color: #aaa;');
            $('.box3 .alert').attr('style','display:none');
        }
    }

    $('.search .inner_search .submit').on('click', function(){
        datechk('#birth_input');
        namechk('#name_input');
        numchk('#phone_input');
    })

    device_chk();
})