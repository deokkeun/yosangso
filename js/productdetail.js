// 검색창
const searchForm = document.querySelector("#search-area fieldset");

document.getElementById("query").addEventListener("focus", e => {
    searchForm.style.border = "1px solid #2678F3";
});
document.getElementById("query").addEventListener("focusout", e => {
    searchForm.style.border = "";
    // e.target.value = "";
});
document.getElementById("query").addEventListener("mouseover", e => {
    searchForm.style.border = "1px solid rgba(0, 0, 0, 0.2)";
});

/* ----------------------------------------------------------- */
let curPos = 0; // 현재 보이는 요소의 인덱스 번호

function prev(){
    if(curPos > 0){
        $("button").removeAttr("disabled") // 모든 버튼 사용할 수 있게!
        // toggleClass : 클래스가 있으면 제거, 없으면 생성!
        $($(".item")[curPos]).toggleClass("active")
        $($(".step")[curPos]).toggleClass("active-step")
        $(".item").hide();
        curPos -= 1;
        $($(".item")[curPos]).toggleClass("active")
        $($(".step")[curPos]).toggleClass("active-step")
        $(".active").fadeIn(800); // 새로운 액티브 요소만 스르륵 나타난다
    }
    if(curPos == 0){
        $(".prev")[0].setAttribute("disabled",'true')
    }
}
function next(){
    if(curPos < 3){
        $("button").removeAttr("disabled")
        $($(".item")[curPos]).toggleClass("active")
        $($(".step")[curPos]).toggleClass("active-step")
        $(".item").hide();
        curPos += 1;
        $($(".item")[curPos]).toggleClass("active")
        $($(".step")[curPos]).toggleClass("active-step")
        $(".active").fadeIn(800); 
    }
    if(curPos == 3){
        $(".next")[0].setAttribute("disabled",'true')
    }
}
function init(){
    $(".item").hide()
    $(".active").show()
    $(".prev").click(prev)
    $(".next").click(next)
}
$(document).ready(function() {
    init();
})


$(".que").click(function() {
    $(this).next(".anw").stop().slideToggle(300);
   $(this).toggleClass('on').siblings().removeClass('on');
   $(this).next(".anw").siblings(".anw").slideUp(300); // 1개씩 펼치기
 });

 $(document).ready(function(){
    $('.post-wrap').slick({
        
        arrows : true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: "<button type='button' class='slick-next'><img src='/images/right.png' style='width:30px;'></button>",
        prevArrow: "<button type='button' class='slick-prev'><img src='/images/left.png' style='width:30px;'></button>"
    })
});