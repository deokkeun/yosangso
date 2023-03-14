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
// 요청사항
const regExpRequest = /^[a-zA-Zㄱ-힣가-힣0-9\.\?\!\~\@\^\s]{1,150}$/;
let request = document.getElementById("request");
let counter = document.querySelector(".counter");

request.addEventListener("keyup", function() {
    if(regExpRequest.test(request.value)) {
        counter.innerText = request.value.length;

        if(this.value.length <= 130) {
            counter.style.color = "black";
        }
        else if(this.value.length <= 149) {
            counter.style.color = "orange";
        } else {
            counter.style.color = "red";
        }
    }else if(request.value.length == 0) {
        counter.style.color = "black";
        counter.innerText = "0";
    }
});


// 슬라이드쇼
const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slides li");
let currentIdx = 0;
const slideCount = slide.length;
const slideWidth = 200;
const slideMargin = 30;
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

makeClone();

function makeClone() {
    for(let i = 0; i < slideCount; i++) {
        // a.cloneNode(), a.cloneNode(true)
        let cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add("clone");
        slides.appendChild(cloneSlide);
    }
    for(let i = slideCount - 1; i >= 0; i--) {
        // a.cloneNode(), a.cloneNode(true)
        let cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add("clone");
        slides.prepend(cloneSlide);
    }
    updateWidth();
    setInitialPos();
   setTimeout(function() {
       slides.classList.add('animated');
   }, 100);
}

function updateWidth() {
    const currentSlides = document.querySelectorAll(".slides li");
    const newSlidesCount = currentSlides.length;

    const newWidth = (slideWidth + slideMargin) * newSlidesCount - slideMargin + "px";
    slides.style.width = newWidth;
}

function setInitialPos() {
    const initialTranslateValue = -(slideWidth + slideMargin) * slideCount;
    slides.style.transform = "translateX(" + initialTranslateValue + "px)";
}
nextBtn.addEventListener("click", function() {
    moveSlide(currentIdx + 1);
});
prevBtn.addEventListener("click", function() {
    moveSlide(currentIdx - 1);
});

function moveSlide(num) {
    slides.style.left = -num * (slideWidth + slideMargin) + "px";
    currentIdx = num;
    console.log(currentIdx, slideCount);

    if(currentIdx == slideCount || currentIdx == -slideCount) {

        setTimeout(function() {
            slides.classList.remove("animated");
            slides.style.left = "0px";
            currentIdx = 0;
        }, 500);
        setTimeout(function() {
            slides.classList.add("animated");
        }, 600);
    }

}