$(document).ready(function(){
    const myFullpage = new fullpage('#fullpage', {

    navigation: true,
    navigationPosition: 'left',
    navigationTooltips: ['MAIN', '나무심기', '활동소개', '활동이야기'],
    showActiveTooltip: true,

    autoScrolling:true,
    scrollHorizontally: true,

    verticalCentered: true,

    afterLoad: function(origin, destination, direction, trigger){
        if((destination.index == 1) || (destination.index == 3)){
            console.log('3번째 슬라이드가 로딩 되었을때');
        } else {
            
        }
    },

    responsiveWidth: 640
});
})

