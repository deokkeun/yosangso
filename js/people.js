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

const list = document.querySelectorAll(".list");
const rightContent = document.querySelector(".content-box-right-content");
console.log(list);

for(let i = 0; i < list.length; i++) {
    list[i].addEventListener("click", e => {

        for(let x = 0; x < list.length; x++) {
            list[x].parentElement.style.backgroundColor = "white";
        }
        console.log(e.target.parentNode.parentNode);
        e.target.parentNode.parentNode.style.backgroundColor = "#E6F8ED";
        rightContent.style.backgroundColor = "#E6F8ED";
    });
};