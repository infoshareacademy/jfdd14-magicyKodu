const canvas = document.getElementsByClassName("canvas")[0];
const ctx = canvas.getContext("2d"); 
const scale = 10;
const columns = canvas.width / scale;
const btn = document.querySelector("button");
const result = document.querySelector(".score");


function startGame() {

//----------General Class Properties----------
class Properties{
    constructor(x, y, width, height, color){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }
    print = () => {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }    
}

//----------Class Banana----------
class Banana extends Properties{
    x = 1200;
    y = 300;
    width = 10;
    height = 30;
    color = "yellow"; 

    move = () => {
        this.x -= scale;
    }

}

//----------Class Stone----------
class Stone extends Properties{
    x = 1200;
    y = 450;
    width = 50;
    height = 50;
    color= "gray";

    move = () => {
        this.x -= scale;
    }

}

//----------Class Runner----------
class Runner extends Properties {
    width = 20;
    height = 100;
    speed = 0;
    color = "black";
    score = 0;
    canJump = true;
    constructor(x, y) {
        super(x, y);
    }

    move = () => {  
        if (controller.up && this.canJump == false) {
            this.speed -= 40;
            this.canJump = true;
        }   
        this.speed += 1.5; // gravity
        this.y += this.speed;
        this.speed *= 0.9; // friction
        // if runner is falling below floor line
        if (this.y > 400) {
            this.canJump = false;
            this.y = 400;
            this.speed = 0;
        }
    }
}

const runner = new Runner(100, 400);

controller = {
    up:false,
    keyListener: function(ev) {
        const keyState = (ev.type == "keydown") ? true : false;
        controller.up = keyState;     
    } 
  };

//----------Object floor----------
const floor = new Properties(0, 500, 1300, 100, "brown");



let bananas = [];
let stones = [];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function newBananas() {
    let rand = getRandomInt(0,20);
    const banana = new Banana();
    bananas.push(banana);  
    console.log(bananas);   
    if (banana.x < runner.x + runner.width) {
        bananas.shift();
        console.log(bananas);
    }
    setTimeout(newBananas, rand * 1000);
}

function newStones() {
    let rand = getRandomInt(0,10);
    stones.push(new Stone());
    if (stones.length === 10) {
        stones.shift();
    }
    setTimeout(newStones, rand * 1000);
}


// function addScore() {
//     runner.score += 1;
//     result.innerHTML = runner.score;
// }

// function bananaScore() {
// 	bananas.forEach(el =>check(el));
// }
  

// function check(el){

// }

newBananas(); 
newStones();
  
function setUp() { 
    ctx.clearRect(0, 0, canvas.width, canvas.height);       
    floor.print();
    runner.print();
    runner.move();
  
    bananas.forEach(el => {
        el.print();
        el.move();                 
    });     
    stones.forEach( el => {
        el.print();
        el.move();
    }); 
    // bananaScore();         
    window.requestAnimationFrame(setUp);
}


window.addEventListener("keydown", controller.keyListener)
window.addEventListener("keyup", controller.keyListener);
window.requestAnimationFrame(setUp);
}

btn.addEventListener("click", startGame);



//-------------OLD VERSION-------------

// window.addEventListener("keydown", e => {
//     if (e.code === "ArrowUp") {
//         runner.jump(); 
//         runner.move();
//     }
// })