const canvas = document.getElementsByClassName("canvas")[0];
const ctx = canvas.getContext("2d"); 
const scale = 20; 
const rows = canvas.height/scale;
const columns = canvas.width/scale;




// S N A K E 



const canvas = document.getElementsByClassName("canvas")[0];
const ctx = canvas.getContext("2d");
const scale = 40;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

class Snake {
    // pozycja głowy
    x = 0;
    y = 0;
    // prędkosć głowy
    velX = scale * 1;
    velY = 0;
    // kolor węa
    color = "#fff";
    // długość ogona (czyli długość węza nie licząc głowy)
    total = 0;
    // elementy ogona, kazdy z nich ma x i y
    tail = [];


    draw = () => {
        ctx.fillStyle = this.color;
        // Rysujemy kazdy element ogona (bez głowy!)
        this.tail.forEach(item => ctx.fillRect(item.x, item.y, scale, scale));
        // Rysujemy głowę
        ctx.fillRect(this.x, this.y, scale, scale);
    }

    update = () => {
        // Kazdemu elementowi ogona przypisujemy pozycję następnego elementu ogona (od końcówki do początku ogona, ale od początku do końcówki tablicy!)
        this.tail.forEach((item, i) => {
            if (i < this.tail.length - 1) {
                this.tail[i] = this.tail[i + 1];
            }
        });

        // Do ostatniego elementu tablicy (element ogona przy głowie), przypisujemy wartość pozycji głowy
        this.tail[this.total - 1] = { x: this.x, y: this.y };

        // Zmieniamy pozycję głowy (teraz juz mozemy, bo została przypisana do części ogona zaraz za głową)
        this.x += this.velX;
        this.y += this.velY;
    }

    changeDir = (btn) => {
        switch (btn) {
            case "w":
                this.velX = 0;
                this.velY = -(scale * 1);
                break;
            case "s":
                this.velX = 0;
                this.velY = scale * 1;
                break;
            case "a":
                this.velX = -(scale * 1);
                this.velY = 0;
                break;
            case "d":
                this.velX = scale * 1;
                this.velY = 0;
                break;
        }
    }

    // Ta metoda dodaje jeden długości ogona
    grow = () => {
        this.total++;
    }

    // Sprawdzamy kolizję z jabłkiem, jeśli nastąpiła, to wywołujemy metodę grow() i ustawiamy nową losową pozycję jabłka
    checkCollision = (apple) => {
        if (apple.x === this.x && apple.y === this.y) {
            apple.setPos();
            this.grow();
        }
    }
}

class Apple {
    color = "#ff0000";
    // Na początku istnienia jabłka ustawiamy mu losową pozycję
    constructor() {
        this.setPos();
    }

    draw = () => {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, scale, scale);
    }

    // Metoda ustawiająca losową pozycję jabłka
    setPos = () => {
        this.x = (Math.floor(Math.random() * columns - 1) + 1) * scale;
        this.y = (Math.floor(Math.random() * rows - 1) + 1) * scale;
    }
}

const snake = new Snake();

function setup() {
    // Dodanie event listenera na wciśnięcie przycisku
    window.addEventListener("keydown", event => snake.changeDir(event.key));
    const apple = new Apple();

    // Nasza "klatka" gry, elementy które mają wykonać się cyklicznie są wkładane tutaj
    window.setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        snake.checkCollision(apple);
        snake.update();
        apple.draw();
        snake.draw();
    }, 250);
}

// Inicjalizacja gry
setup();