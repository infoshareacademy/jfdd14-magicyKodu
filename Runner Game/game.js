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
        
        // if (banana.x === 600) {
            
        //     // bananas.push(banana);
        //     // console.log(bananas);
        //     console.log("lalalalala");
            
        // }
    }

    print = () => {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    
}

const game = new Game();

let bananas = [];

function newBanana() {
    const min = 2;
    const max = 5;
    let rand = Math.floor(Math.random() * (max - min + 1) + min); 
    bananas.push(banana);
    banana.move(5);
    banana.print();
   console.log(bananas);
    setTimeout(newBanana, rand * 1000);
  }
  
  

function setup() {
    newBanana(); 
    window.setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);  
         
        
        // game.updateBananas();     
          
        floor.print();     
    }, 50);
    
}

setup();
