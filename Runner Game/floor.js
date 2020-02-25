class Floor {
    x = 0;
    y = 500;
    width = 1300;
    height = 100;
    color = "brown";

    print = () => {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

// class Floor extends Properties{
//     color = "brown";
//     constructor(x, y, width, height){
//         this.x = 0;
//         this.y = 500;
//         this.width = 1300;
//         this.height = 100;
//     }
// }

const floor = new Floor();