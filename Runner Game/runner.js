class Runner extends Properties {
    width = 20;
    height = 100;
    speed = 50;
    gravity = 10;
    color = "black";
    constructor(x, y) {
        super(x, y);
    }

    move = (key) => {
        if (key === "ArrowUp") {
            this.y -= 50;
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
    }, 250);
}

setup();