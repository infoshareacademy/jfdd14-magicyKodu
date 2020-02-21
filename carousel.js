const heroSection = document.querySelector(".hero");
const btnNext = document.querySelector("#hero__btnNext");
const btnPrev = document.querySelector("#hero__btnPrev");
const btnCircle = document.getElementsByClassName("circle");

const arr = [1, 2, 3];
let num = 1;
let lastNum = arr[arr.length-1];

function changeImgToRight() {
    (num < lastNum ) ? num++ : num = 1;
    heroSection.classList = `hero hero${num}`;
}

function changeImgToLeft() {
    (num === 1) ? num = lastNum : num--;
    heroSection.classList = `hero hero${num}`;
}

function changeImgByCircle(){
    // btnCircle.classList.add("selected");
}


function addClickEvent(el, callback){
    el.addEventListener("click", callback)
}

addClickEvent(btnNext, changeImgToRight);
addClickEvent(btnPrev, changeImgToLeft);

// btnCircle.addEventListener("click", changeImgByCircle);







