class Stone extends Properties {
    width = 50;
    height = 50;
    color= "gray";
    speed = 10;
    constructor(x, y){
        super(x, y);
    }

    move() {
        this.x -= this.speed;
    }
}
