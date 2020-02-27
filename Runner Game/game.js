const canvas = document.getElementsByClassName("canvas")[0];
const ctx = canvas.getContext("2d"); 
const scale = 10; 
const rows = canvas.height/scale;
const columns = canvas.width/scale;


let stones = [];
let bananas = [];

function updateStones(stone, index, data) {

    stone.print();
    stone.move();
    console.log(index, data.length)
    if (stone.x < 0) {
        console.log("wywalam")
        // stones.splice(index, 1);
        data[index] = null;
    }
}

let time = 0;

function getRandomFromTo(min, max) {
    return Math.floor(Math.random()*(max - min) + min);
}
function animationFrame(){
    ctx.clearRect(0,0,1200,1200);

    stones.forEach(updateStones);
    stones = stones.filter(function (el) { return !!el })


    bananas.forEach(updateStones);
    bananas = bananas.filter(function (el) { return !!el })


    if (time % getRandomFromTo(10, 10) === 0) {
        stones.push(new Stone(1200,400));
        bananas.push(new Banana(1200,300));
    }
    time ++;
}

const refreshFrame = setInterval(animationFrame,40); 
