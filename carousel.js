const heroSection = document.querySelector(".hero");
const btnNext = document.querySelector("#hero__btnNext");
const btnPrev = document.querySelector("#hero__btnPrev");

let i = 0;
function changeImgToRight() {
    (i < 4) ? i++ : i = 0;
    const className = heroSection.getAttribute("class");
    const num = className[className.length-1];
   

    className.indexOf(num);

    
    console.log(num);
}

btnNext.addEventListener("click", changeImgToRight);





