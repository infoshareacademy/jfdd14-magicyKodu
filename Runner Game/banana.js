class Banana extends Properties{
    width = 10;
    height = 20;
    color= "yellow";
    constructor(x, y){
        super(x, y);
    }
}

const banana = new Banana(800, 300);
console.log(banana);

banana.print();