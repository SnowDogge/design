$(document).ready(function(){
    var itemarr = ['.item11', '.item12', '.item13', '.item14', '.item15', '.item16', '.item21', '.item31', '.item32', '.item41', '.item42', '.item51', '.item52'];
    var device_status;
    var itemstep = [];
    var data;
    var chk;
    var age;
    
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
            //$(data).val("");
            $(data).focus();
            $(data).attr('style','border-color: #DD0000;');
            $('.box1 .alert').attr('style','display:block');
        } else {
            $(data).attr('style','border-color: #aaa;');
            $('.box1 .alert').attr('style','display:none');
            age = getage(dataval);
            chk++;
        }
    }
    function namechk(data) {
        var replaceId = /[~!@\#$%^&*\()\-=+_'\;<>0-9\/.\`:\"\\,\[\]?|{}]/gi;
	    var replaceNotInt = /[^0-9]/gi;
        
        if($(data).val().match(replaceId) || !$(data).val()){
            //$(data).val("");
            $(data).focus();
            $(data).attr('style','border-color: #DD0000;');
            $('.name_box .alert').attr('style','display:block');
        } else {
            $(data).attr('style','border-color: #aaa;');
            $('.name_box .alert').attr('style','display:none');
            chk++;
        }
    };
    function numchk(data){
        var dataval = $(data).val();
        if(!$.isNumeric($(data).val()) || dataval.length < 11){
            //$(data).val("");
            $(data).focus();
            $(data).attr('style','border-color: #DD0000;');
            $('.phone_box .alert').attr('style','display:block');
        } else {
            $(data).attr('style','border-color: #aaa;');
            $('.phone_box .alert').attr('style','display:none');
            chk++;
        }
    }

    function reroll() {
        var roll = [];
        for (i = 0; i <= 5; i++) {
            var randv = Math.floor(Math.random()*13);
            if (roll.indexOf(randv) === -1) {
                roll.push(randv);
                $(itemarr[randv]).attr('style','display:block');
            } else {
                i--
            }
        }
    }
    function getage(birthday) {
        const year = Number(birthday.substr(0, 4));
        
        let today = new Date();
        let yearNow = Number(today.getFullYear());
        let getage = Number(yearNow - year + 1);

        return getage;
     }
     function restartAnimation (e, count) {
        $(e).removeClass('animationClass');
        //$(e).attr('style','display:block; opacity: 0; animation-fill-mode:forwards;');
        itemstep.push(tt);
        itemstep.sort();
        console.log(itemstep);
        setTimeout(() => {
            $(e).addClass('animationClass');
          }, 0);
    }

    $('.search .inner_search .submit').on('click', function(){
        chk = 0;
        datechk('#birth_input');
        namechk('#name_input');
        numchk('#phone_input');
        if(chk >= 3){
            var itemcount = 0;
            var item4 = 0;
            itemstep = [];
            $('.inner_result .result li').attr('style','display:none');
            if(age > 65 && itemcount < 6){
                tt = '.item15';
                restartAnimation(tt, 15);
                itemcount++;
                tt = '.item16';
                restartAnimation(tt, 16);
                itemcount++;
            }
            if(age < 30 && itemcount < 6){
                tt = '.item13';
                restartAnimation(tt, 13);
                itemcount++;
            }
            if(age > 35 && age < 66 && itemcount < 6){
                var ran = Math.floor(Math.random()*2);
                if(ran == 0){
                    tt = '.item31';
                    restartAnimation(tt, 31);
                } else {
                    tt = '.item32';
                    restartAnimation(tt, 32);
                }
                itemcount+=2;
            }
            if(age > 21 && age < 55 && itemcount < 6){
                var ran = Math.floor(Math.random()*2);
                if(ran == 0){
                    tt = '.item41';
                    restartAnimation(tt, 41);
                    item4 = 0;
                } else {
                    tt = '.item42';
                    restartAnimation(tt, 42);
                    item4 = 1;
                }
                itemcount++;
            }
            if(age > 40 && itemcount < 6){
                tt = '.item21';
                restartAnimation(tt, 21);
                itemcount++;
            }
            if(age > 20 && age < 70 && itemcount < 6){
                tt = '.item11';
                restartAnimation(tt, 11);
                itemcount++;
            }
            if(itemcount < 6){
                tt = '.item14';
                restartAnimation(tt, 14);
                itemcount++;
            }

            if(age > 21 && age < 55 && itemcount < 6){
                if(item4 == 0) {
                    tt = '.item42';
                    restartAnimation(tt, 42);
                } else {
                    tt = '.item41';
                    restartAnimation(tt, 41);
                }
                itemcount++;
            }
            if(itemcount >= 1){
                $(itemstep[0]).attr('style','display:block; opacity: 0; animation-delay:0; animation-fill-mode:forwards;');
            }
            if(itemcount >= 2){
                $(itemstep[1]).attr('style','display:block; opacity: 0; animation-delay:0.1s; animation-fill-mode:forwards;');
            }
            if(itemcount >= 3){
                $(itemstep[2]).attr('style','display:block; opacity: 0; animation-delay:0.2s; animation-fill-mode:forwards;');
            }
            if(itemcount >= 4){
                $(itemstep[3]).attr('style','display:block; opacity: 0; animation-delay:0.3s; animation-fill-mode:forwards;');
            }
            if(itemcount >= 5){
                $(itemstep[4]).attr('style','display:block; opacity: 0; animation-delay:0.4s; animation-fill-mode:forwards;');
            }
            if(itemcount >= 6){
                $(itemstep[5]).attr('style','display:block; opacity: 0; animation-delay:0.5s; animation-fill-mode:forwards;');
            }
        }
    })

    device_chk();
    reroll();
})