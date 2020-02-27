const canvas = document.getElementsByClassName("canvas")[0];
const ctx = canvas.getContext("2d"); 
const scale = 20; 
const rows = canvas.height / scale;
const columns = canvas.width / scale;
const btn = document.querySelector("button");
const result = document.querySelector(".score");

x = 0;
y = 0;

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
    constructor(x, y){
        super(x, y);
    }

    move = (speed) => {
        this.x -= speed;
    }
}

//----------Class Stone----------
class Stone extends Properties{
    x = 1200;
    y = 450;
    width = 50;
    height = 50;
    color= "gray";
    constructor(x, y){
        super(x, y);
    }

    move = (speed) => {
        this.x -= speed;
    }
}

//----------Class Runner----------
class Runner extends Properties {
    width = 20;
    height = 100;
    speed = 10;
    gravity = 10;
    color = "black";
    isRun = true;
    constructor(x, y) {
        super(x, y);
    }

    move = (key) => {
        this.y -= this.speed;
            if (this.y < 250) {
                this.speed = -this.speed ;
                } if (this.y > 400 && this.isRun) {
                    this.speed = 0;
                    this.isRun = false;
                    // clearInterval(moveInterval);
                } 
      
    }
    
    resetSpeed = () => {console.log('rs'); this.speed=10;}
};

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
    bananas.push(new Banana);
    if (bananas.length === 10) {
        bananas.shift();
    }
    setTimeout(newBananas, rand * 500);
}

function newStones() {
    let rand = getRandomInt(0,20);
    stones.push(new Stone);
    if (stones.length === 10) {
        stones.shift();
    }
    setTimeout(newStones, rand * 500);
}
  
function setUp() {
    window.addEventListener("keydown", event => 
    {runner.resetSpeed(); 
    runner.move(event.key); })
    newBananas(); 
    newStones();
    window.setInterval( () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        floor.print();
        bananas.forEach( el => {
            el.print();
            el.move(5);
        });
        runner.print();
        runner.move();
        runner.isRun = true; 
        stones.forEach( el => {
            el.print();
            el.move(5);
        });   
    }, 50);
    
}

btn.addEventListener("click", setUp);

let moveInterval;



// setUp();

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