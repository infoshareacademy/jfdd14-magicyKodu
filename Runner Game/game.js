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

    updateBananas = () => {
        
        if (banana.x === 600) {
            
            // bananas.push(banana);
            // console.log(bananas);
            console.log("lalalalala");
            
        }
    }

    print = () => {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    
}

const game = new Game();


function setup() {
    game.print();  
    window.setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);  
        game.updateBananas();     
        banana.move(5);
        banana.print();
        floor.print();     
    }, 50);
    
}

setup();