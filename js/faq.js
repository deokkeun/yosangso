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



$(document).ready(function(){
    $('ul.tap-list li').click(function(){
       
        var tab_id = $(this).attr('data-tab');
        
        $('ul.tap-list li').removeClass('current');
        $('.faq-contents').removeClass('current');
        
        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    })
});