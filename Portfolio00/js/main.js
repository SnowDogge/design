
let ypos; // 스크롤 위치를 추적하기 위한 변수입니다.

// 패럴랙스 효과를 관리하는 함수입니다.
function parallax() {
    ypos = $(window).scrollTop(); // 현재 window의 스크롤 위치를 가져옵니다.
    updatePosition('.bg', ypos, 0.8, 'top'); // 배경에 대한 top 위치 업데이트
    updatePosition('.parallax .fast', ypos, 0.2, 'margin-top'); // 빠른 속도로 움직이는 요소 위치 업데이트
    updatePosition('.parallax .slow', ypos, 0.6, 'margin-top'); // 느린 속도로 움직이는 요소 위치 업데이트
}

// 주어진 요소의 위치를 업데이트하는 함수입니다.
function updatePosition(selector, scrollPos, factor, type) {
    $(selector).css(type, `${scrollPos * factor}px`); // 계산된 값을 사용하여 CSS 속성값을 설정합니다.
}

// 스크롤 이벤트가 발생할 때 parallax 함수를 호출합니다.
$(window).on('scroll', function () {
    requestAnimationFrame(parallax);
});

// 초기 실행을 통해 패럴랙스 효과를 활성화합니다.
parallax();