//----------Canvas generator----------
const canvas = document.getElementsByClassName("canvas")[0];
const ctx = canvas.getContext("2d"); 
const btn = document.querySelector(".userPanel__buttons__btnStart");
const btnInstruction = document.querySelector(".userPanel__buttons__btnInstruction");
const result = document.querySelector("#current");
let resultMax = document.querySelector("#max");
const instruction = document.querySelector(".gameInstruction");
const gameOverTxt = document.querySelector(".gameOverTxt");
const imgBanana = document.getElementById("banana");
const imgStone = document.getElementById("stone");
const imgRunner = document.getElementById("runner"); 
const imgDrink = document.getElementById("drink"); 
let gameOver = false;

//----------Configuration speed----------
let bananaSpeed = 9;
let stoneSpeed = 9;
let drinkSpeed = 9;
let bananaRandomMin = 1;
let bananaRandomMax = 5;
let stoneRandomMin = 1;
let stoneRandomMax = 5;
let drinkRandomMin = 1;
let drinkRandomMax = 10;


//----------Speed change----------
const bananaSpeedRatio = 0.001; // speed up ratio
const stoneSpeedRatio = 0.001;
const drinkSpeedRatio = 0.0012; // speed up ratio
const ratio = 0.0001 // banana/stone frequency increment

function startGame() {
//----------General Class Properties----------
    class Properties {
        constructor(x, y, width, height, img){
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.img = img;
        }
        print = () => {
            ctx.fillStyle = this.color;
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        }    
    }

    //----------Class Banana----------
    class Banana extends Properties {
        x = 1200;
        y = getRandomInt(150, 250);
        width = 30*2.2;
        height = 30*2.2;
        bananaHit = false; 
        img = imgBanana;

        move = (speed) => {
            this.x -= speed;
        }
    }

    //----------Class Stone----------
    class Stone extends Properties {
        x = 1200;
        y = 455;
        width = 40*2.5;
        height = 30*2.5;
        img = imgStone;

        move = (speed) => {
            this.x -= speed;
        }
    }

    //----------Class Runner----------
    class Runner extends Properties {
        width = 45*3.2;
        height = 65*3.2;
        speed = 0;
        score = 0;
        canJump = true;
        img = imgRunner;
        constructor(x, y) {
            super(x, y);
        }

        move = () => {  
            if (controller.up && this.canJump == false) {
                this.speed -= 50;
                this.canJump = true;
            }   
            this.speed += 1.5; // gravity
            this.y += this.speed;
            this.speed *= 0.9; // friction
            if (this.y > 320) {
                this.canJump = false;
                this.y = 320;
                this.speed = 0;
            }
        }
    }

    const runner = new Runner(100, 320);

    controller = {
        up:false,
        keyListener: function(ev) {
            const keyState = (ev.type == "keydown") ? true : false;
            if(ev.keyCode == 38)
                controller.up = keyState;     
        } 
    }

    //----------Object Bird----------
    class Drink extends Properties {
        x = 1200;
        y = 300;
        width = 140*0.3;
        height = 300*0.3;
        color= "black";
        drinkHit = false;
        img = imgDrink;

        move = (speed) => {
            this.x -= speed;
        }
    }

    let bananas = [];
    let stones = [];
    let drinks = [];

    //----------Random value----------
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function newBananas() {
        let rand = getRandomInt(bananaRandomMin, bananaRandomMax);
        bananas.push(new Banana());   
        if (bananas.length === 5) {
            bananas.shift();
        }
        setTimeout(newBananas, rand * 1000);
    }

    function newStones() {
        let rand = getRandomInt(stoneRandomMin, stoneRandomMax);
        stones.push(new Stone());
        if (stones.length === 5) {
            stones.shift();
        }
        setTimeout(newStones, rand * 1000);
    } 

    function newDrinks() {
        let rand = getRandomInt(drinkRandomMin, drinkRandomMax);
        drinks.push(new Drink());     
        if (drinks.length === 5) {
            drinks.shift();
        }
        setTimeout(newDrinks, rand * 3000);
    }


    function catchBanana(el){
        if (el.x <= runner.x + runner.width && el.x + el.width >= runner.x && runner.y <= el.y + el.height){ // check y just from below. You can`t jump above banana. If You would decide to do so, You would have to add another check
            runner.score += 1;
            result.innerHTML = runner.score;
            el.bananaHit = true;
            let removeIndex = bananas.map(el => el.bananaHit).indexOf(true);
            bananas.splice(removeIndex, 1);
        } 
    }

    function collisionWithStone(el){
        if (el.x + 20 <= runner.x + runner.width && el.x + el.width - 20 >= runner.x && el. y + 40 <= runner.y + runner.height){ // check y just from above. You can`t jump below stone. If You would decide to do so, You would have to add another check
            gameOver = true; 
            canvas.classList.add("gameOver");   
            gameOverTxt.classList.add("show"); 
        }
        storeScore(runner.score);
    }

    function catchDrink(el){
        if (el.x + 10 <= runner.x + runner.width && el.x + el.width >= runner.x && runner.y <= el.y + el.height){ // check y just from below. You can`t jump above banana. If You would decide to do so, You would have to add another check
            runner.score += 3;
            result.innerHTML = runner.score;
            el.drinkHit = true;
            let removeIndex = drinks.map(el => el.drinkHit).indexOf(true);
            drinks.splice(removeIndex, 1);
        } 
    }

    function speedUp(){
        bananaSpeed += bananaSpeedRatio;
        stoneSpeed += stoneSpeedRatio;
        drinkSpeed += drinkSpeedRatio;
        bananaRandomMin -= ratio;
        bananaRandomMax -= ratio;
        stoneRandomMin -= ratio;
        stoneRandomMax -= ratio;
        drinkRandomMin -= ratio;
        drinkRandomMax -= ratio;
    }

    newBananas(); 
    newStones();
    newDrinks();
    hideInstruction();
    
    function setUp() { 
        if (result.innerHTML > 0 && gameOver == true){
            result.innerHTML = 0;     
        }
        canvas.classList.remove("gameOver");
        gameOverTxt.classList.remove("show"); 
        gameOverTxt.classList.add("hide"); 
        gameOver = false;
        ctx.clearRect(0, 0, canvas.width, canvas.height);       
        runner.print();
        runner.move();
        bananas.forEach(el => {
            el.print();
            el.move(bananaSpeed); 
            catchBanana(el);                
        });     
        stones.forEach( el => {
            el.print();
            el.move(stoneSpeed);
            collisionWithStone(el);
        }); 
        drinks.forEach(el => {
            el.print();
            el.move(bananaSpeed); 
            catchDrink(el);                
        });    
        speedUp();
        if (gameOver == false) {
            window.requestAnimationFrame(setUp);
        }            
}

window.addEventListener("keydown", controller.keyListener)
window.addEventListener("keyup", controller.keyListener);
window.requestAnimationFrame(setUp);
}

//----------Save to localStorage----------
function storeScore(addScore) {
    if (localStorage.getItem("savedScore") === null){
        localStorage.savedScore = JSON.stringify(addScore);
    } else {
        let retrievedScore = JSON.parse(localStorage.savedScore);
        if (retrievedScore >= addScore ) {
            maxScore = retrievedScore;
        }
        else {
            maxScore = addScore;
            localStorage.savedScore = JSON.stringify(addScore);
        }
        resultMax.innerHTML = maxScore;
    }
}

//----------Instruction option----------
function hideInstruction() {
    instruction.classList.add("hide");
}

function showInstruction() {
    instruction.classList.remove("hide");
    instruction.classList.add("active");       
}

btn.addEventListener("click", startGame);
btnInstruction.addEventListener("click", showInstruction);

