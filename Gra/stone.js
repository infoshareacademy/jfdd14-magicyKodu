class Stone extends Properties {
    width = 50;
    height = 50;
    color= "gray";
    constructor(x, y){
        super(x, y);
    }
}

const stone = new Stone(500, 550);
console.log(stone);


stone.print();