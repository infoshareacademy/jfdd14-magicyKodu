const heroSection = document.querySelector(".hero");
const arrowNext = document.querySelector("#hero__arrowNext");
const arrowPrev = document.querySelector("#hero__arrowPrev");
const dot1 = document.querySelector("#hero__dot1");
const dot2 = document.querySelector("#hero__dot2");
const dot3 = document.querySelector("#hero__dot3");

//array from slides/images
const arr = [1, 2, 3];
let num = 1;

//last number in array
let lastNum = arr[arr.length-1];

//declaration of variable (crusial from interval point of view)
let changeImgAuto;

//changing slide/image when click on right arrow
const changeImgToRight = function(e) {
    (num < lastNum ) ? num++ : num = 1;
    heroSection.classList = `hero hero${num}`;
    paintDot(num);
}

//changing silde/image when click on left arrow
const changeImgToLeft = function() {
    (num === 1) ? num = lastNum : num--;
    heroSection.classList = `hero hero${num}`;
    paintDot(num);
}

//changing silde/image when click on dots
const changeImg = function(num) {
    heroSection.classList = `hero hero${num}`;
    paintDot(num);     
}

//painting current dot
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

//painting first dot when website starts
paintDot(num);

//init Interval of slides/images
const initChangeImgAuto = function() { 
    clearInterval(changeImgAuto);
    changeImgAuto = setInterval(changeImgToRight, 5000);
};

//clear Interval of slides/images
const stopChangeImgAuto = function() {
    clearInterval(changeImgAuto);
};

//init interval when website starts
initChangeImgAuto();


arrowNext.addEventListener("click", changeImgToRight);
arrowPrev.addEventListener("click", changeImgToLeft);
arrowNext.addEventListener("mouseover", stopChangeImgAuto);
arrowPrev.addEventListener("mouseover", stopChangeImgAuto);
dot1.addEventListener("mouseover", stopChangeImgAuto);
dot2.addEventListener("mouseover", stopChangeImgAuto);
dot3.addEventListener("mouseover", stopChangeImgAuto);


