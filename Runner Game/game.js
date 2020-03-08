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
const imgRunner0 = document.getElementById("runner0"); 
const imgRunner1 = document.getElementById("runner1"); 
const imgRunner2 = document.getElementById("runner2"); 
const imgDrink = document.getElementById("drink"); 
const imgLand1 = document.getElementById("land1");
const imgLand2 = document.getElementById("land2");
const banana = new Audio('sound-mp3/banana.mp3');
const stone = new Audio('sound-mp3/stone.mp3');
const drink = new Audio('sound-mp3/drink.mp3');
let gameOver = false;

//----------Configuration speed----------
let generalSpeed = 9;
let bananaRandomMin = 10;
let bananaRandomMax = 50;
let stoneRandomMin = 10;
let stoneRandomMax = 50;
let drinkRandomMin = 10;
let drinkRandomMax = 50;

//----------Speed change----------
const generalSpeedRatio = 0.003; // speed up ratio
const ratio = 0.00167 // frequency increment

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
        y = 445;
        width = 40*2.5;
        height = 30*2.5;
        img = imgStone;

        move = (speed) => {
            this.x -= speed;
        }
    }

    //----------Class Drink----------
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

    //----------Class Landscape1----------
    class Landscape1 extends Properties {
        x = 0;
        y = 0;
        width = 1800;
        height = 600;
        img = imgLand1;
    
        move = (speed) => {
            this.x -= speed;
                if (this.x <= -this.width) this.x = 1800;
        }
    }

    const land1 = new Landscape1();

    //----------Class Landscape2----------
    class Landscape2 extends Properties {
        x = 1800;
        y = 0;
        width = 1800;
        height = 600;
        img = imgLand2;
    
        move = (speed) => {
            this.x -= speed;
                if (this.x <= -this.width) this.x = 1800;
        }
    }

    //----------Class Runner----------
    class Runner extends Properties {
        width = 45*3.2;
        height = 65*3.2;
        speed = 0;
        score = 0;
        canJump = true;
        frameCheck = 0;
        img = imgRunner0;
        constructor(x, y) {
            super(x, y);
        }

        move = () => {  
            if (this.frameCheck > 15 && this.canJump == false) { 
                this.img = imgRunner1; 
                if (this.frameCheck > 30) {
                    this.frameCheck = 0;
                    this.img = imgRunner0;
                }
            }
            if (controller.up && this.canJump == false) {
                this.speed -= 50;
                this.canJump = true;
                this.img = imgRunner2;
            }   
            this.speed += 1.5; // gravity
            this.y += this.speed;
            this.speed *= 0.9; // friction
            if(this.canJump == false){
                this.frameCheck++;
            }
            if (this.y > 310) {
                this.canJump = false;
                this.y = 310;
                this.speed = 0;
            }
        }
    }

    const runner = new Runner(100, 310);

    controller = {
        up:false,
        keyListener: function(ev) {
            const keyState = (ev.type == "keydown") ? true : false;
            if(ev.keyCode == 38)
                controller.up = keyState;     
        } 
    }

    const land2 = new Landscape2();

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
        setTimeout(newBananas, rand * 100);
    }

    function newStones() {
        let rand = getRandomInt(stoneRandomMin, stoneRandomMax);
        stones.push(new Stone());
        if (stones.length === 5) {
            stones.shift();
        }
        setTimeout(newStones, rand * 100);
    } 

    function newDrinks() {
        let rand = getRandomInt(drinkRandomMin, drinkRandomMax);
        drinks.push(new Drink());     
        if (drinks.length === 5) {
            drinks.shift();
        }
        setTimeout(newDrinks, rand * 400);
    }

    function catchBanana(el){
        if (el.x <= runner.x + runner.width && el.x + el.width >= runner.x && runner.y <= el.y + el.height){ // check y just from below. You can`t jump above banana. If You would decide to do so, You would have to add another check
            runner.score += 1;
            result.innerHTML = runner.score;
            banana.play();
            el.bananaHit = true;
            let removeIndex = bananas.map(el => el.bananaHit).indexOf(true);
            bananas.splice(removeIndex, 1);
        } 
    }

    function collisionWithStone(el){
        if (el.x + 20 <= runner.x + runner.width && el.x + el.width - 20 >= runner.x && el. y + 40 <= runner.y + runner.height){ // check y just from above. You can`t jump below stone. If You would decide to do so, You would have to add another check
            gameOver = true; 
            stone.play();
            canvas.classList.add("gameOver");   
            gameOverTxt.classList.add("show"); 
        }
        storeScore(runner.score);
    }

    function catchDrink(el){
        if (el.x + 10 <= runner.x + runner.width && el.x + el.width >= runner.x && runner.y <= el.y + el.height){ // check y just from below. You can`t jump above banana. If You would decide to do so, You would have to add another check
            runner.score += 3;
            result.innerHTML = runner.score;
            drink.play();
            el.drinkHit = true;
            let removeIndex = drinks.map(el => el.drinkHit).indexOf(true);
            drinks.splice(removeIndex, 1);
        } 
    }

    function speedUp(){
        generalSpeed += generalSpeedRatio;
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
            generalSpeed = 9;    
        }
        canvas.classList.remove("gameOver");
        gameOverTxt.classList.remove("show"); 
        gameOverTxt.classList.add("hide"); 
        gameOver = false;
        ctx.clearRect(0, 0, canvas.width, canvas.height); 
        land1.print();
        land1.move(9); 
        land2.print();
        land2.move(9);      
        runner.print();
        runner.move();
        bananas.forEach(el => {
            el.print();
            el.move(generalSpeed); 
            catchBanana(el);                
        });     
        stones.forEach( el => {
            el.print();
            el.move(generalSpeed);
            collisionWithStone(el);
        }); 
        drinks.forEach(el => {
            el.print();
            el.move(generalSpeed); 
            catchDrink(el);                
        });    
        speedUp();
        if (gameOver == false) {
            window.requestAnimationFrame(setUp);
        }            
}

window.addEventListener("keydown", controller.keyListener);
window.addEventListener("keyup", controller.keyListener);
window.requestAnimationFrame(setUp);
}

//----------Save to localStorage----------
function storeScore(addScore) {
    if (localStorage.getItem("savedScore") === null){
        localStorage.savedScore = JSON.stringify(addScore);
    } else {
        let retrievedScore = JSON.parse(localStorage.savedScore);
        if (retrievedScore >= addScore) {
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

