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


/* ----------------------------------------------------------- */


// 메인페이지 사진 슬라이더 영역
var idx_lgth = $("#visual>div").length;
  var srt = 1;
  
  $("section>a").click(function(){
    var idx = $(this).index();
    srt = idx;
    $(this).addClass('on').siblings().removeClass('on');
    $("#visual>div").eq(idx).addClass('on').siblings().removeClass('on');
  });
  
setInterval(AutoRun, 3000);
  
function AutoRun(){
  if(srt == idx_lgth){
      srt = 0;  
  }
  $("section>a").eq(srt).addClass('on').siblings().removeClass('on');
  $("#visual>div").eq(srt).addClass('on').siblings().removeClass('on');
  srt++;  
}


/* ----------------------------------------------------------- */
// 메인페이지 top버튼 숨김/나타남 스크립트

$(function() {
    $(window).scroll(function() { 
      if ($(this).scrollTop() > 200) { 
        $('#topBtn').fadeIn(); } 
      else { $('#topBtn').fadeOut(); }
    }); 
    $("#topBtn").click(function() { 
       $('html, body').animate({ scrollTop : 0  }, 300); 
      return false; });
  });
  
  