/* $(document).ready(function() {
    function counting (){
        $('.counter').each(function() { // .count-num에 각각 적용
            var $this = $(this),
            countTo = $this.attr('data-end');
                
            $({countNum: $this.text()}).animate({
                countNum: countTo 
                },{
                duration: 3000,
                easing:'linear',
                step: function() {
                $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                $this.text(this.countNum);
                }
            });  
        });
    }
}) */