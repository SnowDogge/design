$(document).ready(function(){
    var device_status;
    
    $('footer .f_top .f_link .open').on('click', function(){
        $(".f_link").addClass('open');
    })
    $('footer .f_top .f_link .close').on('click', function(){
        $(".f_link").removeClass('open');
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

    device_chk();
})