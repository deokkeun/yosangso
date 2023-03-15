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

const LOGIN_ID = document.getElementById('LOGIN_ID');
const LOGIN_PW = document.getElementById('LOGIN_PW');
const LOGIN_BTN = document.getElementById('LOGIN_BTN');

function main(){
    location.replace("./login.html");
}

LOGIN_ID.addEventListener('keyup', color);
LOGIN_PW.addEventListener('keyup', color);
LOGIN_BTN.addEventListener('click',moveToMain);

// ----------------------------------------------------------- //