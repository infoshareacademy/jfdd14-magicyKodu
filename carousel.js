var slide = 0;

function carousel() {
    
    const carouselImg = document.querySelectorAll(".hero");

    for (let i = 0; i < carouselImg.length; i++){
        carouselImg[i].style.display = "none";
    }

    slide++;

    if (slide > carouselImg.length) {
        slide = 1
    };
    carouselImg[slide-1].style.display = "block";
    //setTimeout(carousel, 5000); 
}

carousel();




