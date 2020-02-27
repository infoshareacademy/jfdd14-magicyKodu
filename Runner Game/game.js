const canvas = document.getElementsByClassName("canvas")[0];
const ctx = canvas.getContext("2d"); 
const scale = 20; 
const rows = canvas.height / scale;
const columns = canvas.width / scale;
const btn = document.querySelector("button");

class Banana extends Properties{
    x = 1200;
    y = 300;
    width = 10;
    height = 30;
    color = "yellow";
    constructor(x, y){
        super(x, y);
    }

    move = (speed) => {
        this.x -= speed;
    }
}

let bananas = [];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function newBananas() {
    let rand = getRandomInt(10,20);
    bananas.push(new Banana);
    setTimeout(newBananas, rand * 500);
}
  
function setUp() {
    
    window.setInterval ( () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        floor.print();   
        bananas.forEach( el => {
            el.print();
            el.move(5);
        });
    }, 50);
    
}

btn.addEventListener("click", setUp);
newBananas();
// setUp();

