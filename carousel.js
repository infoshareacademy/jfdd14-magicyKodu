const heroSection = document.querySelector(".hero");
const btnNext = document.querySelector("#hero__btnNext");
const btnPrev = document.querySelector("#hero__btnPrev");
const btnCircle1 = document.querySelector("#hero__circle1");
const btnCircle2 = document.querySelector("#hero__circle2");
const btnCircle3 = document.querySelector("#hero__circle3");

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

function changeImgByCircle1(){
    num = 1;
    heroSection.classList = `hero hero${num}`;
    btnCircle1.style.color = "#28bb76";
    btnCircle2.style.color = "white";
    btnCircle3.style.color = "white";
}

function changeImgByCircle2(){
    num = 2;
    heroSection.classList = `hero hero${num}`;
    btnCircle1.style.color = "white";
    btnCircle2.style.color = "#28bb76";
    btnCircle3.style.color = "white";
}

function changeImgByCircle3(){
    num = 3;
    heroSection.classList = `hero hero${num}`;
    btnCircle1.style.color = "white";
    btnCircle2.style.color = "white";
    btnCircle3.style.color = "#28bb76";
}

function addClickEvent(el, callback){
    el.addEventListener("click", callback)
}

function myFunc() {
    btnCircle1.style.color = "#28bb76";
}

addClickEvent(btnNext, changeImgToRight);
addClickEvent(btnPrev, changeImgToLeft);

btnCircle1.addEventListener("click", changeImgByCircle1);
btnCircle2.addEventListener("click", changeImgByCircle2);
btnCircle3.addEventListener("click", changeImgByCircle3);

window.addEventListener("load", myFunc);







