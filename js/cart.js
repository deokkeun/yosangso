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

// cart slider

$(document).ready(function(){
    $('.post-wrap').slick({
        
        arrows : true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: "<button type='button' class='slick-next'><img src='../html/image/right.png' style='width:30px;'></button>",
        prevArrow: "<button type='button' class='slick-prev'><img src='../html/image/left.png' style='width:30px;'></button>"
    })
})
