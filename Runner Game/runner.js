class Runner extends Properties {
    width = 20;
    height = 100;
    speed = 1;
    gravity = 10;
    color = "black";
    constructor(x, y) {
        super(x, y);
    }

    move = (key) => {
        if (this.y < 200) {
            this.speed = 0;
        }
            this.y -= this.speed;
            
       
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
        
    },);
}

window.addEventListener('keydown', setup)
// setup();