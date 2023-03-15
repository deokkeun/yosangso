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

const agree = document.getElementById("agree");
const agreeAll = document.getElementsByName("agree");
const agreeSub = document.querySelector(".agree-box2");

document.querySelector(".agree-box1").addEventListener("click", function() {
    if(agree.checked) {
        for(let agree of agreeAll) {
            agree.setAttribute("checked", "true");
        }
        agreeSub.style.transitionDuration = "1s";
        agreeSub.style.height = "210px";
        agreeSub.style.borderTop = "1px solid rgba(0, 0, 0, 0.2)";
        agreeSub.style.borderBottom = "1px solid rgba(0, 0, 0, 0.2)";
        this.style.backgroundColor = "rgba(0, 0, 0, 0.05)";
        this.style.color = "black";
    } else {
        agreeSub.style.height = "0px";
        agreeSub.style.borderTop = "none";
        agreeSub.style.borderBottom = "none";
        this.style.backgroundColor = "transparent";
    }
});

