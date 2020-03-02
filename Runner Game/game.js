const canvas = document.getElementsByClassName("canvas")[0];
const ctx = canvas.getContext("2d"); 
const scale = 10; 
const rows = canvas.height / scale;
const columns = canvas.width / scale;
const btn = document.querySelector("button");
const result = document.querySelector(".score");


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

        this.y -= this.speed;
     
        if (this.y < 250) {
            this.speed = -(this.speed);   
        }
        if (this.y > 390) {
            this.speed = 0;    
        }    

    }
    
    jump = () => {
        if (this.canJump){
            this.speed = scale;
        }   
    }

}

const runner = new Runner(100, 400);

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




function addScore() {
    runner.score += 1;
    result.innerHTML = runner.score;
}

function bananaScore() {
	bananas.forEach(el =>check(el));
}
  

function check(el){

}
  
function setUp() { 
    
    newBananas(); 
    newStones();
    window.setInterval( () => {
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
        bananaScore();         
    }, 30);
    // check();
}



window.addEventListener("keydown", e => {
    if (e.code === "ArrowUp") {
        runner.jump(); 
        runner.move();
    }
})

btn.addEventListener("click", setUp);




//----------OLD VERSION----------
// let stones = [];
// let bananas = [];

// function updateStones(stone, index, data) {

//     stone.print();
//     stone.move();
//     console.log(index, data.length)
//     if (stone.x < 0) {
//         console.log("wywalam")
//         // stones.splice(index, 1);
//         data[index] = null;
//     }
// }

// let time = 0;

// function getRandomFromTo(min, max) {
//     return Math.floor(Math.random()*(max - min) + min);
// }
// function animationFrame(){
//     ctx.clearRect(0,0,1200,1200);

//     stones.forEach(updateStones);
//     stones = stones.filter(function (el) { return !!el })


//     bananas.forEach(updateStones);
//     bananas = bananas.filter(function (el) { return !!el })


//     if (time % getRandomFromTo(10, 10) === 0) {
//         stones.push(new Stone(1200,400));
//         bananas.push(new Banana(1200,300));
//     }
//     time ++;
// }

// const refreshFrame = setInterval(animationFrame,40); 