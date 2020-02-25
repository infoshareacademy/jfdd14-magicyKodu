// class Stone extends Properties {
//     width = 50;
//     height = 50;
//     color= "gray";
//     speed = 50;
//     constructor(x, y){
//         super(x, y);
//     }
// }

// const stone = new Stone(500, 550);
// console.log(stone);

// move(){
//     startX += speed;
// }
// function animationFrame(){
//     ctx.clearRect(0,0,800,800);

//     stone.init();
//     stone.move();
// }

class Stone{
    constructor(startX,startY){
        this.witdth = scale*2;
        this.height = scale*3;
        this.speed = scale;
        this.startX = startX;
        this.startY = startY;
    }

    init(){
    ctx.fillStyle = "gray"
    ctx.fillRect(this.startX,this.startY,this.witdth,this.height);
    }
    move(){
        this.startX -= this.speed;
    }
}
const posX = 1100
const posY = 400

const stone = new Stone(posX,posY);

function animationFrame(){
    ctx.clearRect(0,0,1200,1200);
    stone.init();
    stone.move();
}

const refreshFrame = setInterval(animationFrame,600); 