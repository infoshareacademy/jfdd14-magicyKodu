class Runner extends Properties{
    width = 20;
    height = 100;
    color= "black";
    constructor(x, y){
        super(x, y);
    }

    move = (btn) => {
        
    }

}

const runner = new Runner(300, 300);
console.log(runner);

runner.print();