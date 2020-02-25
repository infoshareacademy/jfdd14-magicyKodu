const canvas = document.getElementsByClassName("canvas")[0];
const ctx = canvas.getContext("2d"); 
const scale = 20; 

class Game {
    x = 0;
    y = 0;
    constructor(width, height){
        this.width = canvas.width;
        this.height = canvas.height;
        // this.x = 0;
        // this.y = 0;
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d"); 
        this.rows = canvas.height/scale;
        this.columns = canvas.width/scale;
    }

    initBananas = (banana) => {
        if (banana.x === this.x) {
            console.log(this.x);
        }
    }

    print = () => {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        console.log(this.x);
    }
    
}

const game = new Game();



function setup() {
    game.print();
    // game.initBananas();
    window.setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        banana.move(7);
        banana.print();
        banana2.move(5);
        banana2.print();
        floor.print();
        // console.log(banana.x);
    }, 100);
    
}

setup();