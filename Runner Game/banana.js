class Banana extends Properties{
    width = 10;
    height = 30;
    color = "yellow";
    constructor(x, y){
        super(x, y);
    }

    move = (speed) => {
        this.x -= speed;
    }
}

const banana = new Banana(1300, 300);
const banana2 = new Banana(1600, 400);

