class Banana extends Properties{
    width = 10;
    height = 20;
    color= "yellow";
    speed = 10;
    constructor(x, y){
        super(x, y);
    }

    move() {
        this.x -= this.speed;
    }
}
