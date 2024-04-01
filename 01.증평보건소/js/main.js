$(document).ready(function(){

    const visual_swiper = new Swiper('.visual .swiper', {
        effect: "fade",
        autoplay: {
            delay: 5000,
            disableOnInteraction: true,
        },
        loop: true,
        navigation: {
            nextEl: '.visual .next',
            prevEl: '.visual .prev',  
        },
    });

})