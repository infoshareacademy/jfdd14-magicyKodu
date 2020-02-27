class Runner extends Properties {
    width = 20;
    height = 100;
    speed = 10;
    gravity = 10;
    color = "black";
    constructor(x, y) {
        super(x, y);
    }

    move = (key) => {
                console.log('move');
                this.y -= this.speed ;
                if (this.y < 200) {
                 this.speed = -this.speed ;
                } if (this.y > 400) {
                    this.speed = 0;
                }
        
    
    }
};




const runner = new Runner(100, 400);
console.log(runner);



function setup() {
    // Dodanie event listenera na wciśnięcie przycisku
    window.addEventListener("keydown", event => runner.move(event.key));


    // Nasza "klatka" gry, elementy które mają wykonać się cyklicznie są wkładane tutaj
    window.setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        runner.print();
        runner.move();
        
    },50);
}

window.addEventListener('keydown', setup)
// setup();