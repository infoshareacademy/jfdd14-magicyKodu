const heroSection = document.querySelector(".hero");
const arrowNext = document.querySelector("#hero__arrowNext");
const arrowPrev = document.querySelector("#hero__arrowPrev");
const dot1 = document.querySelector("#hero__dot1");
const dot2 = document.querySelector("#hero__dot2");
const dot3 = document.querySelector("#hero__dot3");

const arr = [1, 2, 3];
// let num = 1;
let lastNum = arr[arr.length-1];

myFunc();

function changeImgToRight() {
    (num < lastNum ) ? num++ : num = 1;
    heroSection.classList = `hero hero${num}`;
}

function changeImgToLeft() {
    (num === 1) ? num = lastNum : num--;
    heroSection.classList = `hero hero${num}`;
}

function changeImgByCircle1(){
    num = 1;
    heroSection.classList = `hero hero${num}`;
    dot1.style.color = "#28bb76";
    dot2.style.color = "white";
    dot3.style.color = "white";
}

function changeImgByCircle2(){
    num = 2;
    heroSection.classList = `hero hero${num}`;
    dot1.style.color = "white";
    dot2.style.color = "#28bb76";
    dot3.style.color = "white";
}

function changeImgByCircle3(){
    num = 3;
    heroSection.classList = `hero hero${num}`;
    dot1.style.color = "white";
    dot2.style.color = "white";
    dot3.style.color = "#28bb76";
}



function addClickEvent(el, callback){
    el.addEventListener("click", callback)
}

function myFunc() {
    dot1.style.color = "#28bb76";
}

addClickEvent(arrowNext, changeImgToRight);
addClickEvent(arrowPrev, changeImgToLeft);

dot1.addEventListener("click", changeImgByCircle1);
dot2.addEventListener("click", changeImgByCircle2);
dot3.addEventListener("click", changeImgByCircle3);










