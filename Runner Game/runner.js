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
                console.log('move');
                this.y -= this.speed ;
                if (this.y < 200) {
                 this.speed = -this.speed ;
                } if (this.y > 400 && this.isRun) {
                    this.speed = 0;
                    this.isRun = false;
                    clearInterval(moveInterval);
                } 
      
    }

    resetSpeed = () => {console.log('rs'); this.speed=10;}
};

const runner = new Runner(100, 400);
console.log(runner);

let moveInterval;


window.addEventListener("keydown", event => 
    {runner.resetSpeed(); runner.move(event.key); moveInterval = window.setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        runner.print();
        runner.move();
        runner.isRun = true;
}, 50); });