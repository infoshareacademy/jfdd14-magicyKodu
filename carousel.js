const heroSection = document.querySelector(".hero");
const arrowNext = document.querySelector("#hero__arrowNext");
const arrowPrev = document.querySelector("#hero__arrowPrev");
const dot1 = document.querySelector("#hero__dot1");
const dot2 = document.querySelector("#hero__dot2");
const dot3 = document.querySelector("#hero__dot3");
// const dots = document.querySelectorAll(".hero__dot");

const arr = [1, 2, 3];
let num = 1;
let lastNum = arr[arr.length-1];

paintDot(num);

function changeImgToRight() {
    (num < lastNum ) ? num++ : num = 1;
    heroSection.classList = `hero hero${num}`;
    paintDot(num);
}

function changeImgToLeft() {
    (num === 1) ? num = lastNum : num--;
    heroSection.classList = `hero hero${num}`;
    paintDot(num);
}

function change(num){
    heroSection.classList = `hero hero${num}`;
    paintDot(num);    
}

function paintDot(num){
    if (num === 1){
        dot1.classList.add("active");
        dot2.classList.remove("active");
        dot3.classList.remove("active");
    } else if (num === 2){
        dot1.classList.remove("active");
        dot2.classList.add("active");
        dot3.classList.remove("active");
    } else {
        dot1.classList.remove("active");
        dot2.classList.remove("active");
        dot3.classList.add("active");   
    }
}

arrowNext.addEventListener("click", changeImgToRight);
arrowPrev.addEventListener("click", changeImgToLeft);












